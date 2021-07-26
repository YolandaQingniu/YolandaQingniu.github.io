# QNWspConfig

WSP 设备配置类，由它来控制 WSP 操作

配置说明:

- wifiConfig = null && curUser != null时，SDK仅进行注册访问等操作
- wifiConfig != null && curUser == null时，SDK仅对设备进行配网操作
- wifiConfig != null && curUser != null时，SDK会先进行配网，配网成功后进行注册访问等操作；若配网失败，则不会有注册访问等操作


## 属性

| 名称        | 类型                              | 说明                                                                                                                             |
| :---------- | :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| wifiConfig  | [QNWiFiConfig](./QNWiFiConfig.md) | 是否配网，当 value 值为 null 时，不进行配网操作 ；当 value 值为 QNWiFiConfig 对象时，根据对象中的值进行配网设置                  |
| curUser     | [QNUser](./QNUser.md)             | 当前测量用户，当只需配网无需测量时，可设置为null，当curUser为null时、isRegist、isChagne、isVisitor设置均无效                                                                                                                     |                                                                     |
| dataUrl     | String                            | 数据传输地址，只有 wifiConfig 有值时才起作用，否则可设为 null，格式要求`http://hostname:port/path/`, 最大长度为 128 个字节       |
| otaUrl      | String                            | OTA 升级地址，只有 wifiConfig 有值时才起作用，否则可设为 null，格式要求`protocol://hostname[:port]/path/`, 最大长度为 128 个字节 |
| encryption  | String                            | 通讯秘钥，必须为 16 字节，只有 wifiConfig 有值时才起作用，否则可设为 null                                                        |
| isReadSN  | Boolean                            | 是否读取SN码，默认不读取                                                        |
| longitude   | String                            | 经度，例如："+134.5"、"90.5"、"-87.8"。整数部分最多支持三个数字，对于支持天气查询的秤，需要设置经纬度，用于做天气的查询，如果为空，则不设置       |
| latitude    | String                            | 纬度，规则同longitude|
| isDelayScreenOff | Boolean                       | 是否延迟显示屏熄屏时间(大约延时60s)，默认false|
