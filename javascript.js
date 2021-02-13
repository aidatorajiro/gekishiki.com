window.onload=function(){
  if(location.href.match(/([^/]+)\.html/)){
    locate=location.href.match(/([^/]+)\.html/)[1];
  }else{
    locate="index";
  }
  
  htmldata="";
  if(locate!="index" && locate!="news"){
    htmldata+="<h1>"+locate.toUpperCase()+"</h1>";
  }
  htmldata+=document.getElementsByTagName("body")[0].innerHTML;
  htmldata+='<div id="menu">';
  if(locate!="index"){
    htmldata+='<a href="index.html">INDEX</a>';
  }
  if(locate!="about"){
    htmldata+='<a href="about.html">ABOUT</a>';
  }
  if(locate!="puppets"){
    htmldata+='<a href="puppets.html">PUPPETS</a>';
  }
  if(locate!="pastshow"){
    htmldata+='<a href="pastshow.html">PAST SHOW</a>';
  }
  if(locate!="news"){
    htmldata+='<a href="news.html">NEWS</a>';
  }
  if(locate!="slogan"){
    htmldata+='<a href="slogan.html">SLOGAN</a>';
  }
  htmldata+='<h6>';
  htmldata+='このサイトにおける画像・文章などの無断使用を禁じます。また転載などにきましては事前にお問い合わせいただきますようお願いいたします。<br>';
  htmldata+='For any question, contact GEKIDAN☆SHIKI　Copyrightd &copy;GEKIDAN☆SHIKI All Rights Reserved.<br>';
  htmldata+='このホームページは11歳の会田寅次郎君によって制作されました。<br>';
  htmldata+='This homepage is designed by  11-years old Aida Torajirou.<br>';
  htmldata+='</h6>';
  htmldata+='</div>';
  document.getElementsByTagName("body")[0].innerHTML=htmldata;
}
