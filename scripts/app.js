//创建app应用模块
var yike=angular.module("yike",["ctrls","ngRoute"]);//yike模块依赖于ctrls模块
// console.log("111");
/* 
调用run方法
该方法的作用是,当模块创建好之后就可以直接执行
*/
//该模块依赖的是根作用域,子作用域通常是与控制器绑定的
yike.run(["$rootScope",function($rootScope){
//  alert("111");
// 给头部的a标签绑定toggle方法
//点击a标签,整个面板向右滑动,或者向左滑动
$rootScope.left=false;//设置移动,初始值为false,表示不移动
$rootScope.toggle=function(){
  // alert("toggle");
 /*  if($rootScope.left==true){
    $rootScope.left=false;
  }else{
    $rootScope.left=true;
  } */
  //取反原值为true,取值为false,false的,取值为true
  $rootScope.left=!$rootScope.left;
  //对导航栏中所有的dd的移动进行设置
  //获取所有的dd
  var dd=document.querySelectorAll("dd");
  // console.log(dd);
  // 遍历dd,将每一个dd设置位移
  //当$rootScope.left的值为true时,需要向右移动,false时,向左移动
  if($rootScope.left){
    for(var i=0; i<dd.length; i++) {
			dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';//过度需要花费的时间
			dd[i].style.transitionProperty = 'all';//所有属性都将获取过度效果
			dd[i].style.transitionDelay = '0.2s';//0.2s后开始切换效果
			dd[i].style.transitionTimingFunction = 'ease-out';//属性规定过渡效果的速度曲线,规定以慢速结束的过渡效果
			dd[i].style.transform = 'translate(0)';//属性向元素应用 2D 或 3D 转换,定义转换，只是用 X 轴的值
		}
  }else{
    for(var i=dd.length - 1; i>=0; i--) {
			dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
			dd[i].style.transitionProperty = 'all';
			dd[i].style.transitionDelay = '';
			dd[i].style.transitionTimingFunction = 'ease-out';
			dd[i].style.transform = 'translate(-100%)';
		}
  }
}
}]);
//修复锚点值的改变
yike.config(["$locationProvider",function($locationProvider){
$locationProvider.hashPrefix("");
}])
//配置路由
yike.config(["$routeProvider",function($routeProvider){
  $routeProvider.when("/",{
    redirecTo:"/index"//跳转到index进行处理
  }).when("/index",{
    templateUrl:"./views/test.html",//将要在ng-view区域显示的视图
    controller:"index"
  }).when("/older",{
    templateUrl:"./views/test.html",
    controller:"older"
  }).when("/author",{
    templateUrl:"./views/test.html",
    controller:"author"
  }).when("/category",{
    templateUrl:"./views/test.html",
    controller:"category"
  }).when("/favourite",{
    templateUrl:"./views/test.html",
    controller:"favourite"
  }).when("/settings",{
    templateUrl:"./views/test.html",
    controller:"settings"
  })
}])