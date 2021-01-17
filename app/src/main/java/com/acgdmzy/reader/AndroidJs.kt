package com.acgdmzy.reader

import android.content.Intent
import android.net.Uri
import android.os.Build
import android.util.Base64
import android.util.Log
import android.view.View
import android.view.WindowManager
import android.webkit.JavascriptInterface
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import java.io.*
import kotlinx.coroutines.*
import org.apache.commons.io.IOUtils
import java.util.concurrent.locks.ReentrantLock

// 继承自Object类
class AndroidJs constructor(private val activity: MainActivity) : Any() {

    private val tag = "AndroidJs"
    private val mLock = ReentrantLock()

    // 定义JS需要调用的方法
    // 被JS调用的方法必须加入@JavascriptInterface注解
    @JavascriptInterface
    fun hello(msg: String?) {
        println(msg)
    }

    @JavascriptInterface
    fun readFile(path: String): String? {
        Log.i("Path", path)
        if (path.startsWith("content://")) {
            val uri = Uri.parse(path)
            val inStream = activity.contentResolver.openInputStream(uri)
            val result = Base64.encodeToString(IOUtils.toByteArray(inStream), Base64.NO_WRAP)
            inStream?.close()
            return result
        } else {
            val data = readFileToByteArray(path)
            if (data != null) return Base64.encodeToString(data, Base64.NO_WRAP)
        }
        if (path.startsWith("file://")) {
            val data = readFileToByteArray(path.substring(7))
            if (data != null) return Base64.encodeToString(data, Base64.NO_WRAP)
        }
        return null
    }

    @JavascriptInterface
    fun readFileAsync(resultCode: Int, name: String, path: String) {
        GlobalScope.launch(Dispatchers.IO) {
            mLock.lock()
            val data: String?
            try {
                data = readFile(path)
                activity.webView!!.post {
                    activity.webView!!.evaluateJavascript(
                        "readFileResult($resultCode,'$name','$data')",
                        null
                    )
                }
            } catch (e: Exception) {
                e.printStackTrace()
            } finally {
                mLock.unlock()
            }
        }
    }

    @JavascriptInterface
    fun saveFile(name: String, type: String?, base64Data: String) {
        val data = Base64.decode(base64Data.split(",")[1], 0)
        val dir = activity.getExternalFilesDir(type)
        writeByteArrayToFile("$dir/$name", data)
        activity.setResult(AppCompatActivity.RESULT_OK, activity.intent)
        Log.i("saveFile", name)
    }

    @JavascriptInterface
    fun fileExits(path: String): Boolean {
        return File(path).exists()
    }

    @JavascriptInterface
    fun getExternalFilesDir(type: String?): String {
        return activity.getExternalFilesDir(type).toString()
    }

    @JavascriptInterface
    fun getStatusBarHeight(): Int {
        var height = 0
        if (Build.VERSION.SDK_INT in 23..29){
            val resourceId =
                activity.applicationContext.resources.getIdentifier(
                    "status_bar_height",
                    "dimen",
                    "android"
                )
            if (resourceId > 0) {
                height = activity.applicationContext.resources.getDimensionPixelSize(resourceId)
            }
            Log.i("getStatusBarHeight", height.toString())
        }
        return height
    }

    @JavascriptInterface
    fun toast(msg: String) {
        Toast.makeText(activity, msg, Toast.LENGTH_SHORT).show()
    }

    @JavascriptInterface
    fun setLight() {
        activity.window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
    }

    @JavascriptInterface
    fun setDark() {
        activity.window.decorView.systemUiVisibility = 0
    }

    @JavascriptInterface
    fun loadBook(name: String, path: String) {
        val newIntent = Intent(activity, MainActivity::class.java)
        newIntent.putExtra("path", path);
        newIntent.putExtra("name", name);
        activity.startActivityForResult(newIntent, 4);
    }

    @JavascriptInterface
    fun openBook() {
        val intent = Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
            addCategory(Intent.CATEGORY_OPENABLE)
            type = "application/epub+zip"
            putExtra(Intent.EXTRA_LOCAL_ONLY, true)
            addFlags(Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION)
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }

        activity.startActivityForResult(intent, 1)
    }

    @JavascriptInterface
    fun openDir() {
        val intent = Intent(Intent.ACTION_OPEN_DOCUMENT_TREE).apply {
            // type = "application/epub+zip"
            putExtra(Intent.EXTRA_LOCAL_ONLY, true)
            addFlags(Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION)
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }

        activity.startActivityForResult(intent, 3)
    }

    @JavascriptInterface
    fun finish() {
        activity.finish()
    }

    private fun readFileToByteArray(path: String): ByteArray? {
        val file = File(path)
        if (!file.exists()) {
            Log.e(tag, "File doesn't exist!")
            return null
        }
        var `in`: FileInputStream? = null
        return try {
            `in` = FileInputStream(file)
            val inSize: Long = `in`.channel.size() //判断FileInputStream中是否有内容
            if (inSize == 0L) {
                Log.d(tag, "The FileInputStream has no content!")
                return null
            }
            val buffer = ByteArray(`in`.available()) //in.available() 表示要读取的文件中的数据长度
            `in`.read(buffer) //将文件中的数据读到buffer中
            buffer
        } catch (e: FileNotFoundException) {
            e.printStackTrace()
            null
        } catch (e: IOException) {
            e.printStackTrace()
            null
        } finally {
            try {
                `in`?.close()
            } catch (e: IOException) {
                return null
            }
        }
    }

    private fun writeByteArrayToFile(path: String, data: ByteArray) {
        try {
            val fos = FileOutputStream(path)
            fos.write(data)
            fos.flush()
            fos.close()
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }
}