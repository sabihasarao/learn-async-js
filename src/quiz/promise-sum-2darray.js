async function sum2DArrayWithConcurrency(arr) {
    console.log('Sum called ... ');
    if (!Array.isArray(arr)) {
        console.log('rejecting ... ');
        throw new Error('BAD INPUT: Expected array as input');
    }

    const rowPromises = arr.map(row => {
        return new Promise((resolveRow, rejectRow) => {
            setTimeout(() => {
                const rowSum = row.reduce((acc, val) => acc + val, 0);
                console.log('Row sum calculated: ', rowSum);
                resolveRow(rowSum);
            }, 0);
        });
    });

    try {
        const rowSums = await Promise.all(rowPromises);
        const totalSum = rowSums.reduce((acc, val) => acc + val, 0);
        console.log('Total sum calculated: ', totalSum);
        return totalSum;
    } catch (error) {
        console.error('Error in sum calculation: ', error);
        throw error;
    }
}
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];