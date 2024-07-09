function reversi(board, x, y) {
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],  // right, down, left, up
        [1, 1], [-1, -1], [1, -1], [-1, 1] // diagonal: down-right, up-left, down-left, up-right
    ];

    const opponent = 'W';
    const player = 'B';
    const n = board.length;

    function canFlip(x, y, dx, dy) {
        let i = x + dx;
        let j = y + dy;
        let hasOpponentBetween = false;

        while (i >= 0 && i < n && j >= 0 && j < n && board[i][j] === opponent) {
            i += dx;
            j += dy;
            hasOpponentBetween = true;
        }

        if (i >= 0 && i < n && j >= 0 && j < n && board[i][j] === player && hasOpponentBetween) {
            return true;
        }
        return false;
    }

    function flip(x, y, dx, dy) {
        let i = x + dx;
        let j = y + dy;

        while (board[i][j] === opponent) {
            board[i][j] = player;
            i += dx;
            j += dy;
        }
    }

    // Place the piece and start flipping
    board[x][y] = player;
    directions.forEach(([dx, dy]) => {
        if (canFlip(x, y, dx, dy)) {
            flip(x, y, dx, dy);
        }
    });

    return board;
}

// Example usage
const board = [
    ['*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', 'W', '*', '*', '*', '*', '*', '*'],
    ['*', '*', 'B', '*', '*', '*', '*', '*'],
    ['*', '*', '*', 'B', '*', '*', '*', '*'],
    ['W', 'B', 'B', 'B', '*', '*', '*', '*'],
    ['*', '*', '*', '*', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', 'B', '*', '*', '*'],
    ['*', '*', '*', '*', 'W', '*', '*', '*']
];
console.log(reversi(board, 4, 4)); // Assuming black places at (4, 4)













// '''
// Reversi (https://en.wikipedia.org/wiki/Reversi), also called Othello, is a game where each piece has two sides, black and white, and after being placed, further moves cause other pieces to flip tiles. Specifically, a line of pieces of one color gets flipped when they become surrounded by pieces of the opposite color on both ends.

// In this problem, we will be given a 2-dimensional array representing the board. Each position will contain a value of “B”, “W”, or “*” representing empty. Additionally, we get a position that is currently empty. Update the board to the new state after that play, including any flips if it is black’s turn to play. You can modify the existing array, but either way, return the board (2d array) with the new state.

// Follow-up:
// 1. Update this code to take a parameter of a “B” or “W,” indicating which player is making a move.
 

// EXAMPLE(S)
// For example, consider the row:

// 1 2 3 4 5 6 7 8
// * B W W W W * *

// If black places a piece at position 7, the white pieces in between get flipped, so the result is:

// 1 2 3 4 5 6 7 8
// * B B B B B B *

// This can happen on a row, column, or diagonal and even at the same time. In the following example, if white place on position (5, 5), then all of the black pieces flip to white!

//   1 2 3 4 5 6 7 8
// 1 * * * * * * * *
// 2 * W * * * * * *
// 3 * * W * * * * *
// 4 * * B B * * * *
// 5 W W W W W * * *
// 6 * * * * B * * *
// 7 * * * * B * * *
// 8 * * * * W * * *

//   1 2 3 4 5 6 7 8
// 1 * * * * * B * *
// 2 * W * * * B * *
// 3 * * B * * B * *
// 4 * * * B * B * *
// 5 W B B B * W * *
// 6 * * * * B B * *
// 7 * * * * B B * *
// 8 * * * * W * * *
 

// FUNCTION SIGNATURE
// function reversi(board, x, y)
// def reversi(board, x, y):

// The follow up adds another parameter, c.
// '''
// """

// searchLine(xinc, yinc):
//    toflip = []
//    from core x,y 
//      increment x by xinc, y by yinc
//        if newx, newy == W
//        toflip.push(newx, newy)
//        if newx, newy == B
//         return toflip
//        if newx, newy == * 
//          return []
//        if newx, newy is off board
//         return [] 

// toflip = []
// toflip.concat(searchLine(1,1) //diag right down
// toflip.push(...searchLine(0, 1)) // down
// searchLine(1, 0) // right
// searchLine(-1, -1) //diag left up
// searchLine(0, -1) //up
// searchLine(-1, 0) //left


// 3 ,3    3 ,4 3 5 36 37

// -1,-1  0,-1  1,-1
// -1,0   0,0   1,0
//  -1,1  0,1  1, 1
// */
// """

// def reversi(board, x, y):
//   side = len(board)

//   def search_line(delta_x, delta_y):
//     to_flip = []
//     start_x, start_y = x + delta_x, y + delta_y
//     while (
//       start_x >= 0 and 
//       start_x < side and 
//       start_y >= 0 and
//       start_y < side
//     ):
//       cell = board[start_x][start_y]
//       if cell == "W":
//         to_flip.append((start_x, start_y))
//       elif cell == "B":
//         return to_flip
//       elif cell == "*":
//         return []
//       start_x += delta_x
//       start_y += delta_y
//     return []

//   positions = [(x, y)]
//   for i in range(-1, 2):
//     for j in range(-1, 2):
//       if (i, j) == (0, 0):
//         continue
//       positions.extend(search_line(i, j))
  
//   for x, y in positions:
//     board[x][y] = "B"
    
//   return board

  
// def printBoard(board):
//   print("0 1 2")
//   for i in range(len(board)):
//     print(" ".join(board[i]))
//   print(" ")



// board = [
//   ["B", "W", "*"],
//   ["W", "W", "*"],
//   ["*", "*", "*"],
// ];
// printBoard(board);
// reversi(board, 0, 2);
// printBoard(board)
// print("---------------")
// board = [
//   ["B", "W", "*"],
//   ["W", "W", "*"],
//   ["*", "*", "*"],
// ];
// reversi(board, 2, 0)
// printBoard(board)
// print("---------------")

// board = [
//   ["B", "W", "*"],
//   ["W", "W", "*"],
//   ["*", "*", "*"],
// ];
// reversi(board, 2, 2)
// printBoard(board)
// print("---------------")

// board = [
//   ["*", "W", "B"],
//   ["W", "W", "B"],
//   ["B", "B", "B"],
// ]
// reversi(board, 0, 0)
// printBoard(board)

