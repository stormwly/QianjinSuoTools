package com.qianjinsuotools.flashlight;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by stormzhang on 2017/12/11.
 */

public class FlashUtilsModule extends ReactContextBaseJavaModule {

    public FlashUtilsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "FlashUtils";
    }

    @ReactMethod
    public void lightSwitchOn(){
        FlashUtils.getInstance().lightSwitch(false);
    }

    @ReactMethod
    public void lightSwitchOff(){
        FlashUtils.getInstance().lightSwitch(true);
    }
}
