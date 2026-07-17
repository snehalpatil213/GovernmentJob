/*===========================
 Sticky Header
===========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*===========================
 Active Menu
===========================*/

const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


/*===========================
 Search Button Animation
===========================*/

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("mouseenter", () => {

    searchBtn.style.transform = "scale(1.08)";

});

searchBtn.addEventListener("mouseleave", () => {

    searchBtn.style.transform = "scale(1)";

});


/*===========================
 Login Button Effect
===========================*/

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("mouseenter", () => {

    loginBtn.style.transform = "translateY(-3px)";

});

loginBtn.addEventListener("mouseleave", () => {

    loginBtn.style.transform = "translateY(0px)";

});


const latestJobs = new Swiper(".latestJobsSlider",{

    slidesPerView:5,

    spaceBetween:25,

    loop:true,

    speed:700,

    autoplay:{

        delay:3000,

        disableOnInteraction:false,

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",

    },

    breakpoints:{

        0:{
            slidesPerView:1,
        },

        576:{
            slidesPerView:2,
        },

        768:{
            slidesPerView:3,
        },

        992:{
            slidesPerView:4,
        },

        1400:{
            slidesPerView:5,
        }

    }

});


/*=========================================
MOBILE MENU
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const closeMenu = document.querySelector(".close-menu");

menuToggle.addEventListener("click",()=>{

    navbar.classList.add("active");

});

closeMenu.addEventListener("click",()=>{

    navbar.classList.remove("active");

});

/* Mobile Dropdown */

document.querySelectorAll(".dropdown > a").forEach(item=>{

    item.addEventListener("click",(e)=>{

        if(window.innerWidth<=992){

            e.preventDefault();

            item.parentElement.classList.toggle("active");

        }

    });

});

/*======================================
LATEST JOB SLIDER
======================================*/

const latestJobSlider = new Swiper(".latest-job-slider", {

    loop: true,

    speed: 700,

    spaceBetween: 25,

    grabCursor: true,

    centeredSlides: false,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false,

        pauseOnMouseEnter: true,

    },

    navigation: {

        nextEl: ".latest-job-next",

        prevEl: ".latest-job-prev",

    },

    breakpoints: {

        0: {

            slidesPerView: 1,

            spaceBetween: 15,

        },

        576: {

            slidesPerView: 1.2,

            spaceBetween: 18,

        },

        768: {

            slidesPerView: 2,

            spaceBetween: 20,

        },

        992: {

            slidesPerView: 3,

            spaceBetween: 22,

        },

        1200: {

            slidesPerView: 4,

            spaceBetween: 24,

        },

        1400: {

            slidesPerView: 5,

            spaceBetween: 25,

        }

    }

});


/*=========================================
FEATURED RECRUITMENT ANIMATION
=========================================*/

const featuredCards = document.querySelectorAll(
".featured-job-large-card, .featured-job-small-card"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("featured-show");

        }

    });

},{
    threshold:.2
});

featuredCards.forEach(card=>{

    observer.observe(card);

});

/*======================================
BROWSE BY DEPARTMENT
======================================*/

const departmentData = {

    defence:{

        label:"DEFENCE JOBS",

        title:"185 Active Jobs",

        description:"Explore latest Defence opportunities across Army, Navy, Air Force, BSF, CRPF and other organizations.",

        vacancies:"185",

        week:"08",

        applicants:"32K+",

        recruiters:["Army","Navy","Air Force","BSF","CRPF","+ More"],

        button:"Explore Defence Jobs",

        icon:"fa-solid fa-shield-halved"

    },

    teaching:{

        label:"TEACHING JOBS",

        title:"214 Active Jobs",

        description:"Latest Teacher recruitment from Kendriya Vidyalaya, NVS and State Education Departments.",

        vacancies:"214",

        week:"14",

        applicants:"28K+",

        recruiters:["KVS","NVS","DHE","ZP","Schools","+ More"],

        button:"Explore Teaching Jobs",

        icon:"fa-solid fa-graduation-cap"

    },

    bank:{

        label:"BANK JOBS",

        title:"256 Active Jobs",

        description:"Explore latest Banking opportunities across top government organizations.",

        vacancies:"256",

        week:"12",

        applicants:"45K+",

        recruiters:["SBI","RBI","NABARD","BOB","BOI","+ More"],

        button:"Explore Bank Jobs",

        icon:"fa-solid fa-building-columns"

    },

    health:{

        label:"HEALTH JOBS",

        title:"168 Active Jobs",

        description:"Government Health Department recruitment including AIIMS, ESIC and NHM.",

        vacancies:"168",

        week:"06",

        applicants:"18K+",

        recruiters:["AIIMS","NHM","ESIC","DHS","Medical","+ More"],

        button:"Explore Health Jobs",

        icon:"fa-solid fa-heart-pulse"

    },

    ssc:{

        label:"SSC JOBS",

        title:"322 Active Jobs",

        description:"SSC recruitment notifications for CGL, CHSL, MTS, GD and JE.",

        vacancies:"322",

        week:"16",

        applicants:"60K+",

        recruiters:["SSC","CGL","CHSL","MTS","GD","+ More"],

        button:"Explore SSC Jobs",

        icon:"fa-solid fa-file-lines"

    },

    upsc:{

        label:"UPSC JOBS",

        title:"145 Active Jobs",

        description:"Civil Services, Engineering Services and other UPSC examinations.",

        vacancies:"145",

        week:"05",

        applicants:"24K+",

        recruiters:["UPSC","IFS","IAS","IPS","IES","+ More"],

        button:"Explore UPSC Jobs",

        icon:"fa-solid fa-scale-balanced"

    },

    forest:{

        label:"FOREST JOBS",

        title:"98 Active Jobs",

        description:"Forest Department recruitment for Rangers, Guards and Wildlife staff.",

        vacancies:"98",

        week:"04",

        applicants:"11K+",

        recruiters:["Forest","Wildlife","Ranger","Guard","Survey","+ More"],

        button:"Explore Forest Jobs",

        icon:"fa-solid fa-tree"

    }

};

const items = document.querySelectorAll(".browse-department-item");
/*======================================
DEPARTMENT SWITCH
======================================*/

const label = document.querySelector(".browse-department-label");
const title = document.querySelector(".browse-department-center h3");
const description = document.querySelector(".browse-department-center p");

const button = document.querySelector(".browse-department-button a");

const recruiters = document.querySelector(".browse-department-tags");

const circle = document.querySelector(".browse-department-circle i");

const vacancy = document.querySelectorAll(
".browse-department-stat strong"
);

items.forEach(item=>{

    item.addEventListener("click",()=>{

        /* Remove Active */

        items.forEach(card=>{

            card.classList.remove("active");

            card.querySelector(".browse-department-icon")
            .classList.remove("active-big");

        });

        /* Add Active */

        item.classList.add("active");

        item.querySelector(".browse-department-icon")
        .classList.add("active-big");

        /* Current Department */

        const department =
        departmentData[item.dataset.department];

        /* Change Content */

        label.innerHTML =
        department.label;

        title.innerHTML =
        department.title;

        description.innerHTML =
        department.description;

        button.innerHTML =
        `${department.button}
        <i class="fa-solid fa-arrow-right"></i>`;

        /* Change Icon */

        circle.className =
        department.icon;

        /* Stats */

        vacancy[0].innerHTML =
        department.vacancies;

        vacancy[1].innerHTML =
        department.week;

        vacancy[2].innerHTML =
        department.applicants;

        /* Recruiters */

        recruiters.innerHTML =
        "<strong>Top Recruiters :</strong>";

        department.recruiters.forEach(name=>{

            const span =
            document.createElement("span");

            span.innerHTML=name;

            recruiters.appendChild(span);

        });

        /* Animation */

        const card =
        document.querySelector(
        ".browse-department-content"
        );

        card.classList.remove("department-animation");

        void card.offsetWidth;

        card.classList.add("department-animation");

    });

});


/*=========================================
QUALIFICATION DATA
=========================================*/

const qualificationData = {

    "10th":{

        title:"10th Pass",

        jobs:"198 Active Jobs",

        description:"Latest Government Jobs for 10th Pass candidates across India.",

        vacancies:"198",

        today:"12",

        applicants:"28K+",

        recruiters:["Railway","Post Office","Police","SSC","BSF","+ More"],

        icon:"fa-solid fa-school",

        button:"Explore 10th Jobs"

    },

    "12th":{

        title:"12th Pass",

        jobs:"225 Active Jobs",

        description:"Discover the latest 12th Pass government job opportunities.",

        vacancies:"225",

        today:"18",

        applicants:"35K+",

        recruiters:["SSC","Indian Army","Navy","Air Force","Railway","+ More"],

        icon:"fa-solid fa-book-open",

        button:"Explore 12th Jobs"

    },

    "graduation":{

        title:"Graduation",

        jobs:"325 Active Jobs",

        description:"Explore top Government Jobs for Graduates.",

        vacancies:"325",

        today:"24",

        applicants:"48K+",

        recruiters:["SBI","IBPS","UPSC","SSC","ISRO","+ More"],

        icon:"fa-solid fa-graduation-cap",

        button:"Explore Graduate Jobs"

    },

    "engineering":{

        title:"Engineering",

        jobs:"278 Active Jobs",

        description:"Engineering recruitment from PSU, ISRO, DRDO and Railways.",

        vacancies:"278",

        today:"15",

        applicants:"31K+",

        recruiters:["ISRO","DRDO","BHEL","BEL","HAL","+ More"],

        icon:"fa-solid fa-laptop-code",

        button:"Explore Engineering Jobs"

    },

    "mba":{

        title:"MBA",

        jobs:"156 Active Jobs",

        description:"Management jobs in Banking and Government organizations.",

        vacancies:"156",

        today:"8",

        applicants:"12K+",

        recruiters:["SBI","LIC","SEBI","RBI","NABARD","+ More"],

        icon:"fa-solid fa-briefcase",

        button:"Explore MBA Jobs"

    },

    "mca":{

        title:"MCA",

        jobs:"142 Active Jobs",

        description:"IT and Software jobs for MCA graduates.",

        vacancies:"142",

        today:"7",

        applicants:"14K+",

        recruiters:["NIC","CDAC","ISRO","DRDO","BEL","+ More"],

        icon:"fa-solid fa-computer",

        button:"Explore MCA Jobs"

    }

};

/*=========================================
QUALIFICATION SWITCHER
=========================================*/

const qualificationCards =
document.querySelectorAll(".qualification-card");

const qualificationTitle =
document.querySelector(".qualification-title");

const qualificationJobs =
document.querySelector(".qualification-center-circle span");

const qualificationDescription =
document.querySelector(".qualification-description");

const qualificationButton =
document.querySelector(".qualification-btn");

const qualificationIcon =
document.querySelector(".qualification-center-circle i");

const qualificationStats =
document.querySelectorAll(".qualification-stat strong");

const qualificationTags =
document.querySelector(".qualification-tags");

qualificationCards.forEach(card=>{

    card.addEventListener("click",()=>{

        /* Active Card */

        qualificationCards.forEach(item=>{

            item.classList.remove("active");

        });

        card.classList.add("active");

        /* Data */

        const data =
        qualificationData[card.dataset.id];

        if(!data) return;

        /* Title */

        qualificationTitle.innerHTML =
        data.title;

        document.querySelector(
        ".qualification-center-circle h3"
        ).innerHTML = data.title;

        /* Jobs */

        qualificationJobs.innerHTML =
        data.jobs;

        /* Description */

        qualificationDescription.innerHTML =
        data.description;

        /* Icon */

        qualificationIcon.className =
        data.icon;

        /* Stats */

        qualificationStats[0].innerHTML =
        data.vacancies;

        qualificationStats[1].innerHTML =
        data.today;

        qualificationStats[2].innerHTML =
        data.applicants;

        /* Button */

        qualificationButton.innerHTML =

        `${data.button}
        <i class="fa-solid fa-arrow-right"></i>`;

        /* Recruiters */

        qualificationTags.innerHTML="";

        data.recruiters.forEach(company=>{

            const span =
            document.createElement("span");

            span.innerHTML = company;

            qualificationTags.appendChild(span);

        });

        /* Animation */

        document
        .querySelector(".qualification-right")
        .classList.remove("qualificationFade");

        void document
        .querySelector(".qualification-right")
        .offsetWidth;

        document
        .querySelector(".qualification-right")
        .classList.add("qualificationFade");

    });

});




/*=========================================
LATEST NOTIFICATIONS TIMELINE ANIMATION
=========================================*/

const notificationItems = document.querySelectorAll(
".notification-timeline-item"
);

const notificationObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("notification-show");

        }

    });

},{
    threshold:0.15
});

notificationItems.forEach(item=>{

    notificationObserver.observe(item);

});

/*======================================
LATEST UPDATES ANIMATION
======================================*/

const latestUpdateCards = document.querySelectorAll(".latest-update-card");

const latestUpdateObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("latest-update-show");

        }

    });

}, {
    threshold: 0.2
});

latestUpdateCards.forEach((card) => {

    latestUpdateObserver.observe(card);

});


/*======================================
ITEM HOVER EFFECT
======================================*/

const latestUpdateItems = document.querySelectorAll(".latest-update-item");

latestUpdateItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateX(10px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateX(0px)";

    });

});

/*======================================
STUDY ZONE ANIMATION
======================================*/

const studyCards = document.querySelectorAll(".study-zone-card");

const studyObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("study-show");

        }

    });

}, {

    threshold:0.2

});

studyCards.forEach((card)=>{

    studyObserver.observe(card);

});


/*======================================
ITEM HOVER EFFECT
======================================*/

const studyItems = document.querySelectorAll(".study-zone-item");

studyItems.forEach((item)=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="translateX(10px)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="translateX(0px)";

    });

});


/*======================================
BUTTON RIPPLE EFFECT
======================================*/

const studyLinks=document.querySelectorAll(".study-zone-link");

studyLinks.forEach((btn)=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transition=".35s";

    });

});


/*======================================
CARD TILT EFFECT
======================================*/

studyCards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*6;
        const rotateX=((rect.height/2-y)/rect.height)*6;

        card.style.transform=
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});

/*=========================================
EXAM RESOURCES ACCORDION
=========================================*/

const accordions = document.querySelectorAll(".exam-accordion");

accordions.forEach((accordion) => {

    const header = accordion.querySelector(".exam-accordion-header");
    const icon = accordion.querySelector(".exam-toggle i");

    header.addEventListener("click", () => {

    
        if (accordion.classList.contains("active")) {

            accordion.classList.remove("active");
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");

            return;
        }

        
        accordions.forEach((item) => {

            item.classList.remove("active");

            const itemIcon = item.querySelector(".exam-toggle i");

            itemIcon.classList.remove("fa-minus");
            itemIcon.classList.add("fa-plus");

        });

        // Current Open
        accordion.classList.add("active");

        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");

    });

});
/*======================================
ABOUT US ANIMATION
======================================*/

const aboutSection = document.querySelector(".about-section");
const aboutCenter = document.querySelector(".about-center");
const orbitItems = document.querySelectorAll(".orbit-item");

/*======================================
SCROLL REVEAL
======================================*/

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            aboutSection.classList.add("about-show");

        }

    });

},{
    threshold:0.2
});

aboutObserver.observe(aboutSection);


/*======================================
FLOATING EFFECT
======================================*/

orbitItems.forEach((item,index)=>{

    item.style.animationDelay=`${index * .3}s`;

});


/*======================================
CENTER CARD HOVER
======================================*/

aboutCenter.addEventListener("mouseenter",()=>{

    aboutCenter.style.transform="translate(-50%,-50%) scale(1.05)";

});

aboutCenter.addEventListener("mouseleave",()=>{

    aboutCenter.style.transform="translate(-50%,-50%) scale(1)";

});


/*======================================
ORBIT ITEM HOVER
======================================*/

orbitItems.forEach((item)=>{

    item.addEventListener("mouseenter",()=>{

        item.style.boxShadow="0 20px 40px rgba(249,115,22,.25)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.boxShadow="0 12px 35px rgba(0,0,0,.08)";

    });

});

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


/*======================================
BACK TO TOP
======================================*/

const backToTop=document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*======================================
CTA SECTION ANIMATION
======================================*/

const ctaSection = document.querySelector(".cta-section");
const ctaStats = document.querySelectorAll(".cta-stat h3");

const ctaObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            ctaSection.classList.add("cta-show");

            startCounter();

            ctaObserver.unobserve(entry.target);

        }

    });

}, {

    threshold:0.3

});

ctaObserver.observe(ctaSection);


/*======================================
COUNTER ANIMATION
======================================*/

function startCounter(){

    ctaStats.forEach((counter)=>{

        const text = counter.innerText;

        if(text.includes("×")) return;

        const target = parseInt(text.replace(/\D/g,""));

        let count = 0;

        const speed = Math.ceil(target/80);

        const updateCounter = ()=>{

            count += speed;

            if(count < target){

                counter.innerHTML = count + "+";

                requestAnimationFrame(updateCounter);

            }

            else{

                counter.innerHTML = target + "+";

            }

        }

        updateCounter();

    });

}


/*======================================
BUTTON RIPPLE EFFECT
======================================*/

document.querySelectorAll(".cta-btn-primary,.cta-btn-outline").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});


/*======================================
FLOATING STATS
======================================*/

document.querySelectorAll(".cta-stat").forEach((card,index)=>{

    card.style.animationDelay=`${index * .2}s`;

});



/*======================================
CURSOR GLOW
======================================*/

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

document.addEventListener("mouseleave",()=>{

    glow.style.opacity="0";

});

document.addEventListener("mouseenter",()=>{

    glow.style.opacity=".8";

});