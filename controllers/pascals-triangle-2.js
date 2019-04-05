/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let currentRow = [1];
    let prevRow;
    for (let i = 0; i < rowIndex; i++) {
        prevRow = currentRow;
        currentRow = [];
        currentRow.push(1);
        for (let j = 1; j < prevRow.length; j++) {
            currentRow.push(prevRow[j] + prevRow[j - 1]);
        }
        currentRow.push(1);
    }
    return currentRow;
};

module.exports = getRow;
