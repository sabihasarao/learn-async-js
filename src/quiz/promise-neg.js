function checkRowsForNegatives(arr) {
    return new Promise((resolve, reject) => {
        console.log('Checking rows for negatives ... ');
        if (Array.isArray(arr)) {
            const rowPromises = arr.map(row => {
                return new Promise((resolveRow, rejectRow) => {
                    setTimeout(() => {
                        if (row.some(num => num < 0)) {
                            console.log('Row with negative number:', row);
                            resolveRow();
                        } else {
                            resolveRow();
                        }
                    }, 0);
                });
            });

            Promise.all(rowPromises)
                .then(() => {
                    console.log('All rows checked.');
                    resolve();
                })
                .catch(error => {
                    console.error('Error in row check: ', error);
                    reject(error);
                });
        } else {
            console.log('Rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('Returning from row check');
    });
}
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];