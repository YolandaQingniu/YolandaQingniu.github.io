# 广播秤-自定义蓝牙扫描

该篇章是给对蓝牙有一定了解，并在APP中有自己蓝牙框架的用户使用 

广播秤在测量时，会不断向外发射蓝牙广播信号，里面会包含用户称重的信息。

下文的说明是基于开发者已经对蓝牙扫描有了一定了解。如果遇到很多问题，还是建议使用SDK进行扫描的方式处理。

该设备的工作流程大约如下：

<iframe src="https://mermaidjs.github.io/mermaid-live-editor/#/view/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG5wYXJ0aWNpcGFudCB1c2VyIGFzIOeUqOaIt1xucGFydGljaXBhbnQgc2NhbGUgYXMg56ek56uvXG5wYXJ0aWNpcGFudCBhcHAgYXMgQVBQXG5wYXJ0aWNpcGFudCBzZXJ2ZXIgYXMg5LqR56uvXG5cbnVzZXItPj5hcHA65omT5byAQVBQXG5hcHAtLT5hcHA6IOWQr-WKqOaJq-aPj1xudXNlci0-PnNjYWxlOiDouKnkuq7np6RcbnNjYWxlLT4-YXBwOiDlj5HlsITok53niZnlub_mkq1cbmFwcC0-PmFwcDog6Kej5p6Q5bm_5pKt5pWw5o2uKOmHjemHj-OAgeWNleS9jeOAgeeKtuaAgeetiSlcbnVzZXItLT51c2VyOiDnq5nnqLNcbnNjYWxlLT4-YXBwOiDnqLPlrprmlbDmja5cbmFwcC0tPmFwcDog6K6h566X5L2T6ISC5pWw5o2uXG5hcHAtPj51c2VyOiDmmL7npLrlrozmlbTmtYvph4_nu5PmnpxcbmFwcC0-PnNlcnZlcjog5LiK5Lyg5rWL6YeP5pWw5o2uXG51c2VyLS0-dXNlcjog5LiL56ek5bm25p-l55yL5pWw5o2uXG4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"  frameborder=0 width=750 height=600></iframe>

## 一、初始化
使用[QNBleApi.initSdk](../api/QNBleApi.md#initSdk)进行初始化，前文已有相关介绍，[请查看](../README.md#开发流程)

## 二、扫描

自行调用蓝牙扫描

调用蓝牙扫描后，把扫描到的广播信息传给SDK，通过[QNBleApi.buildBroadcastDevice](../api/QNBleApi.md#buildbroadcastdevice)

## 结果处理

拿到[QNBleBroadcastDevice](../api/QNBleBroadcastDevice.md)后，接下面的处理请参考[广播秤接入流程](./broadcast_scale.md)