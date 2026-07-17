/*======================================
FOOTER ANIMATION
======================================*/

const footer = document.querySelector(".footer-section");

const footerObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            footer.classList.add("footer-show");

        }

    });

},{

    threshold:0.2

});

footerObserver.observe(footer);

