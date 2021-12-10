# QNWspConfig

WSP 设备配置类，由它来控制 WSP 操作

配置说明:

- wifiConfig = null && curUser != null时，SDK仅进行注册访问等操作
- wifiConfig != null && curUser == null时，SDK仅对设备进行配网操作
- wifiConfig != null && curUser != null时，SDK会先进行配网，配网成功后进行注册访问等操作；若配网失败，则不会有注册访问等操作


## 属性

| 名称        | 类型                             |  是否必须  | 说明                                                                                                                             |
| :---------- | :--------------------------------| :--------------------------------  | :------------------------------------------------------------------------------------------------------------------------------- |
| wifiConfig  | [QNWiFiConfig](./QNWiFiConfig.md) | N | 是否配网，当 value 值为 null 时，不进行配网操作 ；当 value 值为 QNWiFiConfig 对象时，根据对象中的值进行配网设置                  |
| userlist |  [int]                         | N | 称端用户 index 集合                                                                                                        |                |
| curUser     | [QNUser](./QNUser.md)             | N | 当前测量用户，当只需配网无需测量时，可设置为null                                                                                                                    |
| isVisitor   | Boolean                           | 是否使用访客进行测量，使用访客进行测量时不必设置 [QNUser](./QNUser.md)无需设置 index、secret           |
| dataUrl     | String                            | N | 数据传输地址，只有 wifiConfig 有值时才起作用，否则可设为 null，格式要求`http://hostname:port/path/`, 最大长度为 128 个字节       |
| otaUrl      | String                            | N | OTA 升级地址，只有 wifiConfig 有值时才起作用，否则可设为 null，格式要求`protocol://hostname[:port]/path/`, 最大长度为 128 个字节 |
| isDelayScreenOff | Boolean                       | N | 是否延迟显示屏熄屏时间(大约延时60s)，默认false|
| OTAConfig |    [QNBleOTAConfig](./QNBleOTAConfig.md)                    | 是否蓝牙OTA, 当 value 值为 null 时，不进行OTA ；当 value 值为 QNOtaConfig 对象时，根据对象中的值进行OTA |