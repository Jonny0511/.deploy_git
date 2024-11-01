var posts=["2024/11/01/毒液迎来最后一舞/","2024/10/31/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };