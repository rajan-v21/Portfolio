/*================= MENU SHOW Y HIDDEN =====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*============= MENU SHOW ============*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*============ MENU HIDDEN ============*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); 
    })
}

/*============ REMOVE MENU MOBILE ============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById(nav-menu)

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============ ACCORDION SKILLS ============*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.getElementsByClassName('skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener("click", toggleSkills);
})

/*============ QUALIFICATION TABS ============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]') 

tabs.forEach(tabs => {
    tabs.addEventListener('click', () =>{
        const target = document.querySelector(tabs.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tabs =>{
            tabs.classList.remove('qualification__active')
        })
        tabs.classList.add('qualification__active')
    })
})

/*============ SERVICE MODAL ============*/

/*============ QUALIFICATION ============*/
