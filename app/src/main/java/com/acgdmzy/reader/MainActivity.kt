package com.acgdmzy.reader

import android.Manifest
import android.annotation.SuppressLint
import android.app.Activity
import android.content.pm.PackageManager
import android.graphics.Color
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.WindowManager
import android.webkit.WebView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat


private val PERMISSIONS_STORAGE = arrayOf<String>(
    Manifest.permission.READ_EXTERNAL_STORAGE,
    Manifest.permission.WRITE_EXTERNAL_STORAGE
)
private const val REQUEST_PERMISSION_CODE = 1

class MainActivity : AppCompatActivity() {
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        Log.i("Version", Build.VERSION.SDK_INT.toString())
        // makeStatusBarTransparent()
        Log.i("Height", getStatusBarHeight().toString())

        if (Build.VERSION.SDK_INT < 30) {
            window.statusBarColor = Color.argb(255, 255, 255, 255)
            if (Build.VERSION.SDK_INT >= 23) {
                window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
            }
        }

        //申请权限
        requestAllPower()

        WebView.setWebContentsDebuggingEnabled(true)
        val webView = findViewById<WebView>(R.id.web_view)
        val webSettings = webView.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.allowFileAccess = true
        webView.addJavascriptInterface(AndroidJs(this), "drive")

        var path: String?
        if (intent.data != null) {
            val uri = intent.data
            path = URIPathHelper.getPath(this, uri!!)
            if (path == null) {
                Toast.makeText(this, "文件路径解析失败了", Toast.LENGTH_SHORT).show()
                path = Uri.encode(uri.toString())
            } else {
                path = Uri.encode(path)
            }
        } else {
            path = Uri.encode("/storage/emulated/0/轻小说/报告！哥哥和我要结婚了！/报告！哥哥和我要结婚了！ 02.epub")
        }
        Log.i("Path", path.toString())

        // webView.loadUrl("http://192.168.1.26:8080/#/read/$path")
        webView.loadUrl("file:///android_asset/dist/index.html#/read/$path")
    }

    private fun requestAllPower() {
        if (ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.WRITE_EXTERNAL_STORAGE
            )
            != PackageManager.PERMISSION_GRANTED
        ) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(
                    this,
                    Manifest.permission.WRITE_EXTERNAL_STORAGE
                )
            ) {
            } else {
                ActivityCompat.requestPermissions(
                    this,
                    PERMISSIONS_STORAGE,
                    REQUEST_PERMISSION_CODE
                )
            }
        }
    }

    fun Activity.makeStatusBarTransparent() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            window.apply {
                clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
                addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    decorView.systemUiVisibility =
                        View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
                } else {
                    decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                }
                statusBarColor = Color.TRANSPARENT
            }
        }
    }

    //get StatusBar Height
    fun getStatusBarHeight(): Int {
        var height = 0
        val resourceId =
            applicationContext.resources.getIdentifier("status_bar_height", "dimen", "android")
        if (resourceId > 0) {
            height = applicationContext.resources.getDimensionPixelSize(resourceId)
        }
        return height
    }
}