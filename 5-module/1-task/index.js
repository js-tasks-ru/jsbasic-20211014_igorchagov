
function hideSelf (){
 let body = document.body;
 let button = body.querySelector('button');
  button.setAttribute('hidden', 'hidden');
  button.addEventListener('click', hideSelf);
}  
