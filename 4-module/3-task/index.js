function highlight(table) {
  let status = table.querySelectorAll('tbody tr > td:last-child');
  console.log(status);
 for(let i = 0; i < status.length; i++){
   let statusData = status[i].getAttribute('data-available');
   if(statusData == 'true'){
     status[i].parentNode.classList.add('available'); 
   }
   else if(statusData == 'false'){
     status[i].parentNode.classList.add('unavailable'); 
   }
   else {
     status[i].parentNode.setAttribute('hidden', 'hidden'); 
   }
};
 let gender = table.querySelectorAll('tbody tr > td:nth-child(3)');
 console.log(gender);
 for(let i = 0; i<gender.length; i++){
   let gender1 = gender[i].textContent;
   console.log(gender1);
   if(gender1 == 'm'){
     gender[i].parentNode.classList.add('male');
   }else if(gender1 == 'f'){
     gender[i].parentNode.classList.add('female');
   }
 };
 let age = table.querySelectorAll('tbody tr > td:nth-child(2)');
 for(let i=0; i<age.length; i++){
   let age1 = age[i].textContent;
   console.log(age1)
   if(+age1 < 18){
     age[i].parentNode.setAttribute('style',"text-decoration: line-through");
   }  
 }
 }

