let calculator = {
  read(a, b){ 
    this.c = a;
    this.d = b;
    return this.c, this.d;         
},
  sum(){
    return +this.c + +this.d;
},
mul(){
    return +this.c * +this.d;
},
};
calculator.read(3,5);
console.log(calculator.sum()); 
console.log(calculator.mul());
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
