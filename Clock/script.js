btndig.addEventListener("click",dig);
btnana.addEventListener("click",ana);
btn00c.addEventListener("click",btn00);
//infobtn.........
var i=0;
function btn00(){
    
    i++;
    if (i%2==1){
    display00c.style.top="90%";
    display01c.style.height="90%";
    display10c.style.top="90%";
    
    }else{
    display00c.style.top="0%";
    display01c.style.height="0%";
    display10c.style.top="0%";
    }
};
//.....................
back0c.addEventListener("click",back0);
function back0(){
    displayc.style.left="0";
    btnana.style.left="0";
    btndig.style.left="0";
    anadig.style.left="0";
};
back1c.addEventListener("click",back1);
function back1(){
    displayc.style.left="0";
    btnana.style.left="0";
    btndig.style.left="0";
    anadig.style.left="0";
};
//.analog................

//..........................

function ana(){


displayc.style.left="100%";
btnana.style.left="100%";
btndig.style.left="100%";
anadig.style.left="100%";
clock1c.style.left="100%";
display00c.style.left="0%";
display10c.style.left="100%";

var b=setInterval(times);

function times(){
var time = new Date();
var s0= time.getSeconds()*6 + 180 ;
var m0= time.getMinutes()*6 + 180 +time.getSeconds()/10;
var h0= time.getHours()*30 + 180 +time.getMinutes()/2;

     sechand0c.style="transform:rotate("+s0/1+"deg);";
   minhand0c.style="transform:rotate("+m0/1 +"deg);";
   hrhand0c.style="transform:rotate("+h0/1+"deg);";
};
//.backgroundchange.......................
clock0c.addEventListener("click",colour0);
//setInterval(colour0,500);
setInterval(amday0);

function colour0(){

var time= new Date();

var setsecco=time.getMilliseconds();


    k= Math.ceil(Math.random()*6);
    if(k==1){
    body.style.background="green";
    nut04c.style.background="green";
//green
    }
    if(k==2){
//#05a
    body.style.background="#05a";
    nut04c.style.background="#05a";
    }
    if(k==3){
//#600 a50
    body.style.background="#600";
    nut04c.style.background="#600";
    }
    if(k==4){
//#0007 brown
    body.style.background="#a50";
    nut04c.style.background="#a50";
    }
    if(k==5){
//#0007 brown
    body.style.background="#000d";
    nut04c.style.background="#000d";
    }
    if(k==6){
//#0007 brown
    body.style.background="brown";
    nut04c.style.background="brown";
    }
    

};
//. Am pm day..date.............
var timei= new Date();
var h01=timei.getHours();
var d01=timei.getDay();
var mon1=timei.getMonth();
var d1=timei.getDate();
function amday0(){
d1=d1/1;
if (d1<10){d1="0"+d1;}
mo01 =(mon1/1 +1);
if (mo01<10){mo01="0"+mo01;}
date00c.innerHTML=d1 +'-'+mo01;

    if (h01>=12){
        ampm00c.innerHTML=" PM ";
    }
    if (h01<12){
        ampm00c.innerHTML=" AM ";
    };
    if (d01==0){
    day00c.innerHTML=" SU ";}
    if (d01==1){
    day00c.innerHTML=" MO ";}
    if (d01==2){
    day00c.innerHTML=" TU ";}
    if (d01==3){
    day00c.innerHTML=" WE ";}
    if (d01==4){
    day00c.innerHTML=" TH ";}
    if (d01==5){
    day00c.innerHTML=" FR ";}
    if (d01==6){
    day00c.innerHTML=" SA ";}
};
};
//0end....................................




//.////////////////////////////////////
function dig(){
    clock1c.style.left="0%";
    displayc.style.left="100%";
    btnana.style.left="100%";
    btndig.style.left="100%";
    anadig.style.left="100%";
    display00c.style.left="100%";
    display10c.style.left="0%";
    
var ref=setInterval(time1,10);
btn10co.addEventListener('click',colorch);
var b;
function colorch(){
    
    b= Math.ceil(Math.random()*6);
    if(b==1){
    btn10co.style.background="green";
    svg1.style.fill="green";
//green
    }
    if(b==2){
//#05a
    svg1.style.fill="#05a";
    btn10co.style.background="#05a";
    }
    if(b==3){
//#600 a50
    btn10co.style.background="#600";
    svg1.style.fill="#600";
    }
    if(b==4){
//#0007 brown
    btn10co.style.background="#a50";
    svg1.style.fill="#a50";
    }
    if(b==5){
//#0007 brown
    btn10co.style.background="#000d";
    svg1.style.fill="#000d";
    }
    if(b==6){
//#0007 brown
    btn10co.style.background="brown";
    svg1.style.fill="brown";
    }
    
};

function time1(){
var t1= new Date();
var s1= t1.getSeconds();
var m1= t1.getMinutes();
var h1= t1.getHours();
var d1= t1.getDate();
var mo1= t1.getMonth();
var y1= t1.getFullYear();
var dy1= t1.getDay();

display11.innerHTML=h1+":"+ m1+":"+s1;

//min10c.innerHTML=m1;
//hr10c.innerHTML=h1;
if (d1<10){d1="0"+d1;}
mo1 =(mo1/1 +1);
if (mo1<10){mo1="0"+mo1;}

date10c.innerHTML= d1+"-"+mo1+"-"+y1;

if (s1<10){
    sec10c.innerHTML= "0" +s1;
}
if (s1>9){
    sec10c.innerHTML=s1;
}
    if (m1<=9){
    min10c.innerHTML= "0" +m1;
    }
    if (m1>9){
    min10c.innerHTML=m1;
    }
if (h1>12){
    h1=h1-12;
}
if (h1<=9){
    hr10c.innerHTML= "0" +h1/1;
}
if (h1>9){
    hr10c.innerHTML=h1;
}
    if (h1>=12){
        ampm10c.innerHTML=" PM ";
    }
    if (h1<12){
        ampm10c.innerHTML=" AM ";
    };
    if (dy1==0){
    day10c.innerHTML=" WEDNESDAY ";}
    if (dy1==1){
    day10c.innerHTML=" MONDAY ";}
    if (dy1==2){
    day10c.innerHTML=" TUESDAY ";}
    if (dy1==3){
    day10c.innerHTML=" WEDNESDAY ";}
    if (dy1==4){
    day10c.innerHTML=" THURSDAY ";}
    if (dy1==5){
    day10c.innerHTML=" FRIDAY ";}
    if (dy1==6){
    day10c.innerHTML=" SATURDAY ";}

};
};
//.....................................