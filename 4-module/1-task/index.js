function makeFriendsList(friends) {
  let friendsNames=[];
  for(let name of friends){
   friendsNames.push(`<li>${name.firstName}  ${name.lastName}</li>`);
  };
  let a = friendsNames.join('\n');
  let ul = document.createElement('ul');
  ul.innerHTML = a;
  return ul;
}
