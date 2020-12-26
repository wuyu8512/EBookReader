package com.acgdmzy.reader

import android.util.Base64
import android.util.Log
import android.webkit.JavascriptInterface
import android.widget.Toast
import java.io.File
import java.io.FileInputStream
import java.io.FileNotFoundException
import java.io.IOException


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
            val inStream = activity.contentResolver.openInputStream(activity.intent.data!!)
            if (inStream != null) {
                val buffer = ByteArray(inStream.available())
                inStream.read(buffer)
                return Base64.encodeToString(buffer, Base64.NO_WRAP)
            }
        }
        return Base64.encodeToString(readFileToByteArray(path), Base64.NO_WRAP)
    }

    @JavascriptInterface
    fun toast(msg: String) {
        Toast.makeText(activity, msg, Toast.LENGTH_SHORT).show()
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
}