const $hamburger = document.querySelector('.hamburger');
const $nav_menu = document.querySelector('.nav_menu');
const $nav_user = document.querySelector('.nav_user');
const $login = document.querySelector('#login');
const $form = document.querySelector('#form');

$form.addEventListener('submit',(event)=>{
    event.preventDefault();
})
$hamburger.addEventListener('click', () =>{
    $nav_menu.classList.toggle('active');
    $nav_user.classList.toggle('active');
})

$login.addEventListener('click', ()=>{
    console.log('클릭');
})