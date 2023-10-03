const $hamburger = document.querySelector('.hamburger');
const $nav_menu = document.querySelector('.nav_menu');
const $nav_user = document.querySelector('.nav_user');
const $openModal = document.querySelector('#openModal');
const $modal = document.querySelector('.modal');
const $form = document.querySelector('#form');
const $exit = document.querySelector('#exit');

$form.addEventListener('submit',(event)=>{
    event.preventDefault();
})
$hamburger.addEventListener('click', () =>{
    $nav_menu.classList.toggle('active');
    $nav_user.classList.toggle('active');
})

$openModal.addEventListener('click', ()=>{
    $modal.classList.remove('hidden');
})

$exit.addEventListener('click', ()=>{
    $modal.classList.add('hidden');
})