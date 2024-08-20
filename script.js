
const menuBtn = document.querySelector('.menu');
const navLinks = document.querySelector(".nav-links");
const navSection = document.querySelector(".nav-section");

menuBtn.addEventListener('click', () => {
    const navSectionHeight = navSection.getBoundingClientRect().height;
    const navLinksHeight = navLinks.getBoundingClientRect().height;

     if(navSectionHeight === 0){
        navSection.style.height = `${navLinksHeight}px`;
     }
     else{
        navSection.style.height = 0;
     }
     console.log("hi");
     
})

const topLink = document.querySelector('.top-link');

// top scroll
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 700){
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }
})

