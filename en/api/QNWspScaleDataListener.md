# QNWspScaleDataListener

wsp device data listener, the relevant measurement data of the device is called back here, the listener inherits from QNScaleDataListener

## Method

### wspRegisterUserComplete

The user registration of the wsp device is successful. After the user registration is successful, the device returns the serial number of the user on the scale

#### Parameters

|name|Types of|Explanation|
| :----- | :------------------------------ | :----------- |
| device | [QNBleDevice](./QNBleDevice.md) |Bluetooth device object|
| user   | [QNUser](./QNUser.md)           |User object|
