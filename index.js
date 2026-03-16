
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


//---- manage spinner -----
const manageSpiner = (stats)=>{
    const spiner =document.getElementById('spiiner');
    if(stats==true){
        spiner.classList.remove('hidden')
    }
    else{spiner.classList.add('hidden')}
}

//--------- card style------
    const labels = (arr)=>{

           const createLabels = arr.map((element)=>{
                   let labelbg="";
                   let icon="";
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
    icon='<i class="fa-solid fa-book-medical"></i>'};
        return `<span class="${labelbg} inline-flex items-center whitespace-nowrap  gap-1"><span class="align-middle">${icon}</span> ${element}</span>`});
           return createLabels.join(' ')
     }

const statusStyle=(card)=>{
        if(card.status==='open'){
       return ' border-t-6 border-t-[#00A96E] ';}
       else if(card.status==='closed'){
       return 'border-t-6 border-t-[#A855F7]';
    }}
    
    const priorityStyle=(card)=>{
        if(card.priority==='high'){
            return 'text-[#EF4444] bg-[#FEECEC]'}
            else if(card.priority==='medium'){
                return 'text-[#F59E0B] bg-[#FFF6D1]'}
                else if(card.priority==='low'){
                    return 'flex items-center text-center text-[#9CA3AF] bg-[#EEEFF2]'}
                }
                
       const newCard=document.createElement('div')
        const cardStyle =(card, statuss, priority)=>
         ` <div class="">
           <div class="${statuss}  p-5 shadow-sm space-y-5 rounded-t">
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


// all card button js

const allCard = () =>{
    console.log(' all card show')
    allCardcontainer.classList.remove('hidden')
    openCardcontainer.classList.add('hidden')
    closedCardcontainer.classList.add('hidden')

  
    manageSpiner(true);
    // fetch for all card
    const urlAll = 'https://phi-lab-server.vercel.app/api/v1/lab/issues'
    fetch(urlAll)
    .then(response => response.json())
    .then(allData =>{
        displayAll(allData.data)
         manageSpiner(false);
    })
}   

// displY all card in all card btn
const displayAll =(cards) => {
    // console.log(cards)
    //    1. get the container
    const allCardcontainer = document.getElementById('all-card');
    allCardcontainer.innerHTML="";

    //2 get in every loop
    for(const card of cards){
        // console.log(card);
        // 2.1 create elemenet 
    const newCard = document.createElement('div');
    newCard.addEventListener('click', ()=>{
        loadDetals(card.id);
    })
    // ----
    const status=statusStyle(card);
    const priority= priorityStyle(card);
    newCard.innerHTML=`${cardStyle(card, status, priority)}`
    // -----
    // 3.append element to container
    allCardcontainer.appendChild(newCard)
    }
    const cardCount = document.getElementById('card-count');
    cardCount.innerText=allCardcontainer.children.length;
}
// Open card button js
const openCard = () =>{
    console.log(' open card show')
    allCardcontainer.classList.add('hidden')
    closedCardcontainer.classList.add('hidden')
    openCardcontainer.classList.remove('hidden')

           manageSpiner(true);
    // fetch for open card
     const urlOpen ='https://phi-lab-server.vercel.app/api/v1/lab/issues'
     fetch(urlOpen)
     .then(res => res.json())
     .then(opendata =>{
          displayOpencards(opendata.data)
         manageSpiner(false);})
        }


     //  display open status card in open button
    const displayOpencards=(cards)=>{
        // get container
        const openCardcontainer = document.getElementById('open-card');
        openCardcontainer.innerHTML="";
        //  create element  
       cards.forEach(card=>{
        if(card.status==='open'){
        const newCard=document.createElement('div');
        newCard.addEventListener('click',()=>{
           loadDetals(card.id);
        })
       // -------
       const status=statusStyle(card);
       const priority= priorityStyle(card);
    newCard.innerHTML=`${cardStyle(card, status, priority)}`
       //  ------  

        // append elemnt to container
        openCardcontainer.appendChild(newCard);
        }
       })

       const cardCount= document.getElementById('card-count');
       cardCount.innerText=openCardcontainer.children.length;
    }


// close card button js
const closeCard = () =>{
    console.log(' closed card show');
    allCardcontainer.classList.add('hidden')
   openCardcontainer.classList.add('hidden')
   closedCardcontainer.classList.remove('hidden')

    manageSpiner(true);
    //   fetch for close card
    const urlClosed ='https://phi-lab-server.vercel.app/api/v1/lab/issues';
    fetch(urlClosed)
    .then(res => res.json())
    .then(data=> {displayClosedCards(data.data)
         manageSpiner(false);
    })
 }

//  display close cards in closed button
const displayClosedCards=(cards)=>{
    //1. get container
const closedCardcontainer = document.getElementById('closed-card');
closedCardcontainer.innerHTML="";
    // 2. create elemnt for every card
cards.forEach(card=>{
    if(card.status==='closed'){
    const newCard = document.createElement('div');
    newCard.addEventListener('click',()=>{
       loadDetals(card.id);
    })
    // -------
    const status=statusStyle(card);
    const priority= priorityStyle(card);
    newCard.innerHTML=`${cardStyle(card, status, priority)}`
    // --------
      
    // append to the container

    closedCardcontainer.appendChild(newCard);
    }
})
  const cardCount= document.getElementById('card-count');
       cardCount.innerText=closedCardcontainer.children.length;

}
// -------onclick modal---------
const loadDetals=(id)=>{
    const url =`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayModal(data.data))
   };

   const displayModal=(card)=>{
    console.log(card);
    const modalBox=document.getElementById('modalbox');
  
    // -----
      const status=statusStyle(card);
       const priority= priorityStyle(card);
       modalBox.innerHTML=`
       <div class="space-y-8 ">
       <h1 class="text-2xl font-bold">${card.title}</h1>
        <div class="flex space-x-2"><p class="rounded-md p-1 text-white ${card.status==='open'?'bg-[#00A96E]':'bg-[#A855F7]'}">${card.status}</p><p>${card.assignee ? `${card.status} by ${card.assignee}` :` ${card.status} by unknown`}</p> <p>${card.updatedAt}</p></div>
         <div class=" flex gap-3">${labels(card.labels)}</div>
         <div class="text[#64748B]">${card.description}</div>
         <div class="py-2 px-4 flex  gap-30 bg-[#f1f2f3] rounded-md">
         <div><p class="text[#64748B]">assignee</p><p>${card.assignee ? card.assignee : `unknown`}</p></div>
         <div><p class="text[#64748B]">priority</p><p class="${priority}  px-2 py-1 rounded-md"> ${card.priority}</p></div>
         </div>
       </div>
       `
    // -----
    
    document.getElementById('my_modal_5').showModal();

   }

      //    -----search issue-------
      const searchInput = document.getElementById('search-input');
      const searchbtn = document.getElementById('search-btn');
      const search=(word)=>{
          const searchWord =(searchInput.value.trim().toLowerCase());

        fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res=>res.json())
        .then(data=>{
            const allwords= data.data;
            const filterWords=allwords.filter((word)=>
            word.title.toLowerCase().includes(searchWord));

             displayAll(filterWords);

            allBtn.forEach(button=>{button.classList.remove('btn-primary')})
         searchInput.value=""
        })
             
      }


allCard();


