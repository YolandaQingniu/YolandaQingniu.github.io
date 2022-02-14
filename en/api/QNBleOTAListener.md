# QNBleOTAListener
Scale-side firmware upgrade monitoring interface

## onOTAStart
Start the firmware upgrade

#### Parameters

|name|Types of|Explanation|
|:--|:--|:--|
|device| [QNBleDevice](./QNBleDevice.md)| 状态变化的蓝牙设备对象|

## onOTAUpgrading
Firmware upgrade in progress

#### Parameters

|name|Types of|Explanation|
|:--|:--|:--|
|device| [QNBleDevice](./QNBleDevice.md)| bluetooth device object whose state changes |

## onOTACompleted

Firmware upgrade successfully

#### Parameters

|name|Types of|Explanation|
|:--|:--|:--|
|device| [QNBleDevice](./QNBleDevice.md)| bluetooth device object whose state changes |

## onOTAFailed

Firmware upgrade failed

#### Parameters

|name|Types of|Explanation|
|:--|:--|:--|
|device| [QNBleDevice](./QNBleDevice.md)| bluetooth device object whose state changes |
|errorCode|int | Error code reference [attached table - error code](../attouched_list/error_code.md), the second parameter of IOS uses the system error object|



## onOTAProgress

Firmware upgrade progress

#### Parameters

|name|Types of|Explanation|
|:--|:--|:--|
|device|[QNBleDevice](./QNBleDevice.md)| bluetooth device object whose state changes |
|progress|double | Current upgrade progress (0.0 ~ 1.0) |

