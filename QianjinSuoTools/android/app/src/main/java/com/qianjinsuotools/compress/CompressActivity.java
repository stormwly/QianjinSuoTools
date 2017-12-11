package com.qianjinsuotools.compress;

import android.app.Activity;
import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.view.animation.Animation;
import android.view.animation.RotateAnimation;
import android.widget.ImageView;

import com.qianjinsuotools.R;

/**
 * Created by stormzhang on 2017/12/11.
 */

public class CompressActivity extends Activity {

    private ImageView imageView;

    /** 传感器管理器 */
    private SensorManager manager;

    private SensorListener listener=new SensorListener();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_compress);
        imageView = (ImageView) this.findViewById(R.id.imageView);
        imageView.setKeepScreenOn(true);//屏幕高亮
        manager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
    }

    @Override
    protected void onResume() {
        /**
         * 获取方向传感器
         * 通过SensorManager对象获取相应的Sensor类型的对象
         */
        Sensor sensor = manager.getDefaultSensor(Sensor.TYPE_ORIENTATION);
        //应用在前台时候注册监听器
        manager.registerListener(listener, sensor,
                SensorManager.SENSOR_DELAY_GAME);
        super.onResume();
    }

    @Override
    protected void onPause() {
        //应用不在前台时候销毁掉监听器
        manager.unregisterListener(listener);
        super.onPause();
    }

    private final class SensorListener implements SensorEventListener {

        private float predegree = 0;

        @Override
        public void onSensorChanged(SensorEvent event) {
            /**
             * values[0]: x-axis 方向加速度
             　　 values[1]: y-axis 方向加速度
             　　 values[2]: z-axis 方向加速度
             */
            float degree = event.values[0];// 存放了方向值
            /**动画效果*/
            RotateAnimation animation = new RotateAnimation(predegree, degree,
                    Animation.RELATIVE_TO_SELF,0.5f,Animation.RELATIVE_TO_SELF,0.5f);
            animation.setDuration(200);
            imageView.startAnimation(animation);
            predegree=-degree;

            /**
             float x=event.values[SensorManager.DATA_X];
             float y=event.values[SensorManager.DATA_Y];
             float z=event.values[SensorManager.DATA_Z];
             Log.i("XYZ", "x="+(int)x+",y="+(int)y+",z="+(int)z);
             */
        }

        @Override
        public void onAccuracyChanged(Sensor sensor, int accuracy) {

        }

    }
}
