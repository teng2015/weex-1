package com.taobao.weex.adapter;

import com.taobao.weex.common.WXJSException;

public interface IWXJSExceptionAdapter {

  /**
   * report js exception
   *
   * @param exception {@link WXJSException}
   */

  void onJSException(WXJSException exception);
}
