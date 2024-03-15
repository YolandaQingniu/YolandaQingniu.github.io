# QNBLEState

用户设置Wsp秤显示指标配置对象

### 枚举

| 名称         | 值  | 说明                     |
| :----------- | :-- |:-----------------------|
| unknown      | 0   | 未知状态，初始化系统蓝牙时，该状态会首次回调 |
| resetting    | 1   | 系统蓝牙正在重置（iOS专属）        |
| unsupported  | 2   | 系统不支持蓝牙功能              |
| unauthorized | 3   | 未授权                    |
| poweredOff   | 4   | 系统蓝牙关闭                 |
| poweredOn    | 5   | 系统蓝牙打开                 |