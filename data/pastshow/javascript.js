(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53823792-2', 'auto');
ga('send', 'pageview');

locate=location.href.match(/([^/]+)\.html/)[1];
window.onload=function(){
	html='<table>';
	html+='<tr>';
	html+='<th colspan="3">';
	html+='<a href="../../pastshow.html">';
	html+='PASTSHOWトップに戻る';
	html+='</a>';
	html+='</th>';
	html+='</tr>';
	html+='<tr>';
	html+='<td colspan="3">';
	html+=document.getElementsByTagName("span")[0].innerHTML;
	html+='</td>';
	html+='</tr>';
	html+='<tr>';
	for(i=1;i!=document.getElementsByTagName("span").length;i++){
		html+='<td width="300" style="vertical-align:top;">';
		html+='<img src="'+locate+'/'+locate+i+'.JPG">';
		html+='</td>';
		if(i%3==0){
			html+='</tr>';
			html+='<tr>';
			for(j=1;j!=3;j++){
				html+='<td width="300" style="vertical-align:top;" class="text">';
				html+=document.getElementsByTagName("span")[j].innerHTML;
				html+='</td>';
			}
			html+='</tr>';
			html+='<tr>';
		}
	}
	html+='</tr>';
	html+='</table>';
	document.body.innerHTML=html;
}
alpha=0;
function animation(){
	alpha++;
	styledata="";
	styledata+="IMG{";
	styledata+="filter:alpha(opacity="+alpha+");";
	styledata+="-moz-opacity:"+alpha/100+";";
	styledata+="opacity:"+alpha/100+";";
	styledata+="}";
	document.getElementsByTagName("style")[0].innerHTML=styledata;
	if(alpha==100){
		clearTimeout(animInterval);
	}
}
animInterval=setInterval(animation,1000/60);