var posts=["2024/11/02/后缀表达式求值/","2024/11/02/洛谷P2678跳石头/","2024/11/01/毒液迎来最后一舞/","2024/11/02/洛谷P1083借教室/","2024/11/02/洛谷p5788单调栈/","2024/11/02/吐泡泡算法题/","2024/11/01/猜数字小游戏/","2024/11/02/洛谷p1901发射站/","2024/11/02/贪吃蛇-蛇王大战/","2024/11/01/算法数据结构-关于单调栈/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };