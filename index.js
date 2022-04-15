// Code your solution here
// function findMatching(collection, array) {
//     const newCollection = []
//     for (const driver of collection) {
//         if (driver === array) {
//             newCollection.push(driver).toLowerCase
//         }
//     }
//       return newCollection
// }

function findMatching(array, name) {
    return array.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array, letter) {
    return array.filter((driver) => driver.startsWith(letter))
}

function matchName(array, name) {
    return array.filter((driver) => driver.name === name)
}
