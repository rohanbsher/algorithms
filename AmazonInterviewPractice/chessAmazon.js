// If using Node.js, install `prompt-sync` package: npm install prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

class ChessGame {
    constructor(m, n) {
        this.m = m;
        this.n = n;
        this.board = this.createBoard();
        this.initializeBoard();
        this.currentPlayer = 1; // Player 1 starts
    }
    
    // Create an empty board
    createBoard() {
        return Array(this.m).fill(null).map(() => Array(this.n).fill(null));
    }
    
    // Initialize the pawns for both players
    initializeBoard() {
        // Player 1's pawns on the first row
        for (let i = 0; i < this.n; i++) {
            this.board[0][i] = 'P1';
        }
        
        // Player 2's pawns on the last row
        for (let i = 0; i < this.n; i++) {
            this.board[this.m - 1][i] = 'P2';
        }
    }
    
    // Print the current board state
    printBoard() {
        console.log(this.board.map(row => row.join(' ')).join('\n'));
    }
    
    // Check if a move is within the board limits
    isValidMove(x, y) {
        return x >= 0 && x < this.m && y >= 0 && y < this.n;
    }

    // Move a pawn
    movePawn(player, startX, startY, endX, endY) {
        const pawn = player === 1 ? 'P1' : 'P2';
        
        // Check if the target cell is empty for a forward move
        if (this.isValidMove(endX, endY) && this.board[endX][endY] === null) {
            this.board[startX][startY] = null;
            this.board[endX][endY] = pawn;
            return true;
        }
        
        // Check for diagonal capture
        const opponentPawn = player === 1 ? 'P2' : 'P1';
        if (this.isValidMove(endX, endY) && this.board[endX][endY] === opponentPawn) {
            this.board[startX][startY] = null;
            this.board[endX][endY] = pawn;
            return true;
        }
        
        return false;
    }

    // Check if there are any pawns left for a player
    hasPawns(player) {
        const pawn = player === 1 ? 'P1' : 'P2';
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (this.board[i][j] === pawn) return true;
            }
        }
        return false;
    }
    
    // Get input from the player
    getPlayerMove() {
        const start = prompt('Enter the pawn coordinates you want to move (row,col): ').split(',').map(Number);
        const end = prompt('Enter the target coordinates (row,col): ').split(',').map(Number);
        return { startX: start[0], startY: start[1], endX: end[0], endY: end[1] };
    }

    // Main game loop
    playGame() {
        let gameOver = false;
        
        while (!gameOver) {
            this.printBoard();
            console.log(`Player ${this.currentPlayer}'s turn`);
            
            let validMove = false;
            while (!validMove) {
                // Get move input from player
                const { startX, startY, endX, endY } = this.getPlayerMove();
                
                // Make the move if valid
                if (this.board[startX][startY] === (this.currentPlayer === 1 ? 'P1' : 'P2')) {
                    validMove = this.movePawn(this.currentPlayer, startX, startY, endX, endY);
                }
                
                if (!validMove) {
                    console.log('Invalid move. Please try again.');
                }
            }
            
            // Check if the current player won
            if (!this.hasPawns(this.currentPlayer === 1 ? 2 : 1)) {
                this.printBoard();
                console.log(`Player ${this.currentPlayer} wins!`);
                gameOver = true;
            } else {
                // Switch turn to the other player
                this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
            }
        }
        
        console.log('Game Over');
    }
}

// Create a new game with a 3x3 board for testing
const game = new ChessGame(3, 3);
game.playGame();
