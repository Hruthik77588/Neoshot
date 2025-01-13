// on scroll function

function navMenu(){
    let navBar=document.querySelector('.navbar-sicky');
    let scrollTopButton=document.querySelector('#scrollUp');

    window.onscroll=function (){
        var scroll=document.documentElement.scrollTop;
        if(scroll >=120){
            navBar.classList.add("navbar-sticky-moved-up");
        }else{
            navBar.classList.remove("navbar-sticky-moved-up");
        }

        // apply transition
        if(scroll >=250){
            navBar.classList.add(".navbar-sticky-transitioned");
            scrollTopButton.classList.add("scrollActive");
        }else{
            navBar.classList.remove(".navbar-sticky-transitioned");
            scrollTopButton.classList.remove("scrollActive");
        }

        // sticky on
        if(scroll >=500){
            navBar.classList.add(".navbar-sticky-on");
           
        }else{
            navBar.classList.remove(".navbar-sticky-on");
        }
    }
}
navMenu();