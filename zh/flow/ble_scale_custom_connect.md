# 普通蓝牙秤-自主管理蓝牙

该篇章是给对蓝牙有一定了解，并在APP中有自己蓝牙框架的用户使用 
>如果对蓝牙不熟悉，或者没有自己的蓝牙框架，不建议使用该种方式接入，不然会增加接入的成本

<iframe src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtIFxucGFydGljaXBhbnQgc2NhbGUgYXMg56ekXG5wYXJ0aWNpcGFudCBhcHAgYXMgQVBQXG5wYXJ0aWNpcGFudCBzZGsgYXMgU0RLXG5cbnNjYWxlLS0-PnNjYWxlOiAg5Lqu5bGP5Y-R6YCB5bm_5pKtXG5hcHAtLT4-YXBwOiAg5omr5o-P5ZGo5Zu05bm_5pKtXG5hcHAtPj5zY2FsZTogIOaJq-aPj-WIsOiuvuWkh1xuYXBwLT4-c2RrOiDosIPnlKhidWlsZERldmljZVxuc2RrLT4-YXBwOiDmnoTlu7pRTkJsZURldmljZVxuYXBwLS0-PmFwcDog5Yik5pat5piv5ZCm5Li655uu5qCH6K6-5aSHXG5hcHAtPj5zZGs6IOiwg-eUqGJ1aWxkUHJvdG9jb2xIYW5kbGVyXG5zZGstPj5hcHA6IOWbnuS8oFFOQmxlUHJvdG90b2xIYW5kbGVyXG5hcHAtPj5zY2FsZTog6L-b6KGM6JOd54mZ6L-e5o6lXG5zY2FsZS0-PmFwcDog6L-e5o6l5oiQ5YqfXG5hcHAtLT4-YXBwOuWPkeeOsOacjeWKoVxuYXBwLS0-PmFwcDog5L2_6IO954m55b6B5YC8XG5hcHAtPj5zZGs66LCD55SoUU5CbGVQcm90b3RvbEhhbmRsZXIucHJlcGFyZVxuc2RrLS0-PnNkazog5Y2P6K6u5aSE55CG57G75Yid5aeL5YyW5a6M5oiQXG5zY2FsZS0-PmFwcDog5Y-R6YCB6JOd54mZ5pWw5o2uXG5hcHAtPj5zZGs6IOiwg-eUqG9uR2V0QmxlRGF0YVxuc2RrLS0-PnNkazog5YiG5p6Q5pWw5o2uXG5zZGstPj5hcHA6IOWbnuS8oOaVsOaNrlxuc2NhbGUtLT4-c2RrOiDmtYvph4_lrozmiJBcbnNkay0-PmFwcDrorqHnrpflubblm57kvKDnqLPlrprmlbDmja5cbnNjYWxlLT4-YXBwOiDmlq3lvIDov57mjqVcbmFwcC0tPj5hcHA6IOWkhOeQhuWSjOaYvuekuuaVsOaNrlxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"  frameborder=0 width=750 height=1200></iframe>

## 一、启动蓝牙扫描

客户自己进行蓝牙扫描的启动和停止，把扫描到的设备信息传给我们SDK（调用[QNBleApi.buildDevice](../api/QNBleApi.md#builddevice)），如果是属于我们的设备，SDK就会构建[QNBleDevice](../api/QNBleDevice.md)，如果不是我们的设备，则会返回null/nil。
>通常我们设备的蓝牙名为QN-Scale或QN-Scale1，通常也可以通过该蓝牙名来过滤我们的产品
>获取到目标设备后，是否停止扫描由APP自行决定。我们通常建议进行连接之前，最好把蓝牙扫描给停止。

## 二、创建蓝牙协议代理类

创建自己的蓝牙协议代理类[QNBleProtocolDelegate](../api/QNBleProtocolDelegate.md)，并实现它的全部方法。具体的实现方式，可以我们的**Demo**

## 三、创建蓝牙协议处理类

使用[QNBleApi.buildProtocolHandler](../api/QNBleApi.md#buildprotocolhandler)创建[协议处理类 QNBleProtocolHandler](../api/QNBleProtocolHandler.md)

## 四、自行连接蓝牙

使用系统API或自己的蓝牙框架的连接设备。

该部分的逻辑是由APP自行处理

## 五、发现服务、使能特征值

我们的秤使用了两套服务，一个设备只会包含其中一套。APP需要遍历所有服务找到其中一套的服务ID，找到一套的，就按照下表中的特征值，把需要回调数据的特征值都使能。

使能特征值后，调用[QNBleProtocolHandler](../api/QNBleProtocolHandler.md)的`prepare`，并传递使用的服务的UUID

### 第一套
服务ID为：`FFE0`
在其下面用到好些特征值，分别如下：

|UUID|属性|说明|
|:--|:--|:--|
|FFE1|Notify|主要的数据回调特征值
|FFE3|Write|主要的数据写入特征值
|FFE2|Indicate|次要的数据回调特征值，注意这个的属性是Indicate，安卓方面的使能可能会有点差别|
|FFE4|Write|次要的数据回调特征值|
|2A19|Read|充电秤电量特征值|
>这里特征值的UUID只以32位的形式提供，安卓需要使用128位的，则自行拼接<br/>
>比如 FFE0 的128位是：0000ffe0-0000-1000-8000-00805f9b34fb 

### 第二套
服务ID为：`FFF0`
在其下面只有两个特征值，一个用来数据回调，一个写入数据

|UUID|属性|说明|
|:--|:--|:--|
|FFF1|Notify|数据回调特征值
|FFF2|Write|数据写入特征值
|2A19|Read|充电秤电量特征值|

## 数据交互

使能特征值后，就可以收到秤上传的数据。

APP收到秤端的回调数据后，通过方法[QNBleProtocolHandler.onGetBleData](../api/QNBleProtocolHandler.md#ongetbledata)发给SDK进行解析，解析的数据会通过[QNScaleDataListener](../api/QNScaleDataListener.md)回调。

另外，如果需要写入数据，则会通过[QNBleProtocolDelegate.writeCharacteristicValue](../api/QNBleProtocolDelegate.md#writecharacteristicvalue)，让APP代为写入。


## 测量完成

测量完成后，会通过[QNScaleDataListener](./../api/QNScaleDataListener.md)回调完整数据，之后秤端会主动断开连接。

下次连接的时候，需要重新创建[QNBleProtocolDelegate](../api/QNBleProtocolDelegate.md)和[QNBleProtocolHandler](../api/QNBleProtocolHandler.md)