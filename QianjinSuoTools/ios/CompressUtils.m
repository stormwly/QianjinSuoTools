//
//  CompressUtils.m
//  QianjinSuoTools
//
//  Created by stormzhang on 2017/12/11.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CompressUtils.h"
#import <React/RCTBridge.h>
#import "CompassViewController.h"
#import "AppDelegate.h"
@implementation CompressUtils

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(showCompressView)
{
  dispatch_async(dispatch_get_main_queue(), ^{
   CompassViewController * vc = [[CompassViewController alloc] init];
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    [app.nav pushViewController:vc animated:YES];
  });
}

@end
