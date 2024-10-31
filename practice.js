function createTable() {
  const tableBody = document.querySelector('#numberTable tbody');

  for (let row = 1; row <= 5; row ++) {
    const tableRow = document.createElement('tr');

    for (let col = 1; col <= 5; col ++) {
      const cell = document.createElement('td');
      cell.textContent = `${col}:${row}`;
      tableRow.appendChild(cell);

      if (row === col) {
        setTimeout(() => {
          cell.style.background = "linear-gradient(to bottom right, #007BFF, #009688)";}, (row - 1) * 1000);
        
        setTimeout(() => {
          cell.style.background = "transparent";}, (6 * 1000) + (5 - row) * 1000);
         
      }
    }
    tableBody.appendChild(tableRow);
  }
    
}
createTable();
setInterval(() => {location.reload();
}, 12000);