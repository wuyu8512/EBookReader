package com.acgdmzy.reader

import android.R.attr
import android.R.attr.password
import android.content.Intent
import android.net.Uri
import android.os.Environment
import android.provider.MediaStore
import android.util.Base64
import android.util.Log
import android.webkit.JavascriptInterface
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import java.io.*

// 继承自Object类
class AndroidJs constructor(private val activity: MainActivity) : Any() {

    private val tag = "AndroidJs"

    // 定义JS需要调用的方法
    // 被JS调用的方法必须加入@JavascriptInterface注解
    @JavascriptInterface
    fun hello(msg: String?) {
        println(msg)
    }

    @JavascriptInterface
    fun readFile(path: String): String? {
        if (path.startsWith("content://")) {
            val uri = Uri.parse(path)
            val inStream = activity.contentResolver.openInputStream(uri)
            if (inStream != null) {
                val buffer = ByteArray(inStream.available())
                inStream.read(buffer)
                return Base64.encodeToString(buffer, Base64.NO_WRAP)
            }
        } else {
            val data = readFileToByteArray(path)
            if (data != null) return Base64.encodeToString(data, Base64.NO_WRAP)
        }
        if (path.startsWith("file://"))  {
            val data = readFileToByteArray(path.substring(7))
            if (data != null) return Base64.encodeToString(data, Base64.NO_WRAP)
        }
        return null
    }

    @JavascriptInterface
    fun saveFile(name: String, type: String?, base64Data: String) {
        val data = Base64.decode(base64Data.split(",")[1], 0)
        val dir = activity.getExternalFilesDir(type)
        writeByteArrayToFile("$dir/$name", data)
        activity.setResult(AppCompatActivity.RESULT_OK,activity.intent)
        Log.i("saveFile", name)
    }

    @JavascriptInterface
    fun getExternalFilesDir(type: String?): String {
        return activity.getExternalFilesDir(type).toString()
    }

    @JavascriptInterface
    fun toast(msg: String) {
        Toast.makeText(activity, msg, Toast.LENGTH_SHORT).show()
    }

    @JavascriptInterface
    fun loadBook(name: String,path: String) {
        val newIntent = Intent(activity, MainActivity::class.java)
        newIntent.putExtra("path", path);
        newIntent.putExtra("name", name);
        activity.startActivityForResult(newIntent,2);
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