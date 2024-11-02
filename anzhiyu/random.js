var posts=["2024/11/01/猜数字小游戏/","2024/11/01/算法数据结构-关于单调栈/","2024/11/01/毒液迎来最后一舞/","2024/11/02/贪吃蛇-蛇王大战/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };