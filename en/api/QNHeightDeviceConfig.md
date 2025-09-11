# QNHeightDeviceConfig

The Height Scale Device Configuration Class, which controls the device-side configuration of the height scale.

## 属性

| Name        | Type                             |  Required  | Description                                                                                        |
| :---------- | :--------------------------------| :--------------------------------  | :---------------------------------------------------------------- |
| wifiConfig  | [QNWiFiConfig](./QNWiFiConfig.md) | N | Network distribution information. For devices supporting WiFi, when the value is null, no network distribution operation is performed; when the value is a QNWiFiConfig object, network settings are configured based on the values within the object.      |
| user |  [QNUser](./QNUser.md)               | Y| List of registered device-side users, used to synchronize and delete excess users on the device side. When the list is null, no user list synchronization operation will be performed.                                                     |
| weightUnit |  [QNUnit](./QNConfig.md)              | N | Weight Unit                                                   |
| heightUnit |  [QnHeightUnit](./QNConfig.md)              | N | Height Unit                                                   |
| voiceLanguage |  [QNLanguage](./QNConfig.md)              | N | Voice broadcast language                                                  |
