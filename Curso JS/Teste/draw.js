function draw() {
    console.log("Drawing canvas"); // Adiciona uma mensagem de console para depuração
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            stroke(255);
            fill(grid[i][j] * 255);
            let x = i * w;
            let y = j * w;
            square(x, y, w);
        }
    }

    //iteração para calcular o próximo estado de uma grade em uma implementação do Jogo da Vida de Conway.
    let nextGrid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            if (state === 1) {
                let below = grid[i][j + 1];
                let dir = 1;
                if (ramdom(1) < 0.5) {
                    dir *= -1;
                }
                let belowA = grid[i + dir][j + 1];
                let belowB = grid[i - dir][j + 1];

                if (below === 0) {
                    nextGrid[i][j + 1] = 1;
                } else if (belowA === 0) {
                    nextGrid[i + dir][j + 1] = 1;
                } else if (belowB === 0) {
                    nextGrid[i - dir][j + 1] = 1;
                } else {
                    nextGrid[i][j] = 1;
                }
            }
        }
    }
    grid = nextGrid;
}
