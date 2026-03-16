// all card card 
let statuss='';
    if(card.status==='open'){
        statuss=' border-t-6 border-t-[#00A96E] '}
    else if(card.status==='closed'){
        statuss='border-t-6 border-t-[#A855F7]'
    }
    //   ---prioroty text bg color function
    let priority="";
    if(card.priority==='high'){
        priority='text-[#EF4444] bg-[#FEECEC]'}
    else if(card.priority==='medium'){
        priority='text-[#F59E0B] bg-[#FFF6D1]'}
    else if(card.priority==='low'){
        priority='flex items-center text-center text-[#9CA3AF] bg-[#EEEFF2]'}


    //   ------level text and bg color function
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

// --------2.2 new card inner html set
    newCard.innerHTML=
        ` <div class="">
           <div class=" ${statuss} p-5 shadow-sm space-y-5 rounded-t">
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

        //    open card
         let statuss='';
        if(card.status==='open'){
        statuss=' border-t-6 border-t-[#00A96E] '}
       else if(card.status==='closed'){
        statuss='border-t-6 border-t-[#A855F7]'
    }
    //   ---prioroty text bg color function
    let priority="";
    if(card.priority==='high'){
        priority='text-[#EF4444] bg-[#FEECEC]'}
    else if(card.priority==='medium'){
        priority='text-[#F59E0B] bg-[#FFF6D1]'}
    else if(card.priority==='low'){
        priority='flex items-center text-center text-[#9CA3AF] bg-[#EEEFF2]'}
        //   ------level text and bg color function
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
        // new card inner html set
        newCard.innerHTML= 
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

        //    close card 
