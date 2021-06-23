# 广播秤

广播秤在测量时，会不断向外发射蓝牙广播信号，里面会包含用户称重的信息。

该设备的工作流程大约如下：

<iframe src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5wYXJ0aWNpcGFudCB1c2VyIGFzIOeUqOaIt1xucGFydGljaXBhbnQgc2NhbGUgYXMg56ek56uvXG5wYXJ0aWNpcGFudCBhcHAgYXMgQVBQXG5wYXJ0aWNpcGFudCBzZXJ2ZXIgYXMg5LqR56uvXG5cbnVzZXItPj5hcHA65omT5byAQVBQXG5hcHAtLT5hcHA6IOWQr-WKqOaJq-aPj1xudXNlci0-PnNjYWxlOiDouKnkuq7np6RcbnNjYWxlLT4-YXBwOiDlj5HlsITok53niZnlub_mkq1cbmFwcC0-PmFwcDog6Kej5p6Q5bm_5pKt5pWw5o2uKOmHjemHj-OAgeWNleS9jeOAgeeKtuaAgeetiSlcbnVzZXItLT51c2VyOiDnq5nnqLNcbnNjYWxlLT4-YXBwOiDnqLPlrprmlbDmja5cbmFwcC0tPmFwcDog6K6h566X5L2T6ISC5pWw5o2uXG5hcHAtPj51c2VyOiDmmL7npLrlrozmlbTmtYvph4_nu5PmnpxcbmFwcC0-PnNlcnZlcjog5LiK5Lyg5rWL6YeP5pWw5o2uXG51c2VyLS0-dXNlcjog5LiL56ek5bm25p-l55yL5pWw5o2uXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"  frameborder=0 width=750 height=600></iframe>

## 一、初始化
使用[QNBleApi.initSdk](../api/QNBleApi.md#initSdk)进行初始化，前文已有相关介绍，[请查看](../README.md#开发流程)

## 二、扫描

### 1. 设置蓝牙扫描回调监听类

在扫描前，需要设置监听类，方法为[QNBleApi.setBleDeviceDiscoveryListener](../api/QNBleApi.md#setbledevicediscoverylistener)，该方法只需要调用一次即可，在确定不需要扫描记得设置为null/nil

android示例：
```java
QNBleApi.getInstance(context).setBleDeviceDiscoveryListener(new QNBleDeviceDiscoveryListener() {
    @Override
    public void onDeviceDiscover(QNBleDevice device) {
        //该设备不用处理该处的回调
    }

    @Override
    public void onStartScan() {
        //开始扫描的回到
    }

    @Override
    public void onStopScan() {
        //结束扫描的回到
    }

    @Override
    public void onScanFail(int code) {
        //扫描失败的回调，会有错误码返回，具体可以参考 错误码详情页
    }

    @Override
    public void onBroadcastDeviceDiscover(QNBleBroadcastDevice device) {
        //广播秤，该类设备需要在这个回调中处理事件
    }
});
```

iOS示例：
```
//设置代理
QNBleApi *bleApi = [QNBleApi sharedBleApi];
bleApi.discoveryListener = self;

//实现代理方法
- (void)onDeviceDiscover:(QNBleDevice *)device {
    //该设备不用处理该处的回调
}

- (void)onBroadcastDeviceDiscover:(QNBleBroadcastDevice *)device {
    //广播秤，该类设备需要在这个回调中处理事件

}

- (void)onStopScan {
    //停止扫描时回调 
}

- (void)onStartScan {
    //开始扫描时回调 
}

```
### 2. 启动扫描

确认蓝牙已打开，安卓这边还需要检查下`定位权限`和`定位开关`。如果确认蓝牙已打开，定位权限已授权，定位服务开关已打开，则可以开始蓝牙扫描

>安卓6.0以后，对targetSdkVersion>=23以上的APP，进行蓝牙扫描需要获取定位权限，详细说明查看[关于](https://developer.android.com/guide/topics/connectivity/bluetooth-le)
>定位服务开关不是强制性的，但是某些手机不打开这个开关，也无法扫描到设备，跟各家的手机系统相关
> iOS13系统增加了蓝牙使用权限，需要检查是否有使用权限，确认已授权并且蓝牙已打开的情况下，开始扫描

扫描方法为[QNBleApi.startBleDeviceDiscovery](./../api/QNBleApi.md#startbledevicediscovery)，扫描到的设备数据，会在上面设置的扫描接口中[QNBleDeviceDiscoveryListener](../api/QNBleDeviceDiscoveryListener.md)回调。

另外有关扫描的一些特性设置，可以在[QNConfig](../api/QNConfig.md)进行设置，这些选项应该足够使用。

>通常APP会有个专门用于测量的界面，我们一般是在界面显示之后进行蓝牙扫描，界面消失的时候停止扫描。

android示例：
```java
QNBleApi.getInstance(context).startBleDeviceDiscovery(new QNResultCallback() {
            @Override
            public void onResult(int code, String msg) {
                //该方法并不回到设备，而是表示扫描是否启动成功
                if (code != CheckStatus.OK.getCode()) {
                   ToastMaker.show(ScanActivity.this,code+":"+msg);
                }
            }
        });
```

iOS示例:
```
//启动扫描
[[QNBleApi sharedBleApi] startBleDeviceDiscovery:^(NSError *error) {
    //该处回调表示启动扫描方法是否成功
    if (error) {
        NSLog([NSString stringWithFormat:@"启动扫描方法失败,原因: %@",error]);
    }
}];
```

## 三、结果处理

收到数据需要发送设置单位数据以及判断是否有稳定数据。

android示例：
```java
public void onBroadcastDeviceDiscover(QNBleBroadcastDevice device) {
    if (null != device && device.getMac().equals(mBleDevice.getMac())) {
        currentDevice = device;
        weightTv.setText(initWeight(device.getWeight()));
        if (device.isComplete()) {
            QNScaleData qnScaleData = device.generateScaleData(qnUser, new QNResultCallback() {
                @Override
                public void onResult(int code, String msg) {
                    Log.e("generateScaleData", "结果" + code + ",msg:" + msg);
                }
            });
            //此处用来去重
            if (currentMeasureCode != device.getMeasureCode()) {
                onReceiveScaleData(qnScaleData);
            }
            currentMeasureCode = device.getMeasureCode();
        }
    }
}
```

iOS示例：
```
#pragma mark - 广播秤处理逻辑
- (void)connectBroadcastDevice:(QNBleBroadcastDevice *)device {
    if (self.connectBroadcastDevice) {
        return;
    }
    self.connectBroadcastDevice = device;
    [self setLingingStyleUI];
    [self setLingSucceedStyleUI];
    //由于广播秤无连接过程，因此当我们开始测量时即可认为是已经连接成功，并设置个定时器，在指定时间内未收到设备的广播数据即可认为设备已经灭屏或者是用户未在使用设备
    //时间间隔，可以更根据不同情况自行设置
    [self setBroadcastTimerWithInterval:5];
}

- (void)measuringBroadcastDevice:(QNBleBroadcastDevice *)device {
    if (self.connectBroadcastDevice == nil) {
        return;
    }
    
    //由于广播秤无连接过程，因此当开始某一台广播秤测量时，过滤其他设备信息，只获取开始测量时对应的那台设备的信息
    if ([self.connectBroadcastDevice.mac isEqualToString:device.mac] == NO) {
        return;
    }
    
    //设置秤的单位信息
    //当设备支持修改单位，并且秤上的单位与准备设备的单位时，修改设备的单位
    //目前广播秤未支持ST,即便下发ST单位也会设置成lb,因此目前对于广播秤不建议下发ST
    QNUnit unit = self.config.unit;
    if (unit == QNUnitST) {
        unit = QNUnitLB;
    }
    
    if (device.supportUnitChange && device.unit != unit) {
        [device syncUnitCallback:^(NSError *error) {
            //但是方法调用异常时，会回复错误信息
        }];
    }
    
    //当收到指定的设备数据后，更新定时器，用于判断秤是否灭屏或者用户不在使用设备
    [self setBroadcastTimerWithInterval:5];
    
    double weight = [self.bleApi convertWeightWithTargetUnit:device.weight unit:[self.bleApi getConfig].unit];
    self.unstableWeightLabel.text = [NSString stringWithFormat:@"%.2f",weight];
    
    if (device.isComplete == NO) {
        [self setMeasuringWeightStyleUI];
    }
    
    //由于测量完成时，会收到多条完成的广播数据，此处用于避免收取重复数据的问题
    if (device.isComplete && self.broadcastMesasureCompleteCount != device.measureCode) {
        self.broadcastMesasureCompleteCount = device.measureCode;
        //测量完成
        QNScaleData *scaleData = [device generateScaleDataWithUser:self.user callback:^(NSError *error) {
            
        }];
        [self.scaleDataAry removeAllObjects];
        for (QNScaleItemData *item in [scaleData getAllItem]) {
            [self.scaleDataAry addObject:item];
        }
        [self.tableView reloadData];
        [self setMeasuringResistanceStyleUI];
    }
    
}

- (void)setBroadcastTimerWithInterval:(NSTimeInterval)interval {
    [self removeBroadcastTimer];
    __weak __typeof(self)weakSelf = self;
    self.broadcastTimer = [NSTimer scheduledTimerWithTimeInterval:interval block:^(NSTimer * _Nonnull timer) {
        //未接到新广播数据时，可认为不再测量体重（断开的意思）
        [weakSelf disconnectBroadcastDevice];
    } repeats:NO];
}

- (void)removeBroadcastTimer {
    [self.broadcastTimer invalidate];
    self.broadcastTimer = nil;
}


- (void)disconnectBroadcastDevice {
    self.connectBroadcastDevice = nil;
    [self removeBroadcastTimer];
    [self setDisconnectStyleUI];
    //此处断开后停止扫描，只是demo的处理逻辑
    [self.bleApi stopBleDeviceDiscorvery:^(NSError *error) {
        
    }];
}


```
## 测量结束

收到稳定数据后(即收到`device.isComplete()`)即表示测量完成。

至此，广播秤的基本流程已经走完，APP可以在收到稳定数据后自行保存数据和展示数据。数据标准判断可以我司的方式-[SDK指标标准描述](../attouched_list/SDK指标标准描述.pdf)。

其他问题可以先参考Demo中的代码，如果有问题还可以查看[常见问题](../attouched_list/faq.md)。常见问题还未找到相关问题，可以尝试在SDK中搜索下是否有相关API或说明，如果还是没有，请联系我司技术人员进行协助对接。

Demo地址如下：
[iOSDemo](https://github.com/YolandaQingniu/sdk-ios-demo.git)

[AndroidDemo](https://github.com/YolandaQingniu/qnscalesdkX.git)
