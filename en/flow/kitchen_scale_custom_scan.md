# Kitchen scale-custom Bluetooth scanning

This chapter is for users who have a certain understanding of Bluetooth and have their own Bluetooth framework in the APP.

When the kitchen scale is measuring, it will continuously emit a Bluetooth broadcast signal to the outside, which will contain weighing information.

The following description is based on the developer's knowledge of Bluetooth scanning. If you encounter many problems, it is recommended to use the SDK to scan the way to deal with.

The work flow of this device is the same as that of [broadcast_scale_custom_scan.md):


## One、initialization
Use [QNBleApi.initSdk](../api/QNBleApi.md#initsdk)-to-initialize,-there-are-related-introductions-in-the-previous-article,-[please-check](../readme.md#development-process)

## 2. scanning

Call Bluetooth Scan by yourself

After calling the Bluetooth scan, pass the scanned broadcast information to the SDK through [QNBleApi.buildkitchenDevice](../api/QNBleApi.md#buildkitchendevice)

## Results processing

After getting [QNBleKitchenDevice](../api/QNBleKitchenDevice.md), please refer to [Kitchen Scale Access Process](./kitchen_scale.md) for the following processing
