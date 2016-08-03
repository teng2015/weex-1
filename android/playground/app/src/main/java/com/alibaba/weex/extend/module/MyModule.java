package com.alibaba.weex.extend.module;

import android.util.Log;
import android.widget.Toast;

import com.taobao.weex.bridge.WXBridgeManager;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

import java.security.Timestamp;

public class MyModule extends WXModule {

  @WXModuleAnno(runOnUIThread =false)
  public void printLog(String msg) {
    Toast.makeText(mWXSDKInstance.getContext(),msg,Toast.LENGTH_SHORT).show();

  }

  @WXModuleAnno(moduleMethod = true,runOnUIThread =false)
  public void eval(String bundle) {
    Long t1 = System.currentTimeMillis();
    Log.e("weex", "weex ----------------------------------------- = " + t1.toString());
    Log.e("weex", "weex ----------------------------------------- = " + bundle);
    WXBridgeManager.getInstance().mWXBridge.evalJavaScript(bundle);
    Long t2 = System.currentTimeMillis();
    Long result = t2 - t1;
    Log.e("weex", "weex ----------------------------------------- = " + result.toString());
  }
}
