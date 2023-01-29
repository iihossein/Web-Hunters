let menu = document.querySelector(".menu");
let menubtn = document.querySelector(".header-icon");
let menubtnicon = document.querySelector(".header-icon i");

menubtn.addEventListener("click", function () {
    if (menubtnicon.classList.contains("fa-bars")) {
        menu.style.display = "block"
        menubtnicon.classList = "fa fa-times" 
        
    }else{
        menu.style.display = "none"
        menubtnicon.classList = "fa fa-bars" 

    }
})