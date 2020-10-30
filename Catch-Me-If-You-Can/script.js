
clicstrt.addEventListener("click",clickstrt);
clicstrt.addEventListener("click",hidestrt);
clicstrt.addEventListener("click",timrinp);
function hidestrt(){
    clicstrt.style.top="0";
    clicstrt.style.display="none";
    infoos.style.display="none";
    infodis.style.display="none";
    intro.style.display="none";
    timrdiv.style.display="none";
    lvlrange.style.display="none";
    
};
function vivr(){navigator.vibrate(100)};
var i=0;
function abts(){
    i++;
    if (i%2==1){
        infodis.style.display='';
        infodis.style="height:55vh;width:90%;border:1px solid #090;";
       }else{
        infodis.style="height:0vh;width:0%;border:0px solid #090;"
    };
};
///////////////
//timer input...........................

function timrinp(){
    timr.innerHTML=timrin.value;
};
var tim = timr.innerHTML;
function clickstrt(){
//timer strt................................
setInterval(ad, 1000);
function ad(){
    var x =timr.innerHTML;
    x--;
    timr.innerHTML=x;
    };
//timr end...................
//gamehere.................................
var rang= inprang.value;
if (rang==1){lvlt=1000
  ball.style="transition:1s ease-in-out;"}
if (rang==2){lvlt=800
  ball.style="transition:0.8s ease-in-out;"}
if (rang==3){lvlt=600
  ball.style="transition:0.6s ease-in-out;"}
if (rang==4){lvlt=400
  ball.style="transition:0.4s ease-in-out;"}
if (rang==5){lvlt=200
  ball.style="transition:0.2s ease-in-out;"}

//for defficulty lvl...........

//lvl fun end..................

setTimeout(setInterval(suru,lvlt),1000);

function suru(num){
    if(timr.innerHTML<=tim){
      ovr.innerHTML=" TIME OVER ! ";
      reslt.innerHTML="YOUR "+space.innerHTML;
      ball.removeEventListener("click",scr);
      timr.innerHTML="";
lst.innerHTML="I Hope you enjoy it...!<br>Comment your highest SCORE and TIME.<br>GOOD LUCK ! <br>To FOLLOW ME : <a href='https://www.sololearn.com/Profile/15875324/?ref=app'> Click Here </a><br><button id='infoo' > Info </button><hr><!--Defficulty lvl : <button id='lvlbut' onclick='lvlinc()'>+</button><button id='lvlbut' onclick='lvleq()'>=</button><button id='lvlbut' onclick='lvldec()'>-</button>-->";
// fun for nav..........
infodis.style.display="";
infoo.addEventListener("click",abt);


  }else{
    num= document.getElementById(num);
    var a= Math.ceil(Math.random()*97);
    var b= Math.ceil(Math.random()*97);
    ball.style.border="2px solid #0f0"
    ball.style.left= a+'%';
    ball.style.top= b+'vh';
    };

};
//onclick ball get score..............
ball.addEventListener("click",scr);
var t =0;
function scr(){
    t++;
    space.innerHTML="SCORE : "+t ;
};

//........
var i=0;

function abt(){
    i++;
    if (i%2==1){
        
        infodis.style="height:55vh;width:90%;border:1px solid #090;";
       }else{
        infodis.style="height:0vh;width:0%;border:0px solid #090;"
    }
};
};
//................
//gameend...................................