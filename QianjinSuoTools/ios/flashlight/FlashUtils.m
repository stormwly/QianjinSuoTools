//
//  FlashUtils.m
//  QianjinSuoTools
//
//  Created by stormzhang on 2017/12/11.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "FlashUtils.h"
#import <React/RCTBridge.h>
@implementation FlashUtils
BOOL LightOn;
AVCaptureDevice *device;

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(lightSwitchOn)
{
  [self check];
  [self turnOn];
}

RCT_EXPORT_METHOD(lightSwitchOff)
{
  [self check];
  [self turnOff];
}

-(void)check{
  
  device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
  
  if (![device hasTorch]) {

    //无手电筒
    NSLog(@"没有手电筒");
    
  }
  LightOn = NO;
}

-(void) turnOn

{
  
  [device lockForConfiguration:nil];
  
  [device setTorchMode:AVCaptureTorchModeOn];
  
  [device unlockForConfiguration];
  
}

-(void) turnOff

{
  
  [device lockForConfiguration:nil];
  
  [device setTorchMode: AVCaptureTorchModeOff];
  
  [device unlockForConfiguration];
  
}

@end
