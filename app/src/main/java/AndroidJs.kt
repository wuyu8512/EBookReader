package com.acgdmzy.reader

import android.content.ContentValues.TAG
import android.util.Log
import android.webkit.JavascriptInterface
import java.io.File
import java.io.FileInputStream
import java.io.FileNotFoundException
import java.io.IOException
import java.lang.System.`in`
import java.util.*

// 继承自Object类
class AndroidJs constructor(private val activity: MainActivity) : Any() {

    // 定义JS需要调用的方法
    // 被JS调用的方法必须加入@JavascriptInterface注解
    @JavascriptInterface
    fun hello(msg: String?) {
        println(msg)
    }

    @JavascriptInterface
    fun readFile(path: String): String? {
        return Base64.getEncoder().encodeToString(readFileToByteArray(path))
    }

    private fun readFileToByteArray(path: String): ByteArray? {
        val file = File(path)
        if (!file.exists()) {
            Log.e(TAG, "File doesn't exist!")
            return null
        }
        return try {
            val `in` = FileInputStream(file)
            val inSize: Long = `in`.channel.size() //判断FileInputStream中是否有内容
            if (inSize == 0L) {
                Log.d(TAG, "The FileInputStream has no content!")
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
                `in`.close()
            } catch (e: IOException) {
                return null
            }
            //或IoUtils.closeQuietly(in);
        }
    }
}