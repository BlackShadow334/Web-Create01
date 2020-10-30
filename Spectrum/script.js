btn1.addEventListener("click",emwave);

//#.............
btn0c.addEventListener("click",btn0);
function btn0(){
        navc.style.top="0%";
        infoo.style.display="";
};
//...........
iinfoo=0;
infoo.addEventListener("click",function(){
    iinfoo++;
    if (iinfoo%2==1){
        infoo.style.right="80%";
        infodis.style.right="0%";
    }else{
        infoo.style.right="0%";
        infodis.style.right="-80%"
    }
});




//wave............................
function emwave(){

body.addEventListener("click",rang00);

rang00c.addEventListener("input",rang00);
rang001c.addEventListener("input",rang00);
rang002c.addEventListener("input",rang00);
rang003c.addEventListener("input",rang00);
rang004c.addEventListener("input",rang00);
rang005c.addEventListener("input",rang00);
rang006c.addEventListener("input",rang00);
rang007c.addEventListener("input",rang00);

inp00c.addEventListener("keyup",keyup00);
inp01c.addEventListener("keyup",keyup00);

//hiding..
navc.style.top="-101%";
colormix.style.top="-101%";
head1.style.top="-101%";
btn10c.style.display="none";
nav10c.style.display="none";
rang10c.style.display="none";
rang11c.style.display="none";
rang12c.style.display="none";
infoo.style.display="none";


var x0=rang00c.value;
function keyup00(){


    var iw00 = inp00c.value;
    var if00= 299792.458/iw00;
    var if01 = inp01c.value;
    var iw01= 299792.458/if01;
inp00c.addEventListener("keyup",function(i00){if (i00.keyCode===13){
       i00.preventDefault();
       
    if (x0<=1){
           inp01c.value= if00;
           rang001c.value= iw00;
    };if (x0==2){
           inp01c.value= if00;
           rang002c.value= iw00;
    };if (x0==3){
           inp01c.value= if00;
           rang003c.value= iw00;
    };
    if (x0==4){
           inp01c.value= if00;
           rang004c.value= iw00; 
           visual();
    }if (x0==5){
           inp01c.value= if00;
           rang005c.value= iw00;
    }if (x0==6){
           inp01c.value= if00;
           rang006c.value= iw00;
    };if (x0>=7){
           inp01c.value= if00;
           rang007c.value= iw00;
    }; 
    in02c.innerHTML="λ : "+iw00+" × 10<sup>-9</sup> m";
in03c.innerHTML=" ν : "+if00+" × 10<sup>12</sup> Hz";
    };
});
inp01c.addEventListener("keyup",function(i01){if (i01.keyCode===13){
       i01.preventDefault(); 
    if (x0<=1){
           inp00c.value= iw01;
           rang001c.value= iw01;
    };if (x0==2){
           inp00c.value= iw01;
           rang002c.value= iw01;
    };if (x0==3){
           inp00c.value= iw01;
           rang003c.value= iw01;
    };
    if (x0==4){
           inp00c.value= iw01;
           rang004c.value= iw01;
    };if (x0==5){
           inp00c.value= iw01;
           rang005c.value= iw01;
    };if (x0==6){
           inp00c.value= iw01;
           rang006c.value= iw01;
    };if (x0>=7){
           inp00c.value= iw01;
           rang007c.value= iw01;
    }; 
    in02c.innerHTML="λ : "+iw01+" × 10<sup>-9</sup> m";
in03c.innerHTML=" ν : "+if01+" × 10<sup>12</sup> Hz";
    };
});

};
function rang00(){
var x0=rang00c.value;


if (x0<=1){
    rang001c.style.display="";
    in00c.innerHTML=" fm";
    in01c.innerHTML=" PHz";
    display00c.innerHTML=" GAMMA RAY<br> λ RANGE: < 6000 fm<br> ν RANGE: > 50 PHz";
    rang001();
}if (x0>1){
    rang001c.style.display="none";
    
    
}
if (x0==2){
    rang002c.style.display="";
    in00c.innerHTML=" pm";
    in01c.innerHTML=" PHz";
    display00c.innerHTML=" X-RAY<br> λ RANGE: 6 pm - 8000 pm<br> ν RANGE: 49965.5 PHz - 37.5 PHz";
    rang002();
}if (x0!=2){
    rang002c.style.display="none";

}
if (x0==3){
    rang003c.style.display="";
    in00c.innerHTML=" nm";
    in01c.innerHTML=" THz";
    display00c.innerHTML=" ULTRAVIOLET RADIATION<br> λ RANGE: 8 nm - 380 nm<br> ν RANGE: 374704 THz - 788 THz";
    rang003();
}if (x0!=3){
    rang003c.style.display="none";
    
}
if (x0==4){
    rang004c.style.display="";
    in00c.innerHTML=" nm";
    in01c.innerHTML=" THz";
    display00c.innerHTML="VISIBLE LIGHT<br> λ RANGE: 380 nm - 780 nm<br> ν RANGE: 789 THz - 385 THz";
    dis011c.style.display="";
    rang004();
    visual();

    
}if (x0!=4){
    rang004c.style.display="none";
    dis011c.style.display="none";
    body.style.background="#222";
//    in00c.innerHTML="";
//    in01c.innerHTML="";
    
}
if (x0==5){
    rang005c.style.display="";
    in00c.innerHTML=" μm";
    in01c.innerHTML=" GHz";
    display00c.innerHTML="INFRARED RADIATION<br> λ RANGE: 0.78 μm - 1000 μm<br> ν RANGE: 384349.3 GHz - 299.8 GHz";
    rang005();
}if (x0!=5){
    rang005c.style.display="none";
    
}
if (x0==6){
    rang006c.style.display="";
    in00c.innerHTML=" mm";
    in01c.innerHTML=" MHz";
    display00c.innerHTML="MICRO WAVE<br> λ RANGE: 1 mm - 300 mm<br> ν RANGE: 299792.45 MHz - 999.3 MHz";
    rang006();
}if (x0!=6){
    rang006c.style.display="none";
    
}
if (x0>=7){
    rang007c.style.display="";
    in00c.innerHTML=" m";
    in01c.innerHTML=" KHz";
    display00c.innerHTML="RADIO WAVE<br> λ RANGE: > 0.3 m<br> ν RANGE: < 999308 KHz";
    rang007();
}if (x0<7){
    rang007c.style.display="none";
    
}
};
function rang001(){
var x01= rang001c.value ;
var y01= 299792.458/x01;

inp00c.value= x01;
inp01c.value= y01;

in02c.innerHTML="λ : "+x01+" × 10<sup>-15</sup> m";
in03c.innerHTML=" ν : "+y01+" × 10<sup>15</sup> Hz";
};
 
function rang002(){
var x02= rang002c.value ;
var y02= 299792.458/x02;

inp00c.value= x02;
inp01c.value= y02;

in02c.innerHTML="λ : "+x02+" × 10<sup>-12</sup> m";
in03c.innerHTML=" ν : "+y02+" × 10<sup>15</sup> Hz";
};
 
function rang003(){
var x03= rang003c.value ;
var y03= 299792.458/x03;

inp00c.value= x03;
inp01c.value= y03;

in02c.innerHTML="λ : "+x03+" × 10<sup>-9</sup> m";
in03c.innerHTML=" ν : "+y03+" × 10<sup>12</sup> Hz";
};

function rang004(){
var x04= rang004c.value ;
var y04= 299792.458/x04;

inp00c.value= x04;
inp01c.value= y04;

in02c.innerHTML="λ : "+x04+" × 10<sup>-9</sup> m";
in03c.innerHTML=" ν : "+y04+" × 10<sup>12</sup> Hz";
};

function rang005(){
var x05= rang005c.value ;
var y05= 299792.458/x05;

inp00c.value= x05;
inp01c.value= y05;

in02c.innerHTML="λ : "+x05+" × 10<sup>-6</sup> m";
in03c.innerHTML=" ν : "+y05+" × 10<sup>9</sup> Hz";
};

function rang006(){
var x06= rang006c.value ;
var y06= 299792.458/x06;

inp00c.value= x06;
inp01c.value= y06;

in02c.innerHTML="λ : "+x06+" × 10<sup>-3</sup> m";
in03c.innerHTML=" ν : "+y06+" × 10<sup>6</sup> Hz";
};

function rang007(){
var x07= rang007c.value ;
var y07= 299792.458/x07;

inp00c.value= x07;
inp01c.value= y07;

in02c.innerHTML="λ : "+x07+" × 10<sup>0</sup> m";
in03c.innerHTML=" ν : "+y07+" × 10<sup>3</sup> Hz";
};
btn00c.addEventListener("click",btn00);
var b00=0;
function btn00(){
    b00++;
    if(b00%2==1){
        nav00c.style.right="0%";
    }else{
        nav00c.style.right="-75%";
    }
};
btn01c.addEventListener("click",btn01);
var b01=0;
function btn01(){
    b01++;
    if(b01%2==1){
        nav01c.style.left="0%";
    }else{
        nav01c.style.left="-78%";
    }
};
//vibgyor..........


function visual(){
if (x0==4){

var vis = rang004c.value/1;
if (vis>=380){
if (vis<=780){
    if (vis<=430){
    if (vis>=380){
        x0iv0 = 430-vis;
        x0iv0 = x0iv0*83/50 +46;
        x0iv1 = vis-380;
        x0iv1 = x0iv1*43/50;
        x0iv2 = 430-vis;
        x0iv2 = x0iv2*130/50 +95;
         body.style="background:rgb("+x0iv0+","+x0iv1+","+x0iv2+");";
    in04c.innerHTML="RGB : rgb("+x0iv0+","+x0iv1+","+x0iv2+")";
    };}if (vis<=450){
    if (vis>430){
        x0bi0 = 450-vis;
        x0bi0 = x0bi0*46/20;
        x0bi1 = 450-vis;
        x0bi1 = x0bi1*43/20;
        x0bi2 = vis-430;
        x0bi2 = x0bi2*95/20;
         body.style="background:rgb("+x0bi0+","+x0bi1+","+x0bi2+");";
    in04c.innerHTML="RGB : rgb("+x0bi0+","+x0bi1+","+x0bi2+")";
    };}if (vis<=500){
    if (vis>450){
        x0gb1 =vis-450;
        x0gb1 =x0gb1*255/50;
        x0gb2 =500-vis;
        x0gb2 =x0gb2*255/50; body.style="background:rgb(0,"+x0gb1+","+x0gb2+");";
    in04c.innerHTML="RGB : rgb(0,"+x0gb1+","+x0gb2+")";
    }}if (vis<=580){
    if (vis>500){
        x0yg =vis-500;
        x0yg =x0yg*255/80;
 body.style="background:rgb("+x0yg+",255,0);";
   in04c.innerHTML="RGB : rgb("+x0yg+",255,0)";
    };};if (vis<=780){
    if (vis>580){
        x0ry =780-vis;
        x0ry =x0ry*255/200;
 body.style="background:rgb(255,"+x0ry+",0);";
   in04c.innerHTML="RGB : rgb(255,"+x0ry+",0)";
    };}

};};    
};
};};
//wave end...........


//.........
btn2.addEventListener("click",mixcolor);




function mixcolor(){
//hiding....unhiding..........
    navc.style.top="-101%";
    colormix.style.top="0%";
    head1.style.top="0%";
    btn10c.style.display="";
    rang10c.style.display="";
    rang11c.style.display="";
    rang12c.style.display="";
    nav10c.style.display="";
    infoo.style.display="none";
    
btn10c.addEventListener("click",btn10);
var b10=0;
function btn10(){
    b10++;
    if(b10%2==1){
        nav10c.style.right="0%";
    }else{
        nav10c.style.right="-80%";
    }
};
//........................

rang10c.addEventListener("input",col10);
rang11c.addEventListener("input",col10);
rang12c.addEventListener("input",col10);

ra=rang10c.value;
rb=rang11c.value;
rc=rang12c.value;

function col10(){

ra=rang10c.value;
rb=rang11c.value;
rc=rang12c.value;

inp10ca.value=ra;
inp10cb.value=rb;
inp10cc.value=rc;

dis10c.innerHTML="RGB : rgb("+ra+","+rb+","+rc+")";

dis11c.innerHTML="HEX : #"+00+00+00;
dis12c.innerHTML="HSL : rgb("+0+"%,"+0+"%,"+0+"%)";

colormix.style.background="rgb("+ra+","+rb+","+rc+")";
};

//retuning value from input
inp10ca.addEventListener("input", rgb1);
inp10cb.addEventListener("input", rgb1);
inp10cc.addEventListener("input", rgb1);

function rgb1(){
    ia=inp10ca.value;
    ib=inp10cb.value;
    ic=inp10cc.value;

    rang10c.value=ia;
    rang11c.value=ib;
    rang12c.value=ic;
    

dis10c.innerHTML="RGB : rgb("+ia+","+ib+","+ic+")";

dis11c.innerHTML="HEX : #"+00+00+00;
dis12c.innerHTML="HSL : hsl("+0+","+0+"%,"+0+"%)";

colormix.style.background="rgb("+ia+","+ib+","+ic+")";
};
//.........

td10.addEventListener("click",function(){

rang10c.value=128;
rang11c.value=0;
rang12c.value=0;

inp10ca.value=128;
inp10cb.value=0;
inp10cc.value=0;

inp11ca.value=80;
inp11cb.value="00";
inp11cc.value="00";

inp12ca.value=0;
inp12cb.value=100;
inp12cc.value=25;

dis10c.innerHTML="RGB : rgb(128,0,0)";
dis11c.innerHTML="HEX : #800000";
dis12c.innerHTML="HSL : hsl(0,100%,25%)";

colormix.style.background="rgb(128,0,0)";
});

td11.addEventListener("click",function(){
rang10c.value=255;
rang11c.value=0;
rang12c.value=0;

inp10ca.value=255;
inp10cb.value=0;
inp10cc.value=0;

inp11ca.value="ff";
inp11cb.value="00";
inp11cc.value="00";

inp12ca.value=0;
inp12cb.value=100;
inp12cc.value=50;

dis10c.innerHTML="RGB : rgb(255,0,0)";
dis11c.innerHTML="HEX : #ff0000";
dis12c.innerHTML="HSL : hsl(0,100%,50%)";

colormix.style.background="rgb(255,0,0)";
});
//...........
td12.addEventListener("click",function(){
rang10c.value=128;
rang11c.value=128;
rang12c.value=0;

inp10ca.value=128;
inp10cb.value=128;
inp10cc.value=0;

inp11ca.value="80";
inp11cb.value="80";
inp11cc.value="00";

inp12ca.value=60;
inp12cb.value=100;
inp12cc.value=25;

dis10c.innerHTML="RGB : rgb(128,128,0)";
dis11c.innerHTML="HEX : #808000";
dis12c.innerHTML="HSL : hsl(60,100%,25%)";

colormix.style.background="rgb(128,128,0)";
});
//...........
td13.addEventListener("click",function(){
rang10c.value=255;
rang11c.value=255;
rang12c.value=0;

inp10ca.value=255;
inp10cb.value=255;
inp10cc.value=0;

inp11ca.value="ff";
inp11cb.value="ff";
inp11cc.value="00";

inp12ca.value=60;
inp12cb.value=100;
inp12cc.value=50;

dis10c.innerHTML="RGB : rgb(255,255,0)";
dis11c.innerHTML="HEX : #ffff00";
dis12c.innerHTML="HSL : hsl(60,100%,50%)";

colormix.style.background="rgb(255,255,0)";
});
//...........
td14.addEventListener("click",function(){
rang10c.value=0;
rang11c.value=128;
rang12c.value=0;

inp10ca.value=0;
inp10cb.value=128;
inp10cc.value=0;

inp11ca.value="00";
inp11cb.value="80";
inp11cc.value="00";

inp12ca.value=120;
inp12cb.value=100;
inp12cc.value=25;

dis10c.innerHTML="RGB : rgb(0,128,0)";
dis11c.innerHTML="HEX : #008000";
dis12c.innerHTML="HSL : hsl(120,100%,25%)";

colormix.style.background="rgb(0,128,0)";
});
//...........
td15.addEventListener("click",function(){
rang10c.value=0;
rang11c.value=255;
rang12c.value=0;

inp10ca.value=0;
inp10cb.value=255;
inp10cc.value=0;

inp11ca.value="00";
inp11cb.value="ff";
inp11cc.value="00";

inp12ca.value=120;
inp12cb.value=100;
inp12cc.value=50;

dis10c.innerHTML="RGB : rgb(0,255,0)";
dis11c.innerHTML="HEX : #00ff00";
dis12c.innerHTML="HSL : hsl(120,100%,50%)";

colormix.style.background="rgb(0,255,0)";
});
//...........
td16.addEventListener("click",function(){
rang10c.value=0;
rang11c.value=128;
rang12c.value=128;

inp10ca.value=0;
inp10cb.value=128;
inp10cc.value=128;

inp11ca.value="00";
inp11cb.value="80";
inp11cc.value="80";

inp12ca.value=180;
inp12cb.value=100;
inp12cc.value=25;

dis10c.innerHTML="RGB : rgb(0,128,128)";
dis11c.innerHTML="HEX : #008080";
dis12c.innerHTML="HSL : hsl(180,100%,25%)";

colormix.style.background="rgb(0,128,0)";
});
//...........
td17.addEventListener("click",function(){
rang10c.value=0;
rang11c.value=255;
rang12c.value=255;

inp10ca.value=0;
inp10cb.value=255;
inp10cc.value=255;

inp11ca.value="00";
inp11cb.value="ff";
inp11cc.value="ff";

inp12ca.value=180;
inp12cb.value=100;
inp12cc.value=50;

dis10c.innerHTML="RGB : rgb(0,255,255)";
dis11c.innerHTML="HEX : #00ffff";
dis12c.innerHTML="HSL : hsl(180,100%,50%)";

colormix.style.background="rgb(0,255,255)";
});
//...........
td18.addEventListener("click",function(){
rang10c.value=0;
rang11c.value=0;
rang12c.value=128;

inp10ca.value=0;
inp10cb.value=0;
inp10cc.value=128;

inp11ca.value="00";
inp11cb.value="00";
inp11cc.value="80";

inp12ca.value=200;
inp12cb.value=100;
inp12cc.value=25;

dis10c.innerHTML="RGB : rgb(0,0,128)";
dis11c.innerHTML="HEX : #000080";
dis12c.innerHTML="HSL : hsl(200,100%,25%)";

colormix.style.background="rgb(0,0,128)";
});
//...........
td19.addEventListener("click",function(){
rang10c.value=0;
rang11c.value=0;
rang12c.value=255;

inp10ca.value=0;
inp10cb.value=0;
inp10cc.value=225;

inp11ca.value="00";
inp11cb.value="00";
inp11cc.value="ff";

inp12ca.value=240;
inp12cb.value=100;
inp12cc.value=50;

dis10c.innerHTML="RGB : rgb(0,0,255)";
dis11c.innerHTML="HEX : #0000ff";
dis12c.innerHTML="HSL : hsl(240,100%,50%)";

colormix.style.background="rgb(0,0,255)";
});
//...........
td1a.addEventListener("click",function(){
rang10c.value=128;
rang11c.value=0;
rang12c.value=128;

inp10ca.value=128;
inp10cb.value=0;
inp10cc.value=128;

inp11ca.value="80";
inp11cb.value="00";
inp11cc.value="80";

inp12ca.value=300;
inp12cb.value=100;
inp12cc.value=25;

dis10c.innerHTML="RGB : rgb(128,0,128)";
dis11c.innerHTML="HEX : #800080";
dis12c.innerHTML="HSL : hsl(300,100%,25%)";

colormix.style.background="rgb(128,0,128)";
});
//...........
td1b.addEventListener("click",function(){
rang10c.value=255;
rang11c.value=0;
rang12c.value=255;

inp10ca.value=255;
inp10cb.value=0;
inp10cc.value=255;

inp11ca.value="ff";
inp11cb.value="00";
inp11cc.value="ff";

inp12ca.value=300;
inp12cb.value=100;
inp12cc.value=50;

dis10c.innerHTML="RGB : rgb(255,0,255)";
dis11c.innerHTML="HEX : #ff00ff";
dis12c.innerHTML="HSL : hsl(300,100%,50%)";

colormix.style.background="rgb(255,0,255)";
});
//...........
td1c.addEventListener("click",function(){
rang10c.value=0;
rang11c.value=0;
rang12c.value=0;

inp10ca.value=0;
inp10cb.value=0;
inp10cc.value=0;

inp11ca.value="00";
inp11cb.value="00";
inp11cc.value="00";

inp12ca.value=0;
inp12cb.value=0;
inp12cc.value=0;

dis10c.innerHTML="RGB : rgb(0,0,0)";
dis11c.innerHTML="HEX : #000000";
dis12c.innerHTML="HSL : hsl(0,0%,0%)";

colormix.style.background="rgb(0,0,0)";
});
//...........
td1d.addEventListener("click",function(){
rang10c.value=128;
rang11c.value=128;
rang12c.value=128;

inp10ca.value=128;
inp10cb.value=128;
inp10cc.value=128;

inp11ca.value="80";
inp11cb.value="80";
inp11cc.value="80";

inp12ca.value=0;
inp12cb.value=0;
inp12cc.value=50;

dis10c.innerHTML="RGB : rgb(128,128,128)";
dis11c.innerHTML="HEX : #808080";
dis12c.innerHTML="HSL : hsl(0,100%,50%)";

colormix.style.background="rgb(128,120,128)";
});
//...........
td1e.addEventListener("click",function(){
rang10c.value=192;
rang11c.value=192;
rang12c.value=192;

inp10ca.value=192;
inp10cb.value=192;
inp10cc.value=192;

inp11ca.value="c0";
inp11cb.value="c0";
inp11cc.value="c0";

inp12ca.value=0;
inp12cb.value=0;
inp12cc.value=75;

dis10c.innerHTML="RGB : rgb(192,192,192)";
dis11c.innerHTML="HEX : #c0c0c0";
dis12c.innerHTML="HSL : hsl(0,0%,75%)";

colormix.style.background="rgb(192,192,192)";
});
//...........
td1f.addEventListener("click",function(){
rang10c.value=255;
rang11c.value=255;
rang12c.value=255;

inp10ca.value=255;
inp10cb.value=255;
inp10cc.value=255;

inp11ca.value="ff";
inp11cb.value="ff";
inp11cc.value="ff";

inp12ca.value=0;
inp12cb.value=0;
inp12cc.value=100;

dis10c.innerHTML="RGB : rgb(255,255,255)";
dis11c.innerHTML="HEX : #ffffff";
dis12c.innerHTML="HSL : hsl(0,0%,100%)";

colormix.style.background="rgb(255,255,255)";
});
icol1=0;
navcol10c.addEventListener("click",function(){ icol1++;
   if (icol1%2==1){
       navcol10c.style.left="0%";
       display11c.style.left="-92%"
   }else{
       navcol10c.style.left="93%";
       display11c.style.left="1%"
   }
    
});

};






