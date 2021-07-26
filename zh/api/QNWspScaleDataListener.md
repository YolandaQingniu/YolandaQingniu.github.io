# QNWspScaleDataListener

wsp 设备数据监听器，该设备相关测量数据在这里回调，该 listener 继承于 QNScaleDataListener

## 方法

### wspRegisterUserComplete

wsp 设备注册用户成功，注册用户成功后设备会返回该用户在秤端的序列号

#### 参数

| 名称   | 类型                            | 说明         |
| :----- | :------------------------------ | :----------- |
| device | [QNBleDevice](./QNBleDevice.md) | 蓝牙设备对象 |
| user   | [QNUser](./QNUser.md)           | 用户对象     |


### wspLocationSyncStatus

wsp 设备同步地理位置状态回调

#### 参数

| 名称   | 类型                            | 说明         |
| :----- | :------------------------------ | :----------- |
| device | [QNBleDevice](./QNBleDevice.md) | 蓝牙设备对象 |
| suceess | Boolean           | 是否同步成功     |


### wspReadSnComplete

wsp 设备获取SN码成功

#### 参数

| 名称   | 类型                            | 说明         |
| :----- | :------------------------------ | :----------- |
| device | [QNBleDevice](./QNBleDevice.md) | 蓝牙设备对象 |
| sn | string           | SN码     |