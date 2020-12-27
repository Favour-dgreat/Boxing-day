let isOpen=false;
function toggleNavBar(){
    console.log("clicked");
    if(isOpen){
        isOpen=false;
        document.getElementById("header-options").classList.remove("open-nav");
        document.getElementById("header-options").classList.add("close-nav");
    }else{
        isOpen=true;
        document.getElementById("header-options").classList.remove("close-nav");
        document.getElementById("header-options").classList.add("open-nav");

    }
}
document.getElementById("nav-toggle").addEventListener("click",toggleNavBar);
document.getElementById("addBook").addEventListener("click",toggleNavBar);
document.getElementById("viewBooks").addEventListener("click",toggleNavBar);