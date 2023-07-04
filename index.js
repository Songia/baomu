(function(){  //匿名函数，页面开始就加载
    var img=document.getElementsByTagName("img")[0]; //获取图片
    var arr=["./images/images/sky1.jpg","./images/images/sky4.jpg","./images/images/sky2.jpg","./images/images/sky3.jpg",]; //定义图片数组
    var num=0;
    //设置定时器，调用函数执行
    function inv(){
       num++;
       if(num>=arr.length){
           num=0;
       }
       console.log(num);
       img.src=arr[num];
     }   
     setInterval(inv,2000); //调用函数2秒切换一次，注意：inv不能加()
})()
