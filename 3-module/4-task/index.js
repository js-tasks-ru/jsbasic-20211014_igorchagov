function showSalary(users, age) {
  let names = [];
  users.forEach((user) => {
  if (user.age <= age) {
  names.push(`${user.name}, ${user.balance}`);
}
});                  
let a = names.join('\n');
  return a;
};

