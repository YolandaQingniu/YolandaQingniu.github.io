# Broadcast scale

The broadcast scale will continuously emit a Bluetooth broadcast signal to the outside during the measurement, which will contain the user's weighing information.

The workflow of the device is approximately as follows:

<iframe src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5wYXJ0aWNpcGFudCB1c2VyIGFzIOeUqOaIt1xucGFydGljaXBhbnQgc2NhbGUgYXMg56ek56uvXG5wYXJ0aWNpcGFudCBhcHAgYXMgQVBQXG5wYXJ0aWNpcGFudCBzZXJ2ZXIgYXMg5LqR56uvXG5cbnVzZXItPj5hcHA65omT5byAQVBQXG5hcHAtLT5hcHA6IOWQr-WKqOaJq-aPj1xudXNlci0-PnNjYWxlOiDouKnkuq7np6RcbnNjYWxlLT4-YXBwOiDlj5HlsITok53niZnlub_mkq1cbmFwcC0-PmFwcDog6Kej5p6Q5bm_5pKt5pWw5o2uKOmHjemHj-OAgeWNleS9jeOAgeeKtuaAgeetiSlcbnVzZXItLT51c2VyOiDnq5nnqLNcbnNjYWxlLT4-YXBwOiDnqLPlrprmlbDmja5cbmFwcC0tPmFwcDog6K6h566X5L2T6ISC5pWw5o2uXG5hcHAtPj51c2VyOiDmmL7npLrlrozmlbTmtYvph4_nu5PmnpxcbmFwcC0-PnNlcnZlcjog5LiK5Lyg5rWL6YeP5pWw5o2uXG51c2VyLS0-dXNlcjog5LiL56ek5bm25p-l55yL5pWw5o2uXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"  frameborder=0 width=750 height=600></iframe>

## One、initialization
Use [QNBleApi.initSdk](../api/QNBleApi.md#initsdk)-to-initialize,-there-are-related-introductions-in-the-previous-article,-[please-check](../readme.md#development-process)

## 2. scanning

### 1. Set the Bluetooth scan callback monitor class

Before scanning, you need to set the listener class, the method is [QNBleApi.setBleDeviceDiscoveryListener](../api/QNBleApi.md#setbledevicediscoverylistener), this method only needs to be called once, remember to set to null/nil when you are sure you do n’t need to scan

android example:
```java
QNBleApi.getInstance(context).setBleDeviceDiscoveryListener(new QNBleDeviceDiscoveryListener() {
    @Override
    public void onDeviceDiscover(QNBleDevice device) {
//The device does not need to handle the callback
    }

    @Override
    public void onStartScan() {
//Back to start scanning
    }

    @Override
    public void onStopScan() {
//return to the end of the scan
    }

    @Override
    public void onScanFail(int code) {
//The callback for the scan failure will be returned with an error code. For details, please refer to the error code details page
    }

    @Override
    public void onBroadcastDeviceDiscover(QNBleBroadcastDevice device) {
//Broadcast scale, this type of device needs to handle events in this callback
    }
});
```

iOS example:
```
//set proxy
QNBleApi *bleApi = [QNBleApi sharedBleApi];
bleApi.discoveryListener = self;

//Implement the proxy method
- (void)onDeviceDiscover:(QNBleDevice *)device {
//The device does not need to handle the callback
}

- (void)onBroadcastDeviceDiscover:(QNBleBroadcastDevice *)device {
//Broadcast scale, this type of device needs to handle events in this callback

}

- (void)onStopScan {
//Callback when scanning is stopped
}

- (void)onStartScan {
//Callback when starting scanning
}

```
### 2. Start the scan

Confirm that Bluetooth is turned on, and Android needs to check the `location permission` and` location switch`. If you confirm that Bluetooth is turned on, the location permission is authorized, and the location service switch is turned on, you can start Bluetooth scanning

> After Android 6.0, targetSdkVersion>= App above 23, you need to obtain positioning permission for Bluetooth scanning, please check [About](https://developer.android.com/guide/topics/connectivity/bluetooth-le)
> The location service switch is not mandatory, but some phones do not turn on this switch, and the device cannot be scanned, which is related to each mobile phone system.
> iOS13 system has added Bluetooth usage permission, you need to check whether there is usage permission, confirm that authorized and Bluetooth is turned on, start scanning

The scanning method is [QNBleApi.startBleDeviceDiscovery](./../api/QNBleApi.md#startbledevicediscovery),-the-scanned-device-data-will-be-in-the-scanning-interface-set-above-[qnbledevicediscoverylistener](../api/qnbledevicediscoverylistener.md) Callback.

In addition, some feature settings related to scanning can be set in [QNConfig](../api/QNConfig.md), these options should be sufficient.

> Usually the APP will have an interface dedicated to measurement. We generally scan for Bluetooth after the interface is displayed, and stop scanning when the interface disappears.

android example:
```java
QNBleApi.getInstance(context).startBleDeviceDiscovery(new QNResultCallback() {
            @Override
            public void onResult(int code, String msg) {
//This method does not return to the device, but indicates whether the scan was started successfully
                if (code != CheckStatus.OK.getCode()) {
                   ToastMaker.show(ScanActivity.this,code+":"+msg);
                }
            }
        });
```

iOS example:
```
//start scan
[[QNBleApi sharedBleApi] startBleDeviceDiscovery:^(NSError *error) {
//The callback here indicates whether the scan method is successfully started
    if (error) {
        NSLog([NSString stringWithFormat:@"Failed to start scanning method, reason: %@",error]);
    }
}];
```

## three、Results processing

Received data needs to send setting unit data and determine whether there is stable data.

android example:
```java
public void onBroadcastDeviceDiscover(QNBleBroadcastDevice device) {
    if (null != device && device.getMac().equals(mBleDevice.getMac())) {
        currentDevice = device;
        weightTv.setText(initWeight(device.getWeight()));
        if (device.isComplete()) {
            QNScaleData qnScaleData = device.generateScaleData(qnUser, new QNResultCallback() {
                @Override
                public void onResult(int code, String msg) {
Log.e ("generateScaleData", "Result" + code + ", msg:" + msg);
                }
            });
//used to deduplicate here
            if (currentMeasureCode != device.getMeasureCode()) {
                onReceiveScaleData(qnScaleData);
            }
            currentMeasureCode = device.getMeasureCode();
        }
    }
}
```

iOS example:
```
# pragma mark-Broadcast scale processing logic
- (void)connectBroadcastDevice:(QNBleBroadcastDevice *)device {
    if (self.connectBroadcastDevice) {
        return;
    }
    self.connectBroadcastDevice = device;
    [self setLingingStyleUI];
    [self setLingSucceedStyleUI];
//Because the broadcast scale has no connection process, when we start the measurement, we can consider that it has been connected successfully, and set a timer. If we do not receive the broadcast data of the device within the specified time, we can think that the device has been turned off or the user. Not using device
//Time interval, you can set it according to different situations
    [self setBroadcastTimerWithInterval:5];
}

- (void)measuringBroadcastDevice:(QNBleBroadcastDevice *)device {
    if (self.connectBroadcastDevice == nil) {
        return;
    }
    
//Since the broadcast scale has no connection process, when a broadcast scale is measured, other device information is filtered, and only the information of the corresponding device at the start of the measurement is obtained
    if ([self.connectBroadcastDevice.mac isEqualToString:device.mac] == NO) {
        return;
    }
    
//Set the unit information of the scale
//When the device supports modification of the unit, and the unit on the scale and the unit preparing the device, modify the unit of the device
//At present, the broadcast scale does not support ST, even if the ST unit is issued, it will be set to lb, so it is currently not recommended to issue ST for the broadcast scale.
    QNUnit unit = self.config.unit;
    if (unit == QNUnitST) {
        unit = QNUnitLB;
    }
    
    if (device.supportUnitChange && device.unit != unit) {
        [device syncUnitCallback:^(NSError *error) {
//But when the method call is abnormal, an error message will be returned
        }];
    }
    
//After receiving the specified device data, update the timer to determine whether the scale is off or the user is not using the device
    [self setBroadcastTimerWithInterval:5];
    
    double weight = [self.bleApi convertWeightWithTargetUnit:device.weight unit:[self.bleApi getConfig].unit];
    self.unstableWeightLabel.text = [NSString stringWithFormat:@"%.2f",weight];
    
    if (device.isComplete == NO) {
        [self setMeasuringWeightStyleUI];
    }
    
//As the measurement is completed, you will receive multiple completed broadcast data, which is used here to avoid the problem of charging duplicate data
    if (device.isComplete && self.broadcastMesasureCompleteCount != device.measureCode) {
        self.broadcastMesasureCompleteCount = device.measureCode;
//The measurement is completed
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
//When no new broadcast data is received, it can be considered that the body weight is no longer measured (meaning disconnected)
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
//Stop scanning after disconnection here, just demo processing logic
    [self.bleApi stopBleDeviceDiscorvery:^(NSError *error) {
        
    }];
}


```
## End of measurement

After receiving the stable data (that is, receiving `device.isComplete ()`), it indicates that the measurement is completed.

At this point, the basic process of the broadcast scale has been completed, and the APP can save the data and display the data after receiving the stable data. Data standards can be judged by our company-[SDK indicator standard description](../attouched_list/SDK indicator standard description.pdf).

For other problems, please refer to the code in the Demo first. If you have any questions, you can also check [FAQ](../attouched_list/faq.md). Common problems have not found related problems, you can try to search in the SDK if there are related APIs or instructions, if not, please contact our technical staff to assist in docking.

Demo address is as follows:
[iOSDemo](https://github.com/YolandaQingniu/sdk-ios-demo.git)

[AndroidDemo](https://github.com/YolandaQingniu/qnscalesdkX.git)
