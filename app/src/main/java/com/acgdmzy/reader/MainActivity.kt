package com.acgdmzy.reader

import android.Manifest
import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Color
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.Environment
import android.provider.Settings
import android.util.Log
import android.view.KeyEvent
import android.view.View
import android.view.WindowManager
import android.webkit.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat


private val PERMISSIONS_STORAGE = arrayOf(
    Manifest.permission.READ_EXTERNAL_STORAGE,
)
private const val REQUEST_PERMISSION_CODE = 1


class MainActivity : AppCompatActivity() {
    var webView : WebView? = null
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Log.i("Version", Build.VERSION.SDK_INT.toString())
        // makeStatusBarTransparent()
        // Log.i("Height", getStatusBarHeight().toString())

        // 暂时的解决方案
        if (Build.VERSION.SDK_INT in 23..29) {
            window.statusBarColor = Color.argb(255, 255, 255, 255)
            window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR
        }

        //申请权限
        requestAllPower()

        val webView = findViewById<WebView>(R.id.web_view)
        this.webView = webView
        WebView.setWebContentsDebuggingEnabled(true)
        val webSettings = webView.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.allowFileAccess = true
        webView.addJavascriptInterface(AndroidJs(this), "drive")

        webView.webViewClient = object : WebViewClient() {
            // 链接跳转都会走这个方法
            override fun shouldOverrideUrlLoading(view: WebView, url: String): Boolean {
                Log.d("MainActivity", "Url：$url")
                view.loadUrl(url) // 强制在当前 WebView 中加载 url
                return true
            }
        }

        var path = getPath(intent)
        var name = getName(intent, path)
        if (path == null) {
            path = intent.getStringExtra("path")
            name = intent.getStringExtra("name")
        }
        if (name == null) name = path
        if (path != null) {
            // webView.loadUrl("http://192.168.1.26:8080/#/read/${Uri.encode(path)}/${Uri.encode(name)}")
            webView.loadUrl("file:///android_asset/dist/index.html#/read/${Uri.encode(path)}/${Uri.encode(name)}")
        } else {
            //webView.loadUrl("http://192.168.1.26:8080")
            webView.loadUrl("file:///android_asset/dist/index.html")
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (resultCode == RESULT_OK)
        {
            if (requestCode == 1) {
                if (data?.data != null) {
                    val takeFlags = (intent.flags
                            and (Intent.FLAG_GRANT_READ_URI_PERMISSION
                            or Intent.FLAG_GRANT_WRITE_URI_PERMISSION))
                    try {
                        contentResolver.takePersistableUriPermission(data.data!!, takeFlags)
                    } catch (e: Exception) {
                        Log.w("onActivityResult", "Exception: " + e.message)
                    }
                    loadData(data)
                }
            }
            else if (requestCode == 2){
                val path = data?.getStringExtra("path")
                val name = data?.getStringExtra("name")
                if (path != null && !path.startsWith("content://")) {
                    val webView = this.webView!!
                    webView.evaluateJavascript("addToBook('$path','$name')", null)
                }
            }
        }
    }

    override fun onKeyUp(keyCode: Int, event: KeyEvent): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK && event.action == KeyEvent.ACTION_UP) {
            val webView = this.webView!!
            if (webView.canGoBack()) {
                webView.goBack()
                return true
            }
            finish()
            //不执行父类点击事件
            return true
        }
        //继续执行父类其他点击事件
        return super.onKeyUp(keyCode, event)
    }

    override fun onDestroy() {
        //释放资源
        this.webView?.destroy()
        super.onDestroy()
    }

    private fun requestAllPower() {
        if (ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.READ_EXTERNAL_STORAGE
            )
            != PackageManager.PERMISSION_GRANTED
        ) {
            if (ActivityCompat.shouldShowRequestPermissionRationale(
                    this,
                    Manifest.permission.READ_EXTERNAL_STORAGE
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

        if (Build.VERSION.SDK_INT >= 30) {
            if (!Environment.isExternalStorageManager()) {
                val callIntent = Intent(Settings.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION)
                startActivity(callIntent)
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

    private fun loadData(intent: Intent) {
        val path = getPath(intent)
        val name = getName(intent, path) ?: path

        val newIntent = Intent(this, MainActivity::class.java)
        newIntent.putExtra("path", path);
        newIntent.putExtra("name", name);
        startActivityForResult(newIntent,2);
    }

    private fun getPath(intent: Intent): String? {
        var path: String? = null
        val uri = intent.data
        if (uri != null) {
            path = URIPathHelper.getPath(this, uri)
            if (path == null) {
                Toast.makeText(this, "文件路径解析失败了", Toast.LENGTH_SHORT).show()
                path = uri.toString()
            }
        }

        Log.i("Path", path.toString())
        return path
    }

    fun getName(intent: Intent, path: String?): String? {
        val uri = intent.data ?: return path
        return URIPathHelper.getFileName(this, uri)?.replace(".epub", "", true) ?: path
    }
}