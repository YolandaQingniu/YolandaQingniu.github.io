# Broadcast scale-custom Bluetooth scanning

This chapter is for users who have a certain understanding of Bluetooth and have their own Bluetooth framework in the APP.

The broadcast scale will continuously emit a Bluetooth broadcast signal to the outside during the measurement, which will contain the user's weighing information.

The following description is based on the developer's knowledge of Bluetooth scanning. If you encounter many problems, it is recommended to use the SDK to scan the way to deal with.

The workflow of the device is approximately as follows:

<iframe src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5wYXJ0aWNpcGFudCB1c2VyIGFzIOeUqOaIt1xucGFydGljaXBhbnQgc2NhbGUgYXMg56ek56uvXG5wYXJ0aWNpcGFudCBhcHAgYXMgQVBQXG5wYXJ0aWNpcGFudCBzZXJ2ZXIgYXMg5LqR56uvXG5cbnVzZXItPj5hcHA65omT5byAQVBQXG5hcHAtLT5hcHA6IOWQr-WKqOaJq-aPj1xudXNlci0-PnNjYWxlOiDouKnkuq7np6RcbnNjYWxlLT4-YXBwOiDlj5HlsITok53niZnlub_mkq1cbmFwcC0-PmFwcDog6Kej5p6Q5bm_5pKt5pWw5o2uKOmHjemHj-OAgeWNleS9jeOAgeeKtuaAgeetiSlcbnVzZXItLT51c2VyOiDnq5nnqLNcbnNjYWxlLT4-YXBwOiDnqLPlrprmlbDmja5cbmFwcC0tPmFwcDog6K6h566X5L2T6ISC5pWw5o2uXG5hcHAtPj51c2VyOiDmmL7npLrlrozmlbTmtYvph4_nu5PmnpxcbmFwcC0-PnNlcnZlcjog5LiK5Lyg5rWL6YeP5pWw5o2uXG51c2VyLS0-dXNlcjog5LiL56ek5bm25p-l55yL5pWw5o2uXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"  frameborder=0 width=750 height=600></iframe>

## One、initialization
Use [QNBleApi.initSdk](../api/QNBleApi.md#initsdk)-to-initialize,-there-are-related-introductions-in-the-previous-article,-[please-check](../readme.md#development-process)

## 2. scanning

Call Bluetooth Scan by yourself

After calling the Bluetooth scan, pass the scanned broadcast information to the SDK, through [QNBleApi.buildBroadcastDevice](../api/QNBleApi.md#buildbroadcastdevice)

## Results processing

After getting [QNBleBroadcastDevice](../api/QNBleBroadcastDevice.md), please refer to [Broadcast Scale Access Process](./broadcast_scale.md) for the following processing
