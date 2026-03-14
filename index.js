
const logInForm = document.getElementById('log-in-form')
const mainContainer = document.getElementById('main-container')

const allCardcontainer = document.getElementById('all-card')
const openCardcontainer = document.getElementById('open-card')
const closedCardcontainer = document.getElementById('closed-card')

// log in page js

const logIn = () =>{
    const userName = document.getElementById('username');
    const passWord = document.getElementById('password');
    

    
console.log('username and password')
console.log(userName.value)
console.log(passWord.value)

if(userName.value=='admin' && passWord.value =='admin123'){
     logInForm.classList.add('hidden')
     mainContainer.classList.remove('hidden')
}
else{
    alert('incorrect password or username')
}
}




// active button
const allBtn = document.querySelectorAll('.active-btn');

allBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        allBtn.forEach(button=>{button.classList.remove('btn-primary');})

        btn.classList.add('btn-primary')
    })
})




// all card button js

const allCard = () =>{
    console.log(' all card show')
    allCardcontainer.classList.remove('hidden')
    openCardcontainer.classList.add('hidden')
    closedCardcontainer.classList.add('hidden')

  

    // fetch for all card
    const urlAll = 'https://phi-lab-server.vercel.app/api/v1/lab/issues'
    fetch(urlAll)
    .then(response => response.json())
    .then(allData => displayAll(allData.data))
}   

// displY all card in all card btn
const displayAll =(cards) => {
    // console.log(cards)
    //    1. get the container
    const allCardcontainer = document.getElementById('all-card');

    //2 get in every loop
    for(const card of cards){
        console.log(card);
        // 2.1 create elemenet 
    const newCard = document.createElement('div');

    let status='';
    if(card.status==='open'){
        status=' border-t-6 border-t-[#00A96E] '}
    else if(card.status==='closed'){
        status='border-t-6 border-t-[#A855F7]'
    }
      
    let priority="";
    if(card.priority==='high'){
        priority='text-[#EF4444] bg-[#FEECEC]'}
    else if(card.priority==='medium'){
        priority='text-[#F59E0B] bg-[#FFF6D1]'}
    else if(card.priority==='low'){
        priority='flex items-center text-center text-[#9CA3AF] bg-[#EEEFF2]'}







      
     const labels = (arr)=>{

           const createLabels = arr.map((element)=>{
                   let labelbg="";
    if(element==='bug'){
        labelbg='py-1 px-3 rounded-sm text-[#EF4444] bg-[#FECACA]'
    icon = '<i class="fa-solid fa-bug"></i>'}
    else if(element==='help wanted'){
        labelbg='py-1 px-3 rounded-sm text-[#D97706] bg-[#FDE68A]'
    icon = '<i class="fa-solid fa-life-ring"></i>'}
    else if(element==='enhancement'){
        labelbg='py-1 px-3 rounded-sm text-[#00A96E] bg-[#BBF7D0]'
        icon = '<i class="fa-solid fa-wand-magic-sparkles"></i>'
    }
    else if(element==='good first issue'){
        labelbg='py-1 px-3 rounded-sm text-[#EF4444] bg-[#FECACA]';
    icon = '<i class="fa-solid fa-box-tissue"></i>'}
    else if(element==='documentation'){
        labelbg='py-1 px-3 rounded-sm text-[#D97706] bg-[#FDE68A]';
    icon='<i class="fa-solid fa-book-medical"></i>'}

            
           return `<span class="${labelbg} inline-flex items-center whitespace-nowrap  gap-1"><span class="align-middle">${icon}</span> ${element}</span>`});
           return createLabels.join(' ')
     }


    newCard.innerHTML=
        ` <div class="">
           <div class=" ${status} p-5 shadow-sm space-y-5 rounded-t">
                <div class="flex justify-between text-center items-center">
               <img src="${card.status==='open'?'assets/Open-Status.png' :'assets/Closed- Status .png' }"></img>
                    <p class="${priority} rounded-full px-4 py-1 ">${card.priority}</p>
                </div>
                <h1 class="font-bold">${card.title}</h1>
                <p class="text-[#64748b]">${card.description}</p>
                <div class="flex gap-5">
                <div class="flex gap-3">${labels(card.labels)}</div>
                </div>
          </div>
          <div class="p-5 shadow-sm space-y-3">
              <p class="text-[#64748b]">#1 by john_doe</p>
              <p class="text-[#64748b]">1/15/2024</p>
          </div>
    
           </div> `
    // 3.append element to container
    allCardcontainer.appendChild(newCard)
    }
}


// Open card button js
const openCard = () =>{
    console.log(' open card show')
    allCardcontainer.classList.add('hidden')
    closedCardcontainer.classList.add('hidden')
    openCardcontainer.classList.remove('hidden')


    // fetch for open card
    //  const urlSingle = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${allData.data.id}`
    //  fetch(urlSingle)
    //  .then(respose => respose.json())
    //  .then(dataOpen => console.log(dataOpen.data.status))

     
}

// close card button js
const closeCard = () =>{
    console.log(' closed card show');
    allCardcontainer.classList.add('hidden')
   openCardcontainer.classList.add('hidden')
   closedCardcontainer.classList.remove('hidden')

    //   fetch for close card
 

}

allCard();