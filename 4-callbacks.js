// setTimeout(() => {
//     console.log("Two seconds are up")
// }, 2000)

// const names = ["Zaid", "Andrew", "Jess"]

// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         return callback(data);
//     }, 2000)

// }

// geoCode("Phidelphia", (data) => {
//     console.log(data)
// })


const add = (a, b, callback) => {
    setTimeout(() => {
        return callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})