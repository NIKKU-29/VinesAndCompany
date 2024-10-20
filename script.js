const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function page3animation(){
    var elemC=document.querySelector("#elem-container")
var fixed=document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })

}
function links(){
    document.querySelector('#name a').addEventListener('click', function(event) {
        event.preventDefault();
        window.open(this.href, '_blank');
    });

    // Handle click on LinkedIn link
    document.querySelector('#linked a').addEventListener('click', function(event) {
        event.preventDefault();
        window.open(this.href, '_blank');
    });

    // Handle click on GitHub link
    document.querySelector('#git a').addEventListener('click', function(event) {
        event.preventDefault();
        window.open(this.href, '_blank');
    });
}

function bootlefade(){
    document.addEventListener('DOMContentLoaded', function() {
        const pages = document.querySelectorAll('.page');
        let currentPageIndex = 0;
    
        function showNextPage() {
            pages[currentPageIndex].classList.add('hidden');
            currentPageIndex = (currentPageIndex + 1) % pages.length;
            pages[currentPageIndex].classList.remove('hidden');
        }
    
        setInterval(showNextPage, 7000); // Change page every 7 seconds
    
        // Handle click on email link
        
    });

}


document.addEventListener('DOMContentLoaded', function() {
    const footerEnd = document.querySelector('#footer-end');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerEnd.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(footerEnd);
});




function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        
      });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
swiperAnimation();
page3animation();
bootlefade();
menuAnimation();
loaderAnimation();
links();

