package com.taobao.weex.common;


public class WXJSException {

  /**
   * instance id
   */
  private String mInstanceId;
  /**
   * The URL where the exception occurred
   */
  private String mBundleUrl;
  /**
   * error code
   */
  private String mErrCode;
  /**
   * The function name of the exception
   */
  private String mFunction;
  /**
   * Exception details
   */
  private String mException;

  public WXJSException(){

  }

  public WXJSException(String instanceId, String bundleUrl, String errCode, String function, String exception) {
    this.mInstanceId = instanceId;
    this.mBundleUrl = bundleUrl;
    this.mErrCode = errCode;
    this.mFunction = function;
    this.mException = exception;
  }

  public String getInstanceId() {
    return mInstanceId;
  }

  public void setInstanceId(String instanceId) {
    mInstanceId = instanceId;
  }

  public String getBundleUrl() {
    return mBundleUrl;
  }

  public void setBundleUrl(String bundleUrl) {
    mBundleUrl = bundleUrl;
  }

  public String getErrCode() {
    return mErrCode;
  }

  public void setErrCode(String errCode) {
    mErrCode = errCode;
  }

  public String getFunction() {
    return mFunction;
  }

  public void setFunction(String function) {
    mFunction = function;
  }

  public String getException() {
    return mException;
  }

  public void setException(String exception) {
    mException = exception;
  }
}
