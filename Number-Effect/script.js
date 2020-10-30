/*
Version : 1.1
updated on : 24 jan, 2020
Created by : BLaCK ShaDow
Released on : 23 jan, 2020
For any suggestions please comment.
*/

//calls fun on start..........
  btn0.addEventListener("click",clic);
  

function clic(){
    
    strt();
    btn0.style.display="none";
    
    
};
function vivr(){navigator.vibrate(100)};
//............
//create..multiple div with 1 fun...........
var balno=0;
function strt(){
balno=45;
    for(i=1;balno>=i;i++){
      bal.innerHTML+="<div id='b"+i+"' class='b'>"+i+"</div>";
      nom='b'+i;
      nom.style="text-align:center;";
    };
    document.removeEventListener("clic",clic);
};
//..........
document.removeEventListener("clic",clic);
//managing where to move .........
setInterval(mangr,1000);
function mangr(){
    for (i=1;balno>=i;i++){
   x= document.getElementById('b'+i);
    x.style="top:"+rndm("top")+'vh;'+ 'left:'+rndm('left')+"%;"+"font-size:"+rndm("size")+'em;'+"font-weight:"+rndm("weight")+';'+ 'right:'+rndm('right')+"%;"+"bottom:"+rndm("bottom")+'vh;'+"color:"+rndm('color')+";" +"height:"+rndm("height")+"vh;"+"width:"+rndm('width')+"px;";
};
};
//.................
//getting random location..............
var loc;
function rndm(xy){
    if (xy=='top'){
    loc= Math.ceil(Math.random()*98);
    };
    if (xy=='bottom'){
    loc= Math.ceil(Math.random()*98);
    };
    if (xy=='left'){
        loc= Math.ceil(Math.random()*98);
    }
    if (xy=='size'){
    loc= Math.ceil(Math.random()*1.3);
    };
    if (xy=='weight'){
    loc= Math.ceil(Math.random()*900);
    };
    if (xy=='right'){
        loc= Math.ceil(Math.random()*98);
    }
    if (xy=='color'){
        ba=Math.ceil(Math.random()*3);
        if (ba==1){
            loc="#0f0";
            
        }
        if (ba==2){
            loc="#f00";
            
        }
        if (ba==3){loc="white";}
    };
    if (xy=='heigh'){
        loc= Math.ceil(Math.random()*98);
    };
    if (xy=='width'){
        loc= Math.ceil(Math.random()*98);
    };
    return loc;
}