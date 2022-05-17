// code your solution here

// function superbowlWin(record) {
//     for (const result of record) {
//         record.find(result === "W") {
//             return year
//         }
//     }
// }

// function superbowlWin(record) {
//     record.find(year =result === "W")
// }

// const win = () => result === "W"

// const superbowlWin = record.find(win)

// function superbowlWin(record) {
//     return (year if (result ==="W"))
// }

// const superbowlWin = record.find(function (year) {
//     return record === "W"
// )}

// const superbowlWin = record.find( (year) => result === "W");

// function superbowlWin(record) {
    
// }

// function win(x) {
//     if (result === "W") {
//         return year
//     }
// }

// function superbowlWin(record) {
//     record.find(win);
// }

// function superbowlWin(record) {
//     FileSystemHandle((result, record) => result = "W")
// }

// function superbowlWin(record){
//     record.find(season => season.result === 'W')
// }

function superbowlWin(array){
    const newObj = array.find(array => array.result === 'W')
    return newObj ? newObj.year : undefined
}