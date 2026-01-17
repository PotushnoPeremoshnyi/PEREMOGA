function max(matrix) {
    let maxElementWCB = Number.MIN_VALUE;//wcb-what can be

    for (let a = 0; a < matrix.length; a++) {
        for (let b = 0; b < matrix[a].length; b++) {
            if (matrix[a][b] > maxElementWCB) {
                maxElementWCB = matrix[a][b];
            }
        }
    }
    return maxElementWCB;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);
