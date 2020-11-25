'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    // console.log(window.scrollY);
    // console.log(`navbarHeight :${navbarHeight}`);
    if (navbarHeight<window.scrollY){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
    navbarMenu.classList.remove('checked');
    navTog.classList.remove('checked');
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
    // target.classList.add('active');
});

// navbar togglebtn
const navTog = document.querySelector('.navbar__toggle-btn');
navTog.addEventListener('click',()=> {
    navTog.classList.toggle('checked');
    navbarMenu.classList.toggle('checked');
});

// Handle scrolling when tapping on the contact me menu
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', (event)=> {
    // console.log(event.target.dataset.link);
    scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1-window.scrollY/homeHeight;
});

// arrow btn
const arrow = document.querySelector('.arrow--up');
document.addEventListener('scroll', () => {
    if (window.scrollY>homeHeight/2){
    arrow.classList.add('arrow-pop');
    } else {
    arrow.classList.remove('arrow-pop');
    }
});
arrow.addEventListener('click',()=>{
scrollIntoView('#home');
});

// Work Filter
const categoryBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
// console.log(projects);
categoryBtnContainer.addEventListener('click',(event)=>{
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    // console.log('=========');
    // console.log(filter);
    // console.log('=========');
    if (filter == null){
        return;
    }

    // Remove selection from previous item and select the new one
    const selected = document.querySelector('.category__btn.selected');
    selected.classList.remove('selected');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project) =>{
            // console.log(project.dataset.type);
            if (filter === 'all' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300);
});

// ScrollIntoVIEW function
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

// Scroll Nav menu Activation
const sectionIds = ['#home','#about','#skills','#work','#testimonials','#contact'];
const section = sectionIds.map(id => document.querySelector(id));
const navMenu = sectionIds.map(id=> document.querySelector(`[data-link="${id}"]`))

//Dowon'sVersion

const observerOption = {
    root:null,
    rootMargin: '-40% 0% -60% 0%',
    threshold:0
};
function observerCallback(entries,observer) {
    entries.forEach(entry => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        if (entry.isIntersecting){
            navMenu[index].classList.add('active');
        } else{
            navMenu[index].classList.remove('active');
        }
    })
}

// 모든 섹션 요소들과 메뉴아이템들을 가져온다.
// IntersectionObserver를 이용해서 모든 섹션을 관찰한다.
// 보여지는 섹션에 해당 메뉴아이템을 활성시킨디ㅏ.

// const observerOption = {
//         root:null,
//         rootMargin: '0px',
//         threshold: 0
// };

// let selectItem = navMenu[0];

// function observerCallback(entries,observer) {
//     console.log(entries);
//     entries.forEach(entry => {
//         if (!entry.isIntersecting && entry.intersectionRatio>0){
//             const index = sectionIds.indexOf(`#${entry.target.id}`);
//             let selectedIndex;
//             if (entry.boundingClientRect.y <0) {
//                 selectedIndex = index +1;
//             } else {
//                 selectedIndex = index -1;
//             }
//             const navItem = navMenu[selectedIndex];
//             selectItem.classList.remove('active');
//             selectItem = navItem
//             selectItem.classList.add('active');
//         };
//     });
// }

const observer = new IntersectionObserver(observerCallback,observerOption);
section.forEach(section => observer.observe(section));
