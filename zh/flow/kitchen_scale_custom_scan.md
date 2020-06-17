# 厨房秤-自定义蓝牙扫描

该篇章是给对蓝牙有一定了解，并在APP中有自己蓝牙框架的用户使用 

厨房秤在测量时，会不断向外发射蓝牙广播信号，里面会包含称重的信息。

下文的说明是基于开发者已经对蓝牙扫描有了一定了解。如果遇到很多问题，还是建议使用SDK进行扫描的方式处理。

该设备的工作流程和[广播秤](broadcast_scale_custom_scan.md)流程一致：


## 一、初始化
使用[QNBleApi.initSdk](../api/QNBleApi.md#initSdk)进行初始化，前文已有相关介绍，[请查看](../README.md#开发流程)

## 二、扫描

自行调用蓝牙扫描

调用蓝牙扫描后，把扫描到的广播信息传给SDK，通过[QNBleApi.buildkitchenDevice](../api/QNBleApi.md#buildkitchendevice)

## 结果处理

拿到[QNBleKitchenDevice](../api/QNBleKitchenDevice.md)后，接下面的处理请参考[厨房秤接入流程](./kitchen_scale.md)