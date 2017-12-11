package com.qianjinsuotools;

import android.app.Application;

import com.facebook.react.ReactApplication;

import org.devio.rn.splashscreen.SplashScreenReactPackage;

import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.qianjinsuotools.flashlight.FlashUtilsReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private static MainApplication instance;
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        //// 2. Override the getJSBundleFile method in order to let
        // the CodePush runtime determine where to get the JS
        // bundle location from on each app start
        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }

        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new SplashScreenReactPackage(),
                    new FlashUtilsReactPackage(),
                    new CodePush(BuildConfig.CODEPUSH_KEY,
                            getApplicationContext(),
                            BuildConfig.DEBUG)
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        instance=this;
        SoLoader.init(this, /* native exopackage */ false);
    }

    public static MainApplication getInstance(){
        return instance;
    }
}
