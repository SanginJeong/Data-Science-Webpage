const $hamburger = document.querySelector('.hamburger');
const $nav_menu = document.querySelector('.nav_menu');
const $nav_user = document.querySelector('.nav_user');
const $openModal = document.querySelector('#openModal');
const $modal = document.querySelector('.modal');
const $form = document.querySelector('#form');
const $exit = document.querySelector('#exit');
const $voteBtn = document.querySelectorAll('#participate, #absent');
const $show_sum = document.querySelector('#show_sum');
const $show_participate = document.querySelector('#show_participate');
const $show_absent = document.querySelector('#show_absent');
const $upload_vote = document.querySelector('#upload_vote');
const $delete_vote = document.querySelector('#delete_vote');

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

let participate = 0;
let absent = 0;
let sum= 0;
$voteBtn.forEach(button=>{
  button.addEventListener('click',(event)=>{
    if(event.currentTarget.id === 'participate'){
      participate++;
    }
    else {
      absent++;
    }
    sum = participate + absent;
    show();
  })
})

function show (){
  $show_sum.textContent = `투표인원 : ${sum}`;
  $show_participate.textContent = `참여 : ${participate}`;
  $show_absent.textContent = `불참 : ${absent}`;
}

