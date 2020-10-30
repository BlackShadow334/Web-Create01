//navigation...............................
var h=1;
function history(){
    h++;
    if (h%2==0){
        inp3.style="height:65vh;";
        inf.style="height:0;";
    }
    else {
    inp3.style="height:0;";
    inf.style="height:0;";
    };
};
var a=1;
function abo(){
    a++;
    if (a%2==0){
        inf.style="height:100%;";
        inp3.style="height:0;";
    }
    else {
    inf.style="height:0;";
    inp3.style="height:0;";
    };
};
//nav end..................................
setInterval(noxtra,2000);
//in the name of calculator................!
function num(val){
    inp1.value+=val;
    mor15();
};
function clr(){
    inp1.value="";
    inp2.value="⁠";
};
function equl(){
    preopr();
    mor15();
    inp2.value+=inp1.value;
    inp3.innerHTML+=inp2.value +"=";
    inp2.value=eval(inp2.value);
    inp3.innerHTML+=inp2.value+"<br>";
    inp1.value=inp2.value;
    
};
function goup(){
 if (inp1.value=="+"){
        inp2.value="0"+inp1.value;
        inp1.value="";
    }
  else if (inp1.value=="-"){
        inp2.value="0"+inp1.value;
        inp1.value="";
    }
  else if (inp1.value=="*"){
        inp2.value="0"+inp1.value;
        inp1.value="";
    }
  else if (inp1.value=="/"){
        inp2.value="0"+inp1.value;
        inp1.value="";
    }
  else if (inp1.value=="%"){
        inp2.value='0'+inp1.value;
        inp1.value="";
    } 
  else{
    inp2.value=inp1.value;
    inp1.value="";
  };
};
function alclr(){
    inp3.innerHTML="⁠";
    clr();
};
function bac(){
    var ba= inp1.value;
 inp1.value=ba.substr(0,inp1.value.length-1);
};
function preopr(){
    if (inp1.value.length==0){
        inp1.value=0;
    };
};
function pt(){
    
};
function mor15(){
    if(inp1.value.length>=15){
      inp1.value=""
    }
};
function noxtra(){
    if(inp1.value==""){
        inp1.value="";
    }
    
};

//........................................