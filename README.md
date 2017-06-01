## 斗鱼直播
### 图片
![image](http://chuantu.biz/t5/97/1496208783x2728329167.png)

![image](http://chuantu.biz/t5/97/1496208863x2890171869.png)

![image](http://chuantu.biz/t5/97/1496208897x2890171869.png)

![image](http://chuantu.biz/t5/97/1496208946x2890171869.png)

### css样式
```css
/*公共样式写在统一的css文件中，放在static文件夹下，在index.html中引入*/
*{box-sizing:border-box;}
a{...}
.clear-fix{...} /*清除浮动*/
等等。
```
### css小技巧
```css
rem代替px
z-index  /*元素堆叠顺序，只对定位的元素起作用*/
.root{ /*通过定位让元素脱标，巧妙的将一个页面放在另一个页面的下面*/
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
}
calc(x - y) /*计算函数*/
text-shadow:0px 0px 2px black;/*给文字加阴影，白字黑色阴影，可以结合图片使用*/
```
### 文字溢出处理方案
```css
/*将 xxx --> x...*/
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
```
### css常用颜色
```css
#333333  #666666  #999999
```
### 窗口大小改变
```javascript
// 监听窗口大小改变
window.onresize  =function(){
  //...
}
```
### 页面适配方案
```javascript
/*
页面适配方案：
目的：为了让页面内容适应不同尺寸屏幕的手机，页面中的元素的宽高不能写成固定值
解决：使用rem作为单位，当页面启动时，根据窗口的宽度计算出何时的rem的大小，当窗口变化时，再次计算rem大小，那么页面中的内容根据窗口的大小变化。
*/
var w = document.documentElement.clientWidth
document.documentElement.style.fontSize = w / 32 + 'px'
```
> 手机屏幕宽度一般 300px - 500px,fontSize值一般设为10px (1rem = 10px) 
### 设置视口
```html
<meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=no'>
```
### normalize.css
1. ul有自带的左内边距40px，ul有自带的上下外边距16px

下载地址：http://www.bootcdn.cn/normalize/
### 动画
一个div从左边进入
```css
.slideLeft-enter{
  transform: translateX(-100%); /*平移是从左上角开始计算的,注意是-100%*/
}
.slideLeft-enter-active{
  transition: all 1s;    
}
.slideLeft-leave-active{
  transform: translateX(-100%);
  transition: all 1s;
}
```
> vue动画的初始状态不用写
### 字体图标
Font Awesome
```html
<span class="fa fa-align-justify"></span> <!--四横杠面包导航按钮-->
<span class="fa fa-user-o"></span><!---->
<span class='fa fa-spinner fa-spin fa-3x'></span> <!--旋转加载的图标-->
==> [更多请查看官网](http://fontawesome.io/icons/)
```
### 非父子组件的传值
```javascript
import bus from '../util/bus.js' /*导入一个总线文件，在总线上发射事件*/
bus.$emit('openMenu')
bus.$on('openMenu',function(){
    //...
}.bind(this))
```
> 工具类的组件或者过滤或者计算可以放在单独的文件中(util)，使用时导入即可。
### 请求数据
尽量在页面级组件中发送请求，不要在单个小组件中发送。
#### 下载
```bash
$ npm i axios --save
```
#### 全局配置
```javascript 
/*配置axios;*/
import axios from 'axios'
Vue.prototype.$ajax = axios
```
> 只要是全局的，都写到main.js中
#### 请求代码
1. 页面级组件中

```javascript
mounted: function () { /*生命周期函数*/
    this.requestList()
},
methods: {
  /*把发请求写成一个函数，哪里需要发请求，哪里调用这个函数*/
    requestList: function () {
        this.$ajax.get('/douyu/api/RoomApi/live/lol',{ // 带参数的请求
            params:{
                /*根据list数组的长度计算出要加载的页数*/
                offset:Math.floor(this.list.length/30) /*带参数的ajax请求*/
            }
        })
        .then(function(res){
            console.log(res.data)
        })
    }
}
```
2. config-->index.js

```javascript
proxyTable: {
    "/douyu":{
      target:"http://open.douyucdn.cn", // 请求地址
      changeOrigin:true, // 是否使用代理跨域访问
      pathRewrite:{  // 本地服务器地址是否保留
        "^/douyu":""
      }
    }   
} 
```
### js进行页面跳转
```javascript
location.href = url // 在当前页面打开
window.open(url) // 在新页面打开
```
### 上拉加载更多
```css
/*将window的滚动转变为某一个div的滚动;给这个div设置如下：*/
height: 100vh; /*calc(100vh - 50px)当div上面有导航时这样设置*/
overflow: scroll;
```
#### 监听滚动事件

```html
<div @scroll='回调函数'></div>
```
```javascript
e.target.clientHeight // 元素自身高度 
e.target.scrollHeight // 元素的内容高度
e.target.scrollTop // 元素纵向滚动的偏移量
//最大偏移量：内容高度 - 自身高度
```
滚动到底部的判断

```javascript
if(e.target.scrollHeight-e.target.clientHeight==e.target.scrollTop){
    //...
}
```
为用户体验更高：在距离底部100px时就加载更多

```javascript
if(e.target.scrollTop>=e.target.scrollHeight-e.target.clientHeight-100){ //偏移量>=最大偏移量-100
    //...this.$emit('requestMore') <!--加载更多即请求更多数据-->
}
```
某一事件触发频繁，下拉加载多次，但只进行一次数据请求

```javascript
dataState:"normal"/*使用一个变量记录数据请求状态*/
/*每次请求之前进行判断*/
if(this.dataState == 'loading'){
    return  //直接return出去
}
this.dataState = 'loading'
```

```javascript
/*在ajax请求成功时*/
this.dataState = 'success'
/*在ajax请求失败时*/
this.dataState = 'fail'
```

描述网络状态
```html
<!--加载中-->
<p v-if="dataState == 'loading'" style="text-align: center;">
    <span class='fa fa-refresh fa-spin fa-3x'></span>
</p>
<!--网络连接超时-->
<p v-if="dataState == 'fail'">
    网络出问题了
</p>
```
### 一级页面跳转二级页面
需要搞清楚的是：

1. 二级页面也是页面级组件，最好放在page文件夹下。
2. 页面级的跳转是根据路由控制的；
3. transition动画是可以切换的

```html
<!--动态的设置name的值可以执行不同的动画效果，从而描述二级页面的进入退出-->
<transition :name='aniType'> </transition>
```
#### 路由变化--路由切换动画

```javascript
/*
watch监听$route可以知道路由的变化,在watch中：
$route(to,from){...}
to: 新的url地址
from:旧的URL地址
根据to.path.split('/').length的长度可以知道路由中有几个/,从而判断出是几级页面
*/
$route:function(to,from){ 
    var toNum = to.path.split('/').length - 1 
}
```
#### 二级页面进入退出动画实例

```css
/*二级页面进入动画*/
.pageIn-enter{
  transform: translate(100%,0)
}
.pageIn-enter-active{
  transition: all 0.7s linear; 
  position: absolute;
  width: 100%;
}
.pageIn-leave-active{
  transform: translate(-80%,0);
  transition: all 0.7s linear; 
  position: absolute;  
  width: 100%;
}
```

```css
/*二级页面退出动画*/
.pageOut-enter{
  transform: translate(-80%,0)
}
.pageOut-enter-active{
  transition: all 0.7s linear; 
  position: absolute;
  width: 100%;
  z-index: 1; /*进入的覆盖退出的*/
}
.pageOut-leave-active{
  transform: translate(100%,0);
  transition: all 0.7s linear; 
  position: absolute;  
  width: 100%;
}
```
#### 路由传参
第一种方式：

```html
<router-link :to="{ path: 'url地址', query: { xxx: yyy}}">
</router-link>
```
```javascript
this.$route.query.xxx
```

第二种方式:动态路由匹配

```javascript
// 在路由配置中
{path:'/category/:game/:id',component:xxx}, // 带参数的路径
```

```javascript
/*
url的hash路径中，可以通过:的形式添加路径参数，路径中的参数会传递给跳转页面，
*/
location.href = '#/category/'
+game的数据+'/'  // 按路由中的配置传递参数  记得加上分隔符
+id的数据
```

```javascript
//接收数据
this.$route.params.xxx
```
### 谷歌下vue的调试工具
Vue.js.devtools
打开蓝灯，搜索添加扩展程序。
