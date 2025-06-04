# 更新记录
2023-03-14
- 修正错漏项

2022-12-12
- [增加 displayModuleType ](../api/QNBleDevice.md#displaymoduletype)

2022-07-06
- [QNSDKV2.8.0版本新增对蓝牙围度尺设备功能支持](../flow/ble_ruler.md)
- [增加 QNBleRulerData](../api/QNBleRulerData.md)
- [增加 QNBleRulerDevice](../api/QNBleRulerDevice.md)
- [增加 setBleRulerListener设置围度尺监听](../api/QNBleApi.md#setblerulerlistener)
- [增加 connectRulerDevice连接围度尺设备](../api/QNBleApi.md#connectrulerdevice)


2022-04-13
- [增加 readSnComplete读取普通蓝牙秤SN](../api/QNScaleDataListener.md#readsncomplete)

2022-03-11
- [增加 wspGetLastDataHmac](../api/QNWspScaleDataListener.md#wspgetlastdatahmac)
- [增加 getLastDataHmac](../api/QNUserScaleDataListener.md#getlastdatahmac)


2022-01-05
- [增加 switchUserScaleUser 方法](../api/QNBleApi.md#switchuserscaleuser)
- [增加 updateUserScaleIdentifyWeight 方法](../api/QNBleApi.md#updateuserscaleidentifyweight)
- [增加 visitUserComplete 方法](../api/QNUserScaleDataListener.md#visitusercomplete)


2021-11-21
- 优化用户管理功能逻辑

2021-11-17
- [增加 STATE_HEIGH_SCALE_MEASURE_FAIL 身高秤测量数据失败状态](../attouched_list/scale_state.md#state_heigh_scale_measure_fail)
- 新增支持身高秤蓝牙自主管理

2021-09-26
- [增加 physiqueCalculation 方法](../api/QNBleApi.md#physiquecalculation)


2021-09-08
- 新增SDK对蓝牙厨房秤设备支持
- [增加 QNBleKitchenListener 厨房秤数据监听器](../api/QNBleKitchenListener.md)
- [增加 QNBleKitchenConfig 厨房秤设置信息类](../api/QNBleKitchenConfig.md)
- [增加 setBleKitchenListener 方法](../api/QNBleApi.md#setblekitchenlistener)
- [增加 setBleKitchenDeviceConfig 方法](../api/QNBleApi.md#setblekitchendeviceconfig)
- [增加 connectBleKitchenDevice 方法](../api/QNBleApi.md#connectblekitchendevice)
- [增加蓝牙厨房秤去皮称端状态 STATE_BLE_KITCHEN_PEELED](../attouched_list/scale_state.md)
- [增加厨房秤是否是蓝牙设备标识 isBluetooth](../api/QNBleKitchenDevice.md)
- [增加蓝牙厨房秤重量稳定标识 isStable](../api/QNBleKitchenDevice.md)
- [增加蓝秤蓝牙名牙厨房 bluetoothName](../api/QNBleKitchenDevice.md)

2021-08-26
- [增加八电极体型说明](../attouched_list/body_shape.md)

2021-08-25
- [优化八电极测量数据, 新增无机盐百分比,骨骼肌率,节段脂肪量](../attouched_list/body_indexes.md)

2021-07-27
- 优化WSP设备链接过程

2021-06-16
- [增加st单位支持](../api/QNConfig.md)

2021-04-12
- 增加wsp设备音量设置sound

2021-01-08
- [设备信息增加是否支持八电极字段 isSupportEightElectrodes](../api/QNBleDevice.md)
- [指标增加八电极相关指标字段 （八电极相关指标不做指标限制，全部输出，阻抗值输出由阻抗配置进行限制）](../attouched_list/body_indexes.md)


2021-01-05
- 增加控制wsp设备体重趋势字段
  - 增加`weightExtend`参数

2020-11-05
- [增加控制wsp设备延迟熄屏时间字段](../api/QNWspConfig.md)
  - 增加`isDelayScreenOff`参数

2020-10-16
- [writeCharacteristicValue](../api/QNBleProtocolDelegate.md#writecharacteristicvalue)
  - 增加`device`参数
- [readCharacteristicValue](../api/QNBleProtocolDelegate.md#readcharacteristicvalue)
  - 增加`device`参数

2020-08-26
- [增加wspReadSnComplete回调](../api/QNWspScaleDataListener.md#wspreadsncomplete)
- [增加是否读取sn码的控制isReadSN](../api/QNWspConfig.md)

2020-08-10
- [增加秤端事件EVENT_SYNC_USER_INFO_SUCCESS、EEVENT_SYNC_USER_INFO_FAIL](../attouched_list/scale_event.md)
- [修改QNWspConfig类longitude、latitude的格式](../api/QNWspConfig.md)
- [增加wsp位置信息同步状态的回调wspLocationSyncStatus](../api/QNWspScaleDataListener.md#wsplocationsyncstatus)

2020-07-23
- [WSP经纬度格式变更](../api/QNWspConfig.md)
- [QNBleDevice对象添加wsp设备特性maxUserNum、registeredUserNum](../api/QNBleDevice.md)

2020-06-24
- [增加WSP扩展对象](../api/QNUser.md)
  - 用户ID下发以及设置WSP秤端是否显示某些设置
- [增加WSP扩展字段 ](../api/QNWspConfig.md)
  - 增加经纬度

2020-06-09
- [增加设备类型 HEIGHT_SCALE 身高秤](../attouched_list/device_type.md)
- [增加身高数据 height](../api/QNScaleData.md)
- [增加身高模式数据 heightMode](../api/QNScaleData.md)
- [存储数据增加身高数据 height](../api/QNScaleStoreData.md)


2020-05-14
- [添加测试用例](../attouched_list/test_list.md)

2020-03-24

- [增加获取当前系统蓝牙状态的方法](../api/QNBleApi.md#getcursystemblestate)

2020-03-03

- [增加访客模式的说明](../flow/ble_scale_wsp.md)
- [增加使用访客测量的控制 isVisitor](../api/QNWspConfig.md)
- [增加存储数据是否完整的标识 isDataComplete](../api/QNScaleStoreData.md)
- [增加 Wsp 设备监听接口 QNWspScaleDataListener](../api/QNWspScaleDataListener.md)

2020-02-07

- [增加 SCALE_WSP 设备类型](../attouched_list/device_type.md)
- [增加 QNUser 类 index、secret 属性](../api/QNUser.md)
- [增加秤事件回调](../api/QNScaleDataListener.md#onscaleeventchange)
- [增加 QNWspConfig 配置类](../api/QNWspConfig.md)
- [增加 wsp 的连接方法](../api/QNBleApi.md#connectwspdevice)
- [增加系统蓝牙状态回调监听](../api/QNBleApi.md#setsysblestatelistener)
- [增加 generateScaleData 方法](../api/QNBleApi.md#generatescaledata)
- [增加 Wsp 设备流程描述](../flow/ble_scale_wsp.md)

2019-10-28

- [增加服务自定义标题和内容设置 setNotificationInfo](../api/QNBleApi.md#setnotificationinfo)

2019-10-08

- [增加创建厨房秤对象方法 buildKitchenDevice](../api/QNBleApi.md#buildkitchendevice)
- [增加 QNBleKitchenDevice 对象](../api/QNBleKitchenDevice.md)
- [增加 onKitchenDeviceDiscover 方法](../api/QNBleDeviceDiscoveryListener.md#onkitchendevicediscover)
- [修改 convertWeightWithTargetUnit 方法，增加厨房秤单位的转化](../api/QNBleApi.md#convertweightwithtargetunit)
- [增加厨房秤类型](../attouched_list/device_type.md)

2019-07-19

- [增加创建广播秤对象方法 buildBroadcastDevice](../api/QNBleApi.md#buildBroadcastDevice)
- [增加创建协议处理类的方法 buildProtocolHandler](../api/QNBleApi.md#buildprotocolhandler)
- 移除 Wifi 注册设备方法 `registerWiFiBleDevice`
- [增加蓝牙协议代理对象 QNBleProtocolDelegate](../api/QNBleProtocolDelegate.md)
- [增加蓝牙协议处理对象 QNBleProtocolHandler](../api/QNBleProtocolHandler.md)
- [把 QNDataListener 修改为 QNScaleDataListener](../api/QNScaleDataListener.md)
- 把[QNBleConnectionChangeListener](../api/QNBleConnectionChangeListener.md)中的`onScaleStateChange`方法发移到[QNScaleDataListener](../api/QNScaleDataListener.md)，专门用来表示称重状态的变化。
- [整理设备类型，修改为只有普通蓝牙秤和广播秤](../attouched_list/device_type.md)

2019-07-10

- [增加广播秤对象 QNBleBroadcastDevice](../api/QNBleBroadcastDevice.md)
- [增加广播秤扫描监听回调方法 onBroadcastDeviceDiscover](../api/QNBleDeviceDiscoveryListener.md#onbroadcastdevicediscover)
- [修改 config 设置类 duration、allowDuplicates、unit 字段说明](../api/QNConfig.md)
- [增加广播秤获取数据的错误码 ERROR_NOCOMPLETE_MEASURE ](../attouched_list/error_code.md)
- [增加修改广播秤单位错误码 ERROR_NOSUPPORT_MODIFY ](../attouched_list/error_code.md)

2019-07-01

- [增加日志的监听](../api/QNBleApi.md#setloglistener)

2019-06-03

- [增加是否检查 GPS 权限方法](../api/QNConfig.md)

2019-05-09

- [增加数据特征标识`hmac`](../api/QNScaleData.md)
- [增加体脂变化控制方法`setFatThreshold`](../api/QNScaleData.md#setfatthreshold)

2019-04-24

- [增加设备类型`SCALE_WIFI_BLE`](../attouched_list/device_type.md)
- [增加 WiFi 配置类](../api/QNWiFiConfig.md)
- [增加注册 WiFi 蓝牙双模设备方法`registerWiFiBleDevice`](../api/QNBleApi.md#registerwifibledevice)
- [增加配置 WiFi 的方法`connectDeviceSetWifi`](../api/QNBleApi.md#connectdevicesetwifi)
- [增加存储数据对象中属性`mac`以及方法`buildStoreData`](../api/QNScaleStoreData.md#buildstoredata)
- [增加秤状态码`STATE_WIFI_BLE_START_NETWORK`、`STATE_WIFI_BLE_NETWORK_SUCCESS`、`STATE_WIFI_BLE_NETWORK_FAIL`](../attouched_list/scale_state.md)
- [增加方法调用错误码`ERROR_DEVICE_TYPE`、`ERROR_WIFI_PARAMS`、`ERROR_MISS_STATE_LISTENER`](../attouched_list/error_code.md)

2019-03-22

- [增加衣服体重参数 clothesWeight](../api/QNUser.md)

2019-03-14

- [修改 Android-demo 英文地址](../../en/android/README.md)
- [修改 Android-demo 中文地址](../android/README.md)
- [增加 Android 常见问题](../android/README.md)
- [设备类增加设备类型参数 deviceType](../api/QNBleDevice.md)

2019-03-14

- [增加 deviceType 属性](../api/QNBleDevice.md)
- [修改有效时间规则 validTime](../api/QNUtils.md#decodesharedata)
- [增加设备类型表单](../attouched_list/device_type.md)

2019-03-05

- [增加 decodeShareData 方法参数 validTime](../api/QNUtils.md)
- [增加错误码 ERROR_CODER、ERROR_CODER_INVALID](../attouched_list/error_code.md)

2019-02-25

- [增加指标](../attouched_list/body_indexes.md)

2019-01-27

- 增加[QNUtiils](../api/QNUtils.md)类

2018-10-25

- [增加电量的回调 onGetElectric](../api/QNScaleDataListener.md#ongetelectric)

2018-10-11

- [增加运动员模式的字段 athleteType](../api/QNBleApi.md#builduser)
- [用户模型增加字段 athleteType](../api/QNUser.md)
- [增加错误码 ERROR_USER_ATHLETE_TYPE](../attouched_list/error_code.md)

2018-08-27

- [增加连接超时时间设置](../api/QNConfig.md)
- [增加体型对照表](../attouched_list/body_shape.md)

2018-08-23 [增加构建 SDK 蓝牙对象方法](../api/QNBleApi.md)

2018-08-13 [增加扫描超时时间设置](../api/QNConfig.md)

2018-06-20 [增加设备 modeID](../api/QNBleDevice.md)
