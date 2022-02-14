# WSP Bluetooth WiFi scale

The WSP Bluetooth WiFi scale is a smart device launched by our company that supports the display of measurement results directly on the scale display. After the device is connected to the network, measure on the scale. After the measurement is completed, the scale will automatically upload the user's measurement data to the server, and the user can see  measurement data when he opens the APP next time, which improves the user experience.

## WSP Device Protocol Brief

The protocol of the wsp device is basically optimized and modified in [WSP Official Agreement](../attouched_list/WSP_v1.0.0.pdf). The wsp protocol interaction is more complicated. The following are the parts involved in the device protocol

Aspects covered by the agreement:

- User
    - Age
    - Height
    - Gender
- Measurement
    - Measurement status
    - Real-time weight
    - Storing data
    - Measurement data
- Distribution network
    - WiFi name
    - WiFi password
    - Data upload address
    - Distribution results
- Other
    - Unit

The device involves many aspects, and the communication process between protocols and the enabling method are strictly required. Our company has packaged it into SDK for easy access.

## One、initialization

Use [QNBleApi.initSdk](../api/QNBleApi.md#initsdk) to initialize

## 2. scanning

### 1. Set the Bluetooth scan callback monitor class

Before scanning, you need to set the listener class. The method is [QNBleApi.setBleDeviceDiscoveryListener](../api/QNBleApi.md#setbledevicediscoverylistener). This method only needs to be called once. When you do not need to scan, remember to set to null/nil

android example:

```java
QNBleApi.getInstance(context).setBleDeviceDiscoveryListener(new QNBleDeviceDiscoveryListener() {
    @Override
    public void onDeviceDiscover(QNBleDevice device) {
//This method calls back the device object, which can be processed by the device object
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
});
```

iOS example:

```
//set proxy
QNBleApi *bleApi = [QNBleApi sharedBleApi];
bleApi.discoveryListener = self;

//Implement the proxy method
- (void)onDeviceDiscover:(QNBleDevice *)device {
//This method will call back after the device is found
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

> After Android 6.0, targetSdkVersion>= 23 App above, you need to obtain positioning permission for Bluetooth scanning, please check [About](https://developer.android.com/guide/topics/connectivity/bluetooth-le)
> The location service switch is not mandatory, but some phones do not turn on this switch, and the device cannot be scanned, which is related to each mobile phone system.

> iOS13 system has added Bluetooth usage permission, you need to check whether there is usage permission, confirm that authorized and Bluetooth is turned on, start scanning

The scanning method is [QNBleApi.startBleDeviceDiscovery](../api/QNBleApi.md#startbledevicediscovery),-the-scanned-device-data-will-be-called-back-in-the-[qnbledevicediscoverylistener](../api/qnbledevicediscoverylistener.md) in the scanning interface set above.

In addition, some feature settings related to scanning can be set in [QNConfig](../api/QNConfig.md), and the content to be set has been basically covered.

> Usually APP will have an interface dedicated to measurement. We generally perform Bluetooth scanning after the interface is displayed, and stop scanning when the interface disappears.

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

## three、connection

After receiving the callback device, you can determine whether it is a device that needs to be connected (this is the business logic of APP), and if so, connect it.

Before connecting, you need to set the connection status callback and measurement data callback.

The method for setting the connection status callback is: [QNBleApi.setBleConnectionChangeListener](../api/QNBleApi.md#setbleconnectionchangelistener), this method is the same as setting the scan callback method, multiple connections only need to be set once, if it is determined that no longer need to connect Time, set to null/nil

After setting the Bluetooth status callback, you also need to set the callback interface of the measurement data. The method is: [QNBleApi.setDataListener](../api/QNBleApi.md#setdatalistener), which can also be set once, please set it when it is no longer used Null/nil

android example:

```java
QNBleApi.getInstance(context).setDataListener(new QNScaleDataListener() {
    @Override
    public void onGetUnsteadyWeight(QNBleDevice device, double weight) {
//This method received unstable weight data. During one measurement, this method will call back multiple times until the data is stable and complete data is obtained.
    }

    @Override
    public void onGetScaleData(QNBleDevice device, QNScaleData data) {
//The method is to receive the complete measurement data
    }

    @Override
    public void onGetStoredScale(QNBleDevice device, List<QNScaleStoreData> storedDataList) {
//This method is to receive the stored data on the scale side, the processing method of the stored data can refer to the demo, or you can define it yourself
    }

//Connection status during measurement
    @Override
    public void onScaleStateChange(QNBleDevice device, int status) {
        setBleStatus(status);
    }
});
```

iOS example:

```
- (void)onGetUnsteadyWeight:(QNBleDevice *)device weight:(double)weight {
//This method received unstable weight data. During one measurement, the method will call back multiple times until the data is stable and complete data is obtained
}

- (void)onGetScaleData:(QNBleDevice *)device data:(QNScaleData *)scaleData {
//The method is to receive the complete measurement data
}

- (void)onGetStoredScale:(QNBleDevice *)device data:(NSArray <QNScaleStoreData *> *)storedDataList {
//This method is to receive the stored data on the scale side, the processing method of the stored data can refer to the demo, or you can define it yourself
}

- (void)onScaleStateChange:(QNBleDevice *)device scaleState:(QNScaleState)state {
//Connection status during measurement
}

```

In addition, before calling the connection, it is best to stop the previous scan (we found that some mobile phones have Bluetooth scanning and Bluetooth connection at the same time, which will reduce the failure rate of successful connection). After stopping the scan, delaying the call for 200 ~ 500ms before calling the connection will increase the success rate of the connection.
The method to stop Bluetooth scanning is: [QNBleApi.stopBleDeviceDiscovery](../api/QNBleApi.md#stopbledevicediscovery).

android example:

```java
QNBleApi.getInstance(context).stopBleDeviceDiscovery(new QNResultCallback() {
    @Override
    public void onResult(int code, String msg) {
        if (code == CheckStatus.OK.getCode()) {
            isScanning = false;
        }
    }
});
```

iOS example:

```
[[QNBleApi sharedBleApi] stopBleDeviceDiscovery:^(NSError *error) {
//The callback here indicates whether the method to stop scanning is successful
    if (error) {
        NSLog([NSString stringWithFormat:@"Failed to stop scanning method, reason: %@",error]);
    }
}];
```

The method of connecting the device needs to pass the Yolanda Bluetooth device object ([QNBleDevice](../api/QNBleDevice.md)) and the Yolanda user profile object ([QNUser](../api/QNUser.md)), where [QNBleDevice](../api/QNBleDevice.md)[QNUser](../api/QNUser.md) is created as: [QNBleApi.buildUser](../api/QNBleApi.md#builduser), the specific method of use can be Refer to the method description.

After confirming OK in the previous operation, you can finally connect. The connection method is: [QNBleApi.connectWspDevice](../api/QNBleApi.md#connectwspdevice).-the-connection-status-callback-method-is-the-above-[qnbleconnectionchangelistener](../api/qnbleconnectionchangelistener.md)

android example:

```java
 QNWspConfig qnWspConfig = new QNWspConfig();
    //.......Make configuration settings
    mQNBleApi.connectWspDevice(device, qnWspConfig, new QNResultCallback() {
        @Override
        public void onResult(int code, String msg) {
            QNLogUtils.log("WspScaleActivity", "wifi Configuration code:" + code + ",msg:" + msg);
        }
    });
```

iOS example:

```
//Set the operation configuration of wsp device
    QNWspConfig *config = [[QNWspConfig alloc] init];
    [[QNBleApi sharedBleApi] connectWspDevice:device config:config callback:^(NSError *error) {

    }];
```

## Weighing process

The data and status of the weighing process will be recalled in the above-mentioned [QNScaleDataListener](../api/QNScaleDataListener.md)

## End of measurement

After receiving stable data (that is, [QNScaleDataListener.onGetScaleData](../api/QNScaleDataListener.md#ongetscalesata)), the measurement is completed. When the measurement is completed, the device will automatically disconnect.

At this point, the basic process of the device has been completed, and the APP can save the data and display the data after receiving the stable data. Data standards can be judged by our company-[SDK indicator standard description](../attouched_list/SDK indicator standard description.pdf).
