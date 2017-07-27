myHref=["http://www.bar-gai.com/","http://www.hakodate-gc.com/index.html","hogehoge","http://www.hakodate.travel/en/"];
myTitle=["函館西部地区2017　春のバル街","はこだてグルメサーカス 2017","10月14日は鉄道の日","Travel Hakodate"]
myTiming=["4/21(Fri)　14:00→24:00","9/2,9/3　10:00→17:00","10/14(Thu)　一日中",""];
myFee=["前売りチケット　¥3,500<br>当日チケット　　¥4,000","参加無料！","","無料ダウンロードはこちらから"];

var img_n=0;

window.onload =func1=function change_image(){
  document.getElementById("burner").src=`img/index/ad${img_n}.png`;
  document.getElementById("links").href=myHref[img_n];
  document.getElementById("title").innerHTML=myTitle[img_n];
  document.getElementById("timing").innerHTML=myTiming[img_n];
  document.getElementById("fee").innerHTML=myFee[img_n];
  for(var i=0;i<myHref.length;i++){
    document.getElementById(`br${i}`).style.opacity="1";
    document.getElementById(`br${i}`).style.border="none";
  }
  document.getElementById(`br${img_n}`).style.opacity="0.7";
  document.getElementById(`br${img_n}`).style.border="4px #000000 solid";

  img_n++;
  if(img_n==myHref.length){img_n=0;}

  setTimeout(func1,2500);
}


function adaptOpacity(pattern){
  if(pattern==0){
      document.getElementById("burner").style.opacity="1";
  }else{
    document.getElementById("burner").style.opacity="0.7";
  }
}
