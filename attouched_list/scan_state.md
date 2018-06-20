# 扫描状态定义

|状态	|值	|含义	|解决方案|
|:--|:--|:--|:--|
|FAIL_BLE_IS_OFF|1|设备蓝牙处于关闭状态|开启蓝牙|
|FAIL_BLE_NOT_SUPPORT|2|设备不支持蓝牙4.0|开启蓝牙|
|FAIL_BLE_INTERNAL_ERROR|3|内部错误|先调用停止扫描，再启动扫描|
|FAIL_BLE_NO_BLUETOOTH|4|缺少蓝牙权限|在清单文件中申请蓝牙权限|
|FAIL_BLE_NO_LOCATION|5|缺少位置权限|申请位置权限|
