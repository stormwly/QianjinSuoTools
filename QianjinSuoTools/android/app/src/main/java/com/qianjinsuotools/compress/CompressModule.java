package com.qianjinsuotools.compress;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by stormzhang on 2017/12/11.
 */

public class CompressModule extends ReactContextBaseJavaModule {
    @Override
    public String getName() {
        return "CompressUtils";
    }

    public CompressModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @ReactMethod
    public void showCompressView(){
        CompressUtils.getInstance().jumpCompress();
    }
}
