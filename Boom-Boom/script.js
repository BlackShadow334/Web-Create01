//guide and info dont wark
//full of bugs


alert("tap on icon to fire and to move use slider")


//play btn...........

playc.addEventListener("click",playf);
function playf(){
    
    realgame();
    homec.style.bottom="-100%";
    navdis1c.style.bottom="0";
    overc.style.bottom="-100%";
    loadingc.style.top="0";
    
};
//playbtn end


function realgame(){
//progress..............
ip=0;
wit0=1;
var prog0int=setInterval(prog0widt,15);
function prog0widt(){
    wit0++;
    prog0c.style.width=wit0+"vw";

    if (wit0==94){
        clearInterval(prog0int);
        
    }
};
setTimeout(rang0top,4010);
function rang0top(){
    loadingc.style.top="-100%";
    roundc.innerHTML="ROUND:1";
};
setTimeout(round1,6010);
function round1(){
    roundc.innerHTML="";
    prog0c.style.width="1vw";
};
//......onclick....ballcreate...
var createballu=setInterval(createb0,1010);

b0=2;
function createb0(){
    space0.innerHTML="";
    for (i=0;b0>=i;i++){
        space0.innerHTML+='<div class="bal1cc" id="bal'+i+'" style="position:fixed;font-size:1em;bottom:4em;transition:1s ease;"></div>';
    };
   // bal0.style.left=rang0c.value +"%";
   
};
//ball create end...

//.......................................
touch1c.addEventListener("click",function(){
    touch1=rang0c.value/1;
    touch1=touch1-5;
    rang0c.value=touch1;
    bal0.style.left=rang0c.value +"%";
});
touch3c.addEventListener("click",function(){
    touch3=rang0c.value/1;
    touch3=touch3+5;
    rang0c.value=touch3;
    bal0.style.left=rang0c.value +"%";
});
//ppsitioning user ..............
var userpo=setInterval(userpos);
function userpos(){
    var pos=rang0c.value;
    userobj0c.style.left=pos+"%";
};
//..

//computer position ......
var compo=setInterval(compos,2000);
function compos(){
//com ball create...
b1=0;
    space1.innerHTML="";
    for (i=0;b1>=i;i++){
        space1.innerHTML+='<div class="bal0cc" id="bala'+i+'" style="position:fixed;font-size:1em;top:0;">⁠⁠💧</div>';
        
space1.innerHTML+='<div class="bal0cc" id="bala1" style="position:fixed;font-size:1em;top:0;transition:2s ease;">⁠</div>';
};
//comball create end..
//positioning com..and ball....
    var cpos=Math.ceil(Math.random()*97);
//    var cpos=48;
    cpos=cpos/1-2;
    comobj0c.style.left=cpos+"%";
    
    bala0.style.left=cpos+"%";
    bala1.style.left=cpos+"%";
};
//compos.end...............
//firing balll......com.....
var cballm0int=setInterval(cballm0,4010);
function cballm0(){
  bala0.style.transition="1.5s ease";
   bala1.style.display="";
   bala1.innerHTML="";
   bala0.style.top="85%";
    
};
setTimeout(cballm1r,1000);
function cballm1r(){
var cballm1int=setInterval(cballm1,4010);
function cballm1(){
   
   bala0.style.transition="0.5s ease";
   bala1.style.display="none";
   bala0.style.top="99%";
   healthdec();
   
};
navdis1c.addEventListener("click",function(){clearInterval(cballm1int);});
};
//...........   


//health decr.......

itop=healthhtm.innerHTML;

function healthdec(){
var leftuo=userobj0c.style.left;
    leftuo=leftuo.substr(0,2);
    leftuo=Math.ceil(leftuo/1);
var leftcb=bala0.style.left;
    leftcb=leftcb.substr(0,2);
    leftcb=Math.ceil(leftcb/1);
leftrdh=Math.abs(leftuo-leftcb);

topcb=bala0.style.top;
    topcb=topcb.substr(0,2);
    topcb=Math.ceil(topcb/1);
    
if (topcb==99){

if (leftrdh<=5){
    

    itop=itop/1-1;
    healthhtm.innerHTML=itop;
    }
    }

};



//health dec end.......


//firimgball...user.....
touch0c.addEventListener("click",firetouch);
touch2c.addEventListener("click",firetouch);
i=0;
function firetouch(){
   i++;
   if (i%3==1){
     bal0.innerHTML="⁠⁠🔺";
     bal0.style.bottom="100%";
     
     bal0.style.left=rang0c.value +"%";
    }if (i%3==2){
     bal1.innerHTML="⁠🔺";
     bal1.style.bottom="100%";
     bal1.style.left=rang0c.value +"%";
    }if (i%3==0){
     bal2.innerHTML="⁠🔺";
     bal2.style.bottom="100%";
     bal2.style.left=rang0c.value +"%";
    }
};
//....fiteball end........

//score............

touch0c.addEventListener("click",score);
touch2c.addEventListener("click",score);
iscr=scorehtm.innerHTML;
function score(){
var leftub=bal0.style.left;
    leftub=leftub.substr(0,2);
    leftub=Math.ceil(leftub/1);

var leftco=comobj0c.style.left;
    leftco=leftco.substr(0,2);
    leftco=Math.ceil(leftco/1);
    
    leftrds=Math.abs(leftco-leftub);

var bottomu=bal0.style.bottom;
var bottomc=comobj0c.style.bottom;


    if (leftrds<=5){
        iscr=iscr/1+5;
        scorehtm.innerHTML=iscr;
    }

};


//...score..........
var ovrint=setInterval(overchek);
function overchek(){
var scoreover=scorehtm.innerHTML/1;
var healt0=healthhtm.innerHTML/1;
if (healt0<=0){
    overdis1c.innerHTML=" YOU SCORED : "+scoreover;
    overc.style.bottom="0";
    
    clearInterval(ovrint);
}
};

//navdis1 to home....
overhome.addEventListener("click",gohome);
navdis1c.addEventListener("click",gohome);
function gohome(){
    homec.style.bottom="0%";
    
    navdis1c.style.bottom="100%";
    overc.style.bottom="-100%";
    healthhtm.innerHTML="3";

        navdis0c.style.bottom="0";
        navdisplay0c.style.bottom="-10em";
        
    
    clearInterval(createballu);
    clearInterval(userpo);
    clearInterval(compo);
    clearInterval(cballm0int);
};
//


};
//realgame ends.....



//nav ^......
inav0=0;
navdis0c.addEventListener("click",function(){
    inav0++;
    if (inav0%2==1){
        navdis0c.style.bottom="10em";
        navdisplay0c.style.bottom="0";
        navdis1c.style.bottom="0";
    }else{
        navdis0c.style.bottom="0";
        navdisplay0c.style.bottom="-10em";
        navdis1c.style.bottom="0";
    }
});
//nav...^ end....
overhome.addEventListener("click",function(){
    overc.style.bottom="-100%";
});
