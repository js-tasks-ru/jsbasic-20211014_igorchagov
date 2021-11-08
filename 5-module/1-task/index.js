
function hideSelf (){
  body = document.body;
  button = body.querySelector('button');
  button.setAttribute('hidden', 'hidden');
}  
button.addEventListener('click', hideSelf);