package com.alibaba.weex;

import android.app.Application;
import android.util.Log;

import com.alibaba.weex.extend.PlayDebugAdapter;
import com.alibaba.weex.extend.component.RichText;
import com.alibaba.weex.extend.component.WXTabIndicator;
import com.alibaba.weex.extend.component.WXTabPager;
import com.alibaba.weex.extend.module.MyModule;
import com.alibaba.weex.extend.module.RenderModule;
import com.alibaba.weex.extend.module.WXEventModule;
import com.taobao.phenix.cache.disk.DiskCachePriority;
import com.taobao.phenix.common.UnitedLog;
import com.taobao.phenix.compat.NonCatalogDiskCacheSupplier;
import com.taobao.phenix.intf.Phenix;
import com.taobao.tao.image.ImageInitBusinss;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;


public class WXApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    UnitedLog.setMinLevel(Log.ERROR);
    ImageInitBusinss.setMinLogLevel(Log.ERROR);
    Phenix.instance().with(this);
    Phenix.instance().diskCacheBuilder().with(new NonCatalogDiskCacheSupplier()).maxSize(DiskCachePriority.TOP_USED_1, 30 *1024*1024);


    /**
     * Set up for fresco usage.
     * Set<RequestListener> requestListeners = new HashSet<>();
     * requestListeners.add(new RequestLoggingListener());
     * ImagePipelineConfig config = ImagePipelineConfig.newBuilder(this)
     *     .setRequestListeners(requestListeners)
     *     .build();
     * Fresco.initialize(this,config);
     **/
//    initDebugEnvironment(false, "DEBUG_SERVER_HOST");
    WXSDKEngine.addCustomOptions("appName", "WXSample");
    WXSDKEngine.addCustomOptions("appGroup", "WXApp");
    WXSDKEngine.initialize(this,
                           new InitConfig.Builder()
                               //.setImgAdapter(new FrescoImageAdapter())// use fresco adapter
                               .setImgAdapter(new TBWXImgLoaderAdapter())
                               .setDebugAdapter(new PlayDebugAdapter())
                               .build()
                          );

    try {
//      Fresco.initialize(this);
      WXSDKEngine.registerComponent("tab-pager", WXTabPager.class,true);
      WXSDKEngine.registerComponent("tab-indicator", WXTabIndicator.class,true);

      WXSDKEngine.registerComponent("richtext", RichText.class);


      WXSDKEngine.registerModule("render", RenderModule.class);
      WXSDKEngine.registerModule("event", WXEventModule.class);

      WXSDKEngine.registerModule("myModule", MyModule.class);
      /**
       * override default image tag
       * WXSDKEngine.registerComponent("image", FrescoImageComponent.class);
       */


    } catch (WXException e) {
      e.printStackTrace();
    }

  }

  /**
   *
   * @param enable enable remote debugger. valid only if host not to be "DEBUG_SERVER_HOST".
   *               true, you can launch a remote debugger and inspector both.
   *               false, you can  just launch a inspector.
   * @param host the debug server host, must not be "DEBUG_SERVER_HOST", a ip address or domain will be OK.
   *             for example "127.0.0.1".
   */
  private void initDebugEnvironment(boolean enable, String host) {
    if (!"DEBUG_SERVER_HOST".equals(host)) {
      WXEnvironment.sRemoteDebugMode = enable;
      WXEnvironment.sRemoteDebugProxyUrl = "ws://" + host + ":8088/debugProxy/native";
    }
  }

}
