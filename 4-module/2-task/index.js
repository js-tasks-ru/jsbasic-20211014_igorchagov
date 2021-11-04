let body = document.body;
let children = body.children;
let table = children['1'];
console.log(table);
  function makeDiagonalRed(table) {
   let row = 0;
   for (let i = 0; i < table.rows.length; i++) {
      row = table.rows[i]
      row.cells[i].style.backgroundColor = 'red';
  }
    return row;
  };
console.log(makeDiagonalRed(table))
 