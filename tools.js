function create2Darray(m, n) {
    let arr = []

    for (let i = 0; i < m; i++) {
        arr[i] = []
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = [undefined]
        }
    }

    return arr
 }

console.log(create2Darray(8,7))