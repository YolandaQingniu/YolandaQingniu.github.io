# Ordinary Bluetooth scale-independent management of Bluetooth

This chapter is for users who have a certain understanding of Bluetooth and have their own Bluetooth framework in the APP.
> If you are not familiar with Bluetooth, or do not have your own Bluetooth framework, it is not recommended to use this method to access, otherwise it will increase the cost of access

<iframe src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtIFxucGFydGljaXBhbnQgc2NhbGUgYXMg56ekXG5wYXJ0aWNpcGFudCBhcHAgYXMgQVBQXG5wYXJ0aWNpcGFudCBzZGsgYXMgU0RLXG5cbnNjYWxlLS0-PnNjYWxlOiAg5Lqu5bGP5Y-R6YCB5bm_5pKtXG5hcHAtLT4-YXBwOiAg5omr5o-P5ZGo5Zu05bm_5pKtXG5hcHAtPj5zY2FsZTogIOaJq-aPj-WIsOiuvuWkh1xuYXBwLT4-c2RrOiDosIPnlKhidWlsZERldmljZVxuc2RrLT4-YXBwOiDmnoTlu7pRTkJsZURldmljZVxuYXBwLS0-PmFwcDog5Yik5pat5piv5ZCm5Li655uu5qCH6K6-5aSHXG5hcHAtPj5zZGs6IOiwg-eUqGJ1aWxkUHJvdG9jb2xIYW5kbGVyXG5zZGstPj5hcHA6IOWbnuS8oFFOQmxlUHJvdG90b2xIYW5kbGVyXG5hcHAtPj5zY2FsZTog6L-b6KGM6JOd54mZ6L-e5o6lXG5zY2FsZS0-PmFwcDog6L-e5o6l5oiQ5YqfXG5hcHAtLT4-YXBwOuWPkeeOsOacjeWKoVxuYXBwLS0-PmFwcDog5L2_6IO954m55b6B5YC8XG5hcHAtPj5zZGs66LCD55SoUU5CbGVQcm90b3RvbEhhbmRsZXIucHJlcGFyZVxuc2RrLS0-PnNkazog5Y2P6K6u5aSE55CG57G75Yid5aeL5YyW5a6M5oiQXG5zY2FsZS0-PmFwcDog5Y-R6YCB6JOd54mZ5pWw5o2uXG5hcHAtPj5zZGs6IOiwg-eUqG9uR2V0QmxlRGF0YVxuc2RrLS0-PnNkazog5YiG5p6Q5pWw5o2uXG5zZGstPj5hcHA6IOWbnuS8oOaVsOaNrlxuc2NhbGUtLT4-c2RrOiDmtYvph4_lrozmiJBcbnNkay0-PmFwcDrorqHnrpflubblm57kvKDnqLPlrprmlbDmja5cbnNjYWxlLT4-YXBwOiDmlq3lvIDov57mjqVcbmFwcC0tPj5hcHA6IOWkhOeQhuWSjOaYvuekuuaVsOaNrlxuXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"  frameborder=0 width=750 height=1200></iframe>

## One、Start Bluetooth Scan

The customer starts and stops the Bluetooth scan by himself, and passes the scanned device information to our SDK (call [QNBleApi.buildDevice](../api/QNBleApi.md#builddevice)),-if-it-belongs-to-our-device,-the-sdk-[qnbledevice](../api/qnbledevice.md) will be built, if it is not our device, it will return null/nil.
> Usually the bluetooth name of our device is QN-Scale or QN-Scale1, and we can also filter our products by this bluetooth name
> After obtaining the target device, it is up to the APP to decide whether to stop scanning. We usually recommend that you stop Bluetooth scanning before connecting.

## 2. Create Bluetooth protocol proxy class

Create your own Bluetooth protocol proxy class [QNBleProtocolDelegate](../api/QNBleProtocolDelegate.md) and implement all its methods. The specific way of implementation can be **Demo**

## three、Create Bluetooth protocol processing class

Use [QNBleApi.buildProtocolHandler](../api/QNBleApi.md#buildprotocolhandler)-to-create-[protocol-handler-class-qnbleprotocolhandler](../api/qnbleprotocolhandler.md)

## Four、Connect Bluetooth yourself

Connected devices using system API or own Bluetooth framework.

The logic of this part is handled by the APP itself

## Fives、Discovery Service、Enable eigenvalue

Our scale uses two sets of services, and one device will only contain one set. The APP needs to traverse all services to find one set of service IDs. If one set is found, the feature values that need to be called back are enabled according to the feature values in the following table.

After enabling the feature value, call [QNBleProtocolHandler](../api/QNBleProtocolHandler.md) 's prepare and pass the UUID of the service used

### The first set
The service ID is: `FFE0`
Several characteristic values are used below them, as follows:

|UUID|Attributes|Explanation|
|:--|:--|:--|
|FFE1|Notify|Main data callback feature values
|FFE3|Write|The main data is written to the characteristic value
|FFE2|Indicate|The secondary data callback feature value. Note that the attribute of this is Indicate. The Android enable may be a little different.|
|FFE4|Write|Minor data callback feature value|
|2A19|Read|Charging scale electric quantity characteristic value|
> The UUID of the characteristic value here is only provided in the form of 32-bit, Android needs to use 128-bit, then splice it by itself<br/>
> For example, the 128 bits of FFE0 are: 0000ffe0-0000-1000-8000-00805f9b34fb

### The second set
The service ID is: `FFF0`
There are only two characteristic values below it, one for data callback and one for writing data

|UUID|Attributes|Explanation|
|:--|:--|:--|
|FFF1|Notify|Data callback feature value
|FFF2|Write|Data write characteristic value
|2A19|Read|Charging scale electric quantity characteristic value|

## Data interaction

After the feature value is enabled, you can receive the data uploaded by the scale.

After receiving the callback data from the scale, the APP sends it to the SDK for analysis through the method [QNBleProtocolHandler.onGetBleData](../api/QNBleProtocolHandler.md#ongetbledata),-and-the-parsed-data-will-pass-[qnscaledatalistener](../api/qnscaledatalistener.-md) callback.

In addition, if you need to write data, you will use [QNBleProtocolDelegate.writeCharacteristicValue](../api/QNBleProtocolDelegate.md#writecharacteristicvalue) to let the APP write for you.


## Measurement completed

After the measurement is completed, the complete data will be called back through [QNScaleDataListener](./../api/QNScaleDataListener.md), after which the scale will actively disconnect.

The next time you connect, you need to recreate [QNBleProtocolDelegate](../api/QNBleProtocolDelegate.md) and [QNBleProtocolHandler](../api/QNBleProtocolHandler.md)
