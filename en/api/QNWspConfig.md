# QNWspConfig

WSP device configuration class, which controls WSP operation

## Attributes

|name|Types of|Explanation|
| :---------- | :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| wifiConfig  | [QNWiFiConfig](./QNWiFiConfig.md) |Whether to configure the network, when the value is null, no network operation is performed；When the value is the QNWiFiConfig object, configure the network according to the value in the object|
| deleteUsers | [int]|User index collection to be deleted|
| curUser     | [QNUser](./QNUser.md)             |Current measurement user|
| isRegist    | Boolean                           |Whether user registration is required, with the isChange attribute, only one of them is allowed to be true|
| isChange    | Boolean                           |Whether user information needs to be modified, and the isRegist attribute, only one of which is true|
| isVisitor   | Boolean                           |Whether to use visitors for measurement, it is not necessary to set isRegist and isChange when using visitors for measurement, and [QNUser](./QNUser.md) does not need to set index、secret           |
| dataUrl     | String                            |Data transmission address, only works when wifiConfig has value, otherwise it can be set to null, the format requires `http://hostname:port/path/`, the maximum length is 128 bytes|
| otaUrl      | String                            |OTA upgrade address, only works when wifiConfig has value, otherwise it can be set to null, the format requires `protocol://hostname[:port]/path/`, the maximum length is 128 bytes|
| encryption  | String                            |The communication key must be 16 bytes, and only works if wifiConfig has a value, otherwise it can be set to null|
| longitude   | String                            | Longitude is first converted into a 7-digit string, for example: `+134.54`, note that both + and. Are required. For scales that support weather query, the latitude and longitude need to be set for weather query, if it is empty, it will not be displayed            |
| latitude    | String                            | Latitude, first converted to a 7-bit string, for example: `-022.41`, note that both-and. Are required. For scales that support weather query, the latitude and longitude need to be set for weather query, if it is empty, it will not be displayed            |
