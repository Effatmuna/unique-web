const services = document.querySelector(".services");
const dropdown = document.querySelector(".dropdown");
const ul = document.querySelector(".ul");
const navbar=document.querySelector("main");
const navitems = document.querySelector(".navitems");
const menu = document.querySelector(".menu");
services.onmouseover=()=>{
    dropdown.style.display="grid";
    let width=window.matchMedia("max-width:910px");

       /*dropdown.style.marginTop="-50px";*/
       dropdown.style.transform="rotateY(360deg)";
    
    
};

navbar.onmouseover=()=>{
    
    dropdown.style.transform="rotateX(270deg)";
  
}
var count2=0;
menu.onclick=()=>{
    count2=count2+1;
    navitems.style.display="grid";

    if(count2>1){
        navitems.style.display="none";
    count2=0;
    }


}


