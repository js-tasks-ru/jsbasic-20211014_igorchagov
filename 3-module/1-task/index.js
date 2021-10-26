function namify(users) {
  let usersNames=[];
  for(let name of users){
    usersNames.push(name.name);
  }
  return usersNames;
}
