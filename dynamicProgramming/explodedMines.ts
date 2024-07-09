function countExplodedMines(mines, initialIndex) {
    const n = mines.length;
    let exploded = new Array(n).fill(false);

    function distance(mine1, mine2) {
        return Math.sqrt(
            Math.pow(mine1.x - mine2.x, 2) + Math.pow(mine1.y - mine2.y, 2)
        );
    }

    function dfs(index) {
        exploded[index] = true;
        for (let i = 0; i < n; i++) {
            if (!exploded[i] && distance(mines[index], mines[i]) <= 1) {
                dfs(i);
            }
        }
    }

    dfs(initialIndex);

    return exploded.filter(val => val).length;
}

const mines = [
    { x: 1.0, y: 0.0 },
    { x: 1.0, y: 1.0 },
    { x: 1.0, y: 2.0 },
    { x: 1.0, y: 3.0 },
    { x: 2.0, y: 2.0 },
    { x: 3.0, y: 0.0 }
];

console.log(countExplodedMines(mines, 1)); // Assuming the mine at index 1 explodes initially
