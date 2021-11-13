function toggleText() {
  let body = document.body;
  let button = body.querySelector('button');
  let text = document.getElementById('text');
  console.log(text);
  console.log(text.hasAttribute('hidden'));
  function  hidden(){
   if (text.hasAttribute('hidden') === false){
  text.setAttribute('hidden', 'hidden')
   } else {
     text.removeAttribute('hidden');
   }
    };
   button.onclick = hidden;
};