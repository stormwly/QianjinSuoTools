package com.qianjinsuotools.compress;

import android.content.Context;
import android.content.Intent;
import android.hardware.Camera;
import android.hardware.camera2.CameraManager;

import com.qianjinsuotools.MainApplication;
import com.qianjinsuotools.flashlight.FlashUtils;

/**
 * Created by stormzhang on 2017/12/11.
 */

public class CompressUtils {

    private static CompressUtils compressUtils;
    private CompressUtils() {
    }

    public static CompressUtils getInstance() {
        if (compressUtils == null) {
            compressUtils = new CompressUtils();
        }
        return compressUtils;
    }

    public void jumpCompress(){
        Intent intent=new Intent(MainApplication.getInstance(),CompressActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        MainApplication.getInstance().startActivity(intent);
    }
}
