let hisob=document.getElementById('m');

function btn(n){
    hisob.value=hisob.value+n.value;
}

function natija(){
    hisob.value=eval(hisob.value);

}

function dlt(){
    hisob.value="";

}