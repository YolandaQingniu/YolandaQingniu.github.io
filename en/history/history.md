# update record
2023-03-14
- Fix docs

2022-12-12
- [Add displayModuleType ](../api/QNBleDevice.md#displaymoduletype)

2022-07-06
- [QNSDKV2.8.0 version adds support for Bluetooth ruler](../flow/ble_ruler.md)
- [Add QNBleRulerData](../api/QNBleRulerData.md)
- [Add QNBleRulerDevice](../api/QNBleRulerDevice.md)
- [Add setBleRulerListener](../api/QNBleApi.md#setblerulerlistener)
- [Add connectRulerDevice](../api/QNBleApi.md#connectrulerdevice)


2022-04-13
- [Add readSnComplete](../api/QNScaleDataListener.md#readsncomplete)

2022-03-11
- [Add wspGetLastDataHmac](../api/QNWspScaleDataListener.md#wspgetlastdatahmac)
- [Add getLastDataHmac](../api/QNUserScaleDataListener.md#getlastdatahmac)



2021-01-05
- [Add switchUserScaleUser](../api/QNBleApi.md#switchuserscaleuser)
- [Add updateUserScaleIdentifyWeight ](../api/QNBleApi.md#updateuserscaleidentifyweight)
- [Add visitUserComplete ](../api/QNUserScaleDataListener.md#visitusercomplete)

2021-11-17
- [Add STATE_HEIGH_SCALE_MEASURE_FAIL](../attouched_list/scale_state.md#state_heigh_scale_measure_fail)

2021-09-26
- [Increase physical fitness calculation method](../api/QNBleApi.md#physiquecalculation)

2021-09-08
- Added SDK support for Bluetooth kitchen scale devices
- [Add QNBleKitchenListener kitchen scale data listener](../api/QNBleKitchenListener.md)
- [Add QNBleKitchenConfig kitchen scale setting information class](../api/QNBleKitchenConfig.md)
- [Add setBleKitchenListener method](../api/QNBleApi.md#setblekitchenlistener)
- [Add setBleKitchenDeviceConfig method](../api/QNBleApi.md#setblekitchendeviceconfig)
- [Add connectBleKitchenDevice method](../api/QNBleApi.md#connectblekitchendevice)
- [Add the state of the Bluetooth kitchen scale peeling scale STATE_BLE_KITCHEN_PEELED](../attouched_list/scale_state.md)
- [Add whether the kitchen scale is a Bluetooth device identification isBluetooth](../api/QNBleKitchenDevice.md)
- [Add isStable to the Bluetooth kitchen scale weight stability indicator](../api/QNBleKitchenDevice.md)
- [Add blue scale bluetooth name kitchen bluetoothName](../api/QNBleKitchenDevice.md)


2020-06-24
- [Add WSP extension object](../api/QNUser.md)
  - Issue user ID and set whether to display certain settings on WSP scale
- [Add WSP extension field ](../api/QNWspConfig.md)
  - Increase latitude and longitude



2020-06-09
- [Add device type HEIGHT_SCALE ](../attouched_list/device_type.md)
- [Increase height data height](../api/QNScaleData.md)
- [Increase height mode data heightMode](../api/QNScaleData.md)
- [Store data to increase height data height](../api/QNScaleStoreData.md)

2020-03-03

- [Add description of visitor mode](../flow/ble_scale_wsp.md)
- [Add control using visitor measurements isVisitor](../api/QNWspConfig.md)
- [Add the identification of whether the stored data is complete isDataComplete](../api/QNScaleStoreData.md)
- [Add Wsp device monitoring interface QNWspScaleDataListener](../api/QNWspScaleDataListener.md)

2020-02-07

- [Add SCALE_WSP device type](../attouched_list/device_type.md)
- [Add index and secret properties of QNUser class](../api/QNUser.md)
- [Add scale event callback](../api/QNScaleDataListener.md#onscaleeventchange)
- [Add QNWspConfig configuration class](../api/QNWspConfig.md)
- [Add wsp connection method](../api/QNBleApi.md#connectwspdevice)
- [Add system Bluetooth status callback monitoring](../api/QNBleApi.md#setsysblestatelistener)
- [Add generateScaleData method](../api/QNBleApi.md#generatescaledata)
- [Add Wsp device process description](../flow/ble_scale_wsp.md)

2019-10-28

- [Add service custom title and content settings setNotificationInfo](../api/QNBleApi.md#setnotificationinfo)

2019-10-08

- [Add method to create kitchen scale object buildKitchenDevice](../api/QNBleApi.md#buildkitchendevice)
- [Add QNBleKitchenDevice object](../api/QNBleKitchenDevice.md)
- [Add onKitchenDeviceDiscover method](../api/QNBleDeviceDiscoveryListener.md#onkitchendevicediscover)
- [modify convertWeightWithTargetUnit method the conversion of kitchen scale units](../api/QNBleApi.md#convertweightwithtargetunit)
- [Increase kitchen scale type](../attouched_list/device_type.md)


2019-07-19

-[Add method to create broadcast scale object buildBroadcastDevice](../api/QNBleApi.md#buildbroadcastdevice)
-[Add method to create protocol handling class buildProtocolHandler](../api/QNBleApi.md#buildprotocolhandler)
- Removed Wifi registered device method `registerWiFiBleDevice`
-[Add Bluetooth protocol proxy object QNBleProtocolDelegate](../api/QNBleProtocolDelegate.md)
-[Add Bluetooth protocol processing object QNBleProtocolHandler](../api/QNBleProtocolHandler.md)
-[Change QNDataListener to QNScaleDataListener](../api/QNScaleDataListener.md)
- Move the `onScaleStateChange` method in [QNBleConnectionChangeListener](../api/QNBleConnectionChangeListener.md) to [QNScaleDataListener](../api/QNScaleDataListener.md), which is specially used to indicate the change of weighing state.
-[Organize device type, modify to only ordinary Bluetooth scale and broadcast scale]

2019-07-10

-[Add Broadcast Scale Object QNBleBroadcastDevice](../api/QNBleBroadcastDevice.md)
-[Add broadcast scale scanning listen callback method onBroadcastDeviceDiscover](../api/QNBleDeviceDiscoveryListener.md#onbroadcastdevicediscover)
-[Modify config setting class duration、allowDuplicates、unit field description](../api/QNConfig.md)
-[Add the error code ERROR_NOCOMPLETE_MEASURE of the broadcast scale to get the data](../attouched_list/error_code.md)
-[Add and modify the error code of broadcast scale unit ERROR_NOSUPPORT_MODIFY](../attouched_list/error_code.md)

2019-07-01

-[Increase log monitoring](../api/QNBleApi.md#setloglistener)

2019-06-03

-[Add whether to check GPS permission method](../api/QNConfig.md)

2019-05-09

-[Increase data feature identifier `hmac`](../api/QNScaleData.md)
-[Increase body fat change control method `setFatThreshold`](../api/QNScaleData.md#setfatthreshold)

2019-04-24

-[Add Device Type `SCALE_WIFI_BLE`](../attouched_list/device_type.md)
-[Add WiFi configuration class](../api/QNWiFiConfig.md)
-[Add method to register WiFi Bluetooth dual-mode device `registerWiFiBleDevice`](../api/QNBleApi.md#registerwifibledevice)
-[Additional method of configuring WiFi `connectDeviceSetWifi`](../api/QNBleApi.md#connectdevicesetwifi)
-[Add attribute `mac` and method` buildStoreData` in stored data object](../api/QNScaleStoreData.md#buildstoredata)
-[Add scale status code `STATE_WIFI_BLE_START_NETWORK`、`STATE_WIFI_BLE_NETWORK_SUCCESS`、`STATE_WIFI_BLE_NETWORK_FAIL`](../attouched_list/scale_state.md)
-[Add method call error code `ERROR_DEVICE_TYPE`、`ERROR_WIFI_PARAMS`、`ERROR_MISS_STATE_LISTENER`](../attouched_list/error_code.md)

2019-03-22

-[Increase clothes weight parameter clothesWeight](../api/QNUser.md)

2019-03-14

-[Modify Android-demo English address](../../en/android/README.md)
-[Modify Android-demo Chinese Address](../android/README.md)
-[Add Android FAQ](../android/README.md)
-[Device class adds device type parameter deviceType](../api/QNBleDevice.md)

2019-03-14

-[Add deviceType attribute](../api/QNBleDevice.md)
-[Modify effective time rule validTime](../api/QNUtils.md#decodesharedata)
-[Add Device Type Form](../attouched_list/device_type.md)

2019-03-05

-[Add decodeShareData method parameter validTime](../api/QNUtils.md)
-[Add error code ERROR_CODER、ERROR_CODER_INVALID](../attouched_list/error_code.md)

2019-02-25

-[Increase Index](../attouched_list/body_indexes.md)

2019-01-27

- Add [QNUtiils](../api/QNUtils.md) class

2018-10-25

-[Callback for increasing power onGetElectric](../api/QNScaleDataListener.md#ongetelectric)

2018-10-11

-[Add athlete type field athleteType](../api/QNBleApi.md#builduser)
-[User model added field athleteType](../api/QNUser.md)
-[Add error code ERROR_USER_ATHLETE_TYPE](../attouched_list/error_code.md)

2018-08-27

-[Increase connection timeout setting](../api/QNConfig.md)
-[Add Body Shape Comparison Table](../attouched_list/body_shape.md)

2018-08-23 [Add method to build SDK Bluetooth object](../api/QNBleApi.md)

2018-08-13 [Increase scan timeout setting](../api/QNConfig.md)

2018-06-20 [Add device modeID](../api/QNBleDevice.md)
