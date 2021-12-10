# QNBleOTAListener
称端固件升级监听接口



## onOTAStart
开始升级固件

#### 参数

|名称|类型|说明|
|:--|:--|:--|
|device| [QNBleDevice](./QNBleDevice.md)| 状态变化的蓝牙设备对象|

## onOTAUpgrading

固件升级中
#### 参数

|名称|类型|说明|
|:--|:--|:--|
|device| [QNBleDevice](./QNBleDevice.md)| 状态变化的蓝牙设备对象|

## onOTACompleted

固件升级成功

#### 参数

|名称|类型|说明|
|:--|:--|:--|
|device| [QNBleDevice](./QNBleDevice.md)| 状态变化的蓝牙设备对象|

## onOTAFailed

固件升级失败

#### 参数

|名称|类型|说明|
|:--|:--|:--|
|device| [QNBleDevice](./QNBleDevice.md)| 状态变化的蓝牙设备对象|
|errorCode|int | 错误码参考[附表-错误码](../attouched_list/error_code.md)，IOS的第二个参数使用系统错误对象|



## onOTAProgress

固件升级进度

#### 参数

|名称|类型|说明|
|:--|:--|:--|
|device|[QNBleDevice](./QNBleDevice.md)| 蓝牙设备对象|
|progress|double | 当期升级进度(0.0 ~ 1.0)|

