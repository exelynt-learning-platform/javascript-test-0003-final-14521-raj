const TOTAL_ROWS = 6;

for (let i = 1; i <= TOTAL_ROWS; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += ((i + j + 1) % 2) + " ";
  }
  console.log(row.trim());
}
 
