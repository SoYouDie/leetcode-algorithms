/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (!numRows) return [];
    const result = [
        [1],
    ];
    for (let i = 1; i < numRows; i++) {
        let row = [];
        let prevRow = result[i - 1];
        row.push(1);
        for (let j = 1; j < prevRow.length; j++) {
            row.push(prevRow[j] + prevRow[j - 1]);
        }
        row.push(1);
        result.push(row);
    }
    return result;
};

module.exports = generate;
