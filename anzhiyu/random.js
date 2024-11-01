var posts=["2024/11/01/毒液迎来最后一舞/","2024/11/01/算法数据结构-关于单调栈/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };