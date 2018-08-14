//该js主要用于定义控制器
angular.module("ctrls",[])
//创建导航栏的控制器,模拟导航栏数据,绑定传递过去
.controller("navs",["$scope",function($scope){
  $scope.navs=[
    {link:"#/index",icon:"icon-home",text:"今日一刻"},
    {link:"#/older",icon:"icon-file-empty",text:"往期内容"},
    {link:"#/author",icon:"icon-pencil",text:"热门作者"},
    {link:"#/category",icon:"icon-menu",text:"栏目浏览"},
    {link:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
    {link:"#/settings",icon:"icon-cog",text:"设置"}
  ]
}])
//创建index控制器
.controller("index",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
  //模拟数据
  // $scope.msg="控制器获取的数据";
  //绑定num,判定被点击标题被选中状态
  $rootScope.num=0;//用于全局,它触发于navs
  //绑定title,在绑定被点击标题被选中的状态
  $rootScope.title="今日一刻";
  //还未获取到的数据,显示加载图片
  $rootScope.show=true;
  //获取当前时间(今天的日期)
  var now=new Date();
  //格式化时间
  now =$filter("date")(now,"yyyy-MM-dd");
  $scope.now=now;
  //向后台发送请求
  $http({
    // url:"https://moment.douban.com/api/stream/date/2017-5-11?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6"
    //跨域了,从后台php发送请求
    //解决方法:从后台发送请求,获取数据
    url:"./api/index.php",
    params:{time:now}//传递参数
    //以index.htm引用的路径来查找该文件
    //success方法已经被淘汰,使用then方法来替代
  // }).success(function(result){
  }).then(function(result){
    console.log(result.data);
    //
    $rootScope.show=false;
    $scope.posts=result.data.posts;//在控制台查看
  })
}])
.controller("older",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
  //模拟数据
  // $scope.msg="这是older上面的数据 ";
  //绑定num,判定被点击标题被选中状态
  $rootScope.num=1;
  $rootScope.title="往期内容";
  $rootScope.show=true;
  var now=new Date();
  now.setDate(now.getDate()-1);//获取前一天的日期,格式写法
  now=$filter("date")(now,"yyyy-MM-dd");
  $scope.now=now;
  $http({
    url:"./api/older.php",
    params:{time:now}
  }).then(function(result){
    console.log(result);
    $rootScope.show=false;
    $scope.posts=result.data.posts
  })
}])
.controller("author",["$scope","$rootScope","$http",function($scope,$rootScope,$http){
  //模拟数据
  // $scope.msg="这是author上面的数据 ";
  //绑定num,判定被点击标题被选中状态
  $rootScope.num=2;
  $rootScope.title="热门作者";
  // $rootScope.show=true;
  $http({
    url:"./api/author.php"
  }).then(function(result){
    console.log(result.data);
    $scope.authors=result.data[0].authors;
    $scope.authors1=result.data[1].authors;
  })
}])
.controller("category",["$scope","$rootScope",function($scope,$rootScope){
  //模拟数据
  $scope.msg="这是category上面的数据 ";
  //绑定num,判定被点击标题被选中状态
  $rootScope.num=3;
  $rootScope.title="栏目浏览";
  // $rootScope.show=true;
}])
.controller("favourite",["$scope","$rootScope",function($scope,$rootScope){
  //模拟数据
  $scope.msg="这是favourite上面的数据 ";
  //绑定num,判定被点击标题被选中状态
  $rootScope.num=4;
  $rootScope.title="我的喜欢";
  // $rootScope.show=true;
}])
.controller("settings",["$scope","$rootScope",function($scope,$rootScope){
  //模拟数据
  $scope.msg="这是settings上面的数据 ";
  //绑定num,判定被点击标题被选中状态
  $rootScope.num=5;
  $rootScope.title="设置";
  // $rootScope.show=true;
}])
