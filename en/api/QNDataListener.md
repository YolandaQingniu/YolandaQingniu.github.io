# QNScaleDataListener

Data monitor, measurement data callback here

## Method

### onGetUnsteadyWeight

Receiving real time weighing data from scale, which can used for update value display  in scale 


#### Parameter

|Name|Type|Note|
|:--|:--|:--|
|device |[QNBleDevice](./QNBleDevice.md)|scale which can real time upload data.|
|weight  |double|When the APP is connected during measurement, the value above the scale changes,  APP will synchronous callback weight data which displayed in LED, this value only displays in UI and is not saved as the last data.|

### onGetScaleData

Data will callback when measuring after APP connected and get the stable real time data 

#### Parameter

|Name|Type|Note|
|:--|:--|:--|
|device |[QNBleDevice](./QNBleDevice.md)|Device which upload data。|
|data   |[QNScaleData](./QNScaleData.md)|QN measuring data which including weight, BMI and body fat etc|


### onGetStoredScale

This Data Callback in this condition: This stored data in scale will auto upload to app when user connected with APP next time if when end user measuring without connect a APP 

#### Parameter
|Name|Type|Note|
|:--|:--|:--|
|device |[QNBleDevice](./QNBleDevice.md)|Device which upload data。|
|storedDataList |List<[QNScaleStoreData](./QNScaleStoreData.md)>|Old scale can store max 20 set of data, new scale can store max 40 set of data if user did not connect app during measuring. QNScaleStoreData can generate QNScaleData after input user profile in APP (QNUser)|



### onGetElectric

 Device battery callback

only supports the scale of the charging. When the power is less than 20%, the battery is considered to be low

|Name|Type|Note|
|:--|:--|:--|
|device |[QNBleDevice](./QNBleDevice.md)|Device which upload data。|
|electric |int|electric unit % |
