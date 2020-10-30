$(document).ready(function(){

//dragging--and--rotating--------------------
/* function changes value of xnot and ynot
and due to final - initial it rotates in 
required direction */
    xnot = pac.style.left;
    ynot = pac.style.top;

function touch(ev){
    ev.preventDefault();
    
    x = ev.touches[0].clientX;
    y = ev.touches[0].clientY;
    
    w = $("#pac").width();
    h = $("#pac").height();
    
    x = x - w/2;
    y = y - h/2;
    
     dx = x - xnot;
     dy = y - ynot;
     
     xnot = x;
     ynot = y;
     
if(Math.abs(dx) > Math.abs(dy)){
    if(dx > 0){
        pac.style="left:"+x+"px;top:"+
        y+"px;transform:rotate(135deg)";
    }else{
        pac.style="left:"+x+"px;top:"+
        y+"px;transform:rotate(-45deg)";
    }
}else{
    if(dy > 0){
        pac.style="left:"+x+"px;top:"+
        y+"px;transform:rotate(-135deg)";
    }else{
        pac.style="left:"+x+"px;top:"+
        y+"px;transform:rotate(45deg)";
    }
};
};

pac.addEventListener("touchmove",touch);
pac.addEventListener("tochmove",touch);

//------------------------
setInterval(bullet,2000)
bulletn=0;
function bullet(){
    bulletn++;
    rand1 = Math.ceil(Math.random()*4);
    rand2 = Math.round(Math.random()*100);
    
    if(rand1==1){
    area.innerHTML
    +="<div class='bullets'id='bul"+bulletn
    +"' style='left:"+rand2+"%;top:0%;'></div>";
    
    }if(rand1==2){
    area.innerHTML
    +="<div class='bullets'id='bul"+bulletn
    +"' style='left:100%;top:"+
    rand2+"%;'></div>";
    }if(rand1==3){
    area.innerHTML
    +="<div class='bullets'id='bul"+bulletn
    +"' style='left:"+rand2+"%;top:100%;'></div>";
    }if(rand1==4){
    area.innerHTML
    +="<div class='bullets'id='bul"+bulletn
    +"'  style='left:0%;top:"+rand2+"%;'></div>";
    }
    
//    move(bulletn);
};
/*
function move(idnum){
    id= document.getElementById("bul"+idnum);
    
    idx= id.style.left;
    idx= idx.substr(0,(idx.length - 1));
    idy= id.style.top;
    idy= idy.substr(0,(idy.length - 1));
    
//    console.log(idx+","+idy);
    
    if(idy=="0"){
    i1=0;
    setInterval(function(){
        id.style="top:"+i1 +"%;";
    },10);
    }if(idx=="100"){
//        console.log("yes left calc(100% - 1.5em)");
    }if(idy=="100"){
//        console.log("yes top calc(100% - 1.5em);");
    }if(idx=="0"){
//        console.log("yes left 0%");
    };
};
*/
});