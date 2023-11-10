// let content = document.getElementsByClassName(content)
// let grid = document.getElementsByClassName(grid)

// for (let i = 1; i<grid.length; i++) {
//     grid[i]addEventListener('click', cellClick, false)
// }

// function cellClick() {
//     alert('hellou')
// }


const cells = document.querySelectorAll('.cell');
let Player1 = 'X';
let data = []
 
let winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

cells.forEach(cell => {
 cell.addEventListener('click', Click);
});

function checkWin(data) {
   winCombination.forEach(array => {
    if (data[array[0]] == data[array[1]] && data[array[1]] == data[array[2]] && data[array[0]]) {
        alert(Player1 + ' Победил!')
    }
   })
    
}

function Click() {
      
    if (!this.innerHTML) {
        this.innerHTML = Player1
    } else { 
        alert('Ячейка занята!')
        return
    }
   checkWin(data)

    if (Player1 === 'X') {
        Player1 = 'O';
      } else {
        Player1 = 'X';
      }
      
}

function saf (namber) {
    data[namber] = Player1
    console.log(data);
}
