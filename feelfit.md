## 项目配置json如下

```json
{
	"app_name:":"Feelfit",
	"app_id":"Feelfit",
	"android_package_name":"com.qingniu.feeflit",
	"ios_bundle_id":"com.qingniu.feeflit",
	"server_domain":"oversea.api.yolanda.hk",
	"default_theme_color":"#3242FE",
	"measure_ui":1,
	"umeng_key":"58e634858630f55dfe00034e"

}
```

### 详解

|配置项|必须|默认值|说明|
|:--|:-:|:-:|:--|
|app_name|Y||APP的名称，一般为英文|
|android_package_name|Y||安卓的包名|
|ios_bundle_id|Y||ios的bundle id|
|server_domain|Y||请求服务器时的域名|
|default_theme_color|N|#89ce5c|默认主题色|
|measure_ui|N|1|测量界面UI，不同编号对应不同的界面，1为Feelfit本来的界面|
|umeng_key|N||友盟的key，没有key的话，默认feelfit的|
|jpush_key_test|N||JPush的测试服务器key，不填的话默认feelfit的|
|jpush_key|N||JPush的正式服务器key，不填的话默认feelfit的|
