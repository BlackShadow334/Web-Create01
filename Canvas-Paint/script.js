
$(document).ready(function(){
$("#navslide0").slideUp();
$("#navslide1").slideUp();

function clear(){
    area.innerHTML="";
};

//creating touch function...................
function touch(ev){
    ev.preventDefault();
    navinp1.blur();
    
    h=navinp0.value;
    col=navinp1.value;
    var areav = document.getElementById("area");
    
for(let i=0;i<ev.touches.length;i++){
    
    x = ev.touches[i].clientX;
    y = ev.touches[i].clientY;
    x = x-h/2;
    y = y-h/2;
    areav.innerHTML+="<div  style='position:absolute;background:"+col+";left:"+x+"px;top:"+y+"px;height:"+h+"px;width:"+h+"px;border-radius:35%'></div>";
    };
};
//...........................................

//touchevents................................
var areat = document.getElementById("areatouch");

areat.addEventListener("touchstart",touch,true);
areat.addEventListener("touchmove",touch,true);
areat.addEventListener("click",touch,true);
areat.addEventListener("touchend",touch,true);
//.........................................

//navevents............................
$("#navbtn0").on("click",function(){
    $("#navslide0").slideToggle();
    $("#navslide1").slideUp();
});
$("#navbtn1").on("click",function(){
    $("#navslide1").slideToggle();
    $("#navslide0").slideUp();
});
navbtn2.addEventListener("click",clear);
$("#navbtn").on("click",function(){
    $("#nav").slideToggle();
});




});

