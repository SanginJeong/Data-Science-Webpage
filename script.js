const $hamburger = document.querySelector('.hamburger');
const $nav_menu = document.querySelector('.nav_menu');
const $nav_user = document.querySelector('.nav_user');
const $openModal = document.querySelector('#openModal');
const $modal = document.querySelector('.modal');
const $form = document.querySelector('#form');
const $exit = document.querySelectorAll('.exit');
const $voteBtn = document.querySelectorAll('#participate, #absent');
const $upload_vote = document.querySelector('#upload_vote');
const $delete_vote = document.querySelector('#delete_vote');
const $complete = document.querySelector('#complete');
const $modal_vote = document.querySelector('.modal_vote');
const $input_vote_title = document.querySelector('#input_vote_title');
const $input_vote_content = document.querySelector('#input_vote_content');
const $input_vote_location = document.querySelector('#input_vote_location');
const $main_vote = document.querySelector('.main_vote');
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

$exit.forEach(button=>(
  button.addEventListener('click', ()=>{
    $modal.classList.add('hidden');
    $modal_vote.classList.add('hidden');
  })
))

const voteList = [];

$upload_vote.addEventListener('click',()=>{
  if(voteList.length === 3){
    alert('투표는 3개 이상 등록할 수 없습니다.');
    return
  }
  $modal_vote.classList.remove('hidden');
})

$complete.addEventListener('click',(event)=>{
  event.preventDefault();
  const voteObj = {};
  voteObj.title = $input_vote_title.value;
  voteObj.contents = $input_vote_content.value;
  voteObj.location = $input_vote_location.value;
  if(voteObj.title === ''){
    alert('제목을 입력하세요.');
    return
  }
  if(voteObj.contents ===''){
    alert('내용을 입력하세요.');
    return
  }
  if(voteObj.location===''){
    alert('장소를 입력하세요.');
    return
  }
  createVote(voteObj);
  $modal_vote.classList.add('hidden');
  addVoteList(voteObj);
})

function createVote(voteObj){
  const vote = {
    title : voteObj.title,
    contents : voteObj.contents,
    location : voteObj.location,
    participate: 0,
    absent: 0,
    sum: 0,
  }
  voteList.push(vote); 
}

let voteIndex = 0;
let participate = 0;
let absent = 0;
let sum= 0;

function clickParticipate(voteIndex){
  if(voteList[voteIndex]){
    voteList[voteIndex].participate++;
    voteList[voteIndex].sum = voteList[voteIndex].participate + voteList[voteIndex].absent;
    show(voteIndex);
  }
}
function clickAbsent(voteIndex){
  if(voteList[voteIndex]){
    voteList[voteIndex].absent++;
    voteList[voteIndex].sum = voteList[voteIndex].participate + voteList[voteIndex].absent;
    show(voteIndex);
  }
}

function show (voteIndex){
  const $show_sum = document.querySelector(`#show_sum_${voteIndex}`);
  const $show_participate = document.querySelector(`#show_participate_${voteIndex}`);
  const $show_absent = document.querySelector(`#show_absent_${voteIndex}`);
  $show_sum.textContent = `투표인원 : ${voteList[voteIndex].sum}`;
  $show_participate.textContent = `참여 : ${voteList[voteIndex].participate}`;
  $show_absent.textContent = `불참 : ${voteList[voteIndex].absent}`;
}

function addVoteList(voteObj){
  if(voteList.length===1){
    $main_vote.innerHTML =
  `<div class="vote_subject item">
      <h2 id="vote_title_${voteIndex}">${voteObj.title}</h2>
      <div id="vote_text">
        <h3 id="vote_contents">${voteObj.contents}</h3>
        <h3 id="vote_location">장소 : ${voteObj.location}</h3>
      </div>
      <div>
        <p id="show_sum_${voteIndex}">투표인원 : 0</p>
        <p id="show_participate_${voteIndex}">참여 : 0</p>
        <p id="show_absent_${voteIndex}">불참 : 0</p>
      </div>
      <div>
        <button id="participate" onclick="clickParticipate(voteIndex)">참여</button>
        <button id="absent" onclick="clickAbsent(voteIndex)">불참</button>
      </div>
    </div>`
  }
  else{
  $main_vote.innerHTML += 
  `<div class="vote_subject item">
      <h2 id="vote_title_${voteIndex}">${voteObj.title}</h2>
      <div id="vote_text">
        <h3 id="vote_contents">${voteObj.contents}</h3>
        <h3 id="vote_location">장소 : ${voteObj.location}</h3>
      </div>
      <div>
        <p id="show_sum_${voteIndex}">투표인원 : 0</p>
        <p id="show_participate_${voteIndex}">참여 : 0</p>
        <p id="show_absent_${voteIndex}">불참 : 0</p>
      </div>
      <div>
        <button id="participate"  onclick="clickParticipate(voteIndex)">참여</button>
        <button id="absent" onclick="clickAbsent(voteIndex)">불참</button>
      </div>
    </div>`
  }
    voteIndex++;
}


