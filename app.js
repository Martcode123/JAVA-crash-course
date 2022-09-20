// let count = 1

// while (count <= 100) {
//     console.log(count)
//   count = count + 1
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} -> frontend simplified`)
//     }
//    else if (i % 3 === 0) {
//         console.log(`${i} -> frontend`)
//     }
//     else if (i % 5 === 0){
//         console.log(`${i} -> simplified`)
//     }
//     else {
//         console.log(`${i} -> ${i}`)
//     }

// }

// const str = "frontend simplified"

// for (let i = 0;  i < str.length; ++i) {
//     console.log(str[i])

// }

// Function definition

// function welcomePersonToFES(name) {
//     console.log(`Welcome to Frontend Simplified, ${name}`)
// }

// // Call the function
// welcomePersonToFES(`Martins`)

//  let arr = [20, 30, 40, 50, 100]
// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//         return true
//     }
// })

// console.log(newArr)

// let grades = ['A+', 'A', 'FAIL']
// let goodgrades = grades.filter((element) => {
//     console.log(element)
//     if (element !== 'FAIL')
//      return true
// })

// console.log(goodgrades)

// let grades = ['FAIL', 'FAIL', 'B']
// let goodgrades = grades.filter((element) => {
//     console.log(element)
//     if (element !== 'FAIL')
//     return true
// })

// console.log(goodgrades)
// let grades = ['FAIL']
// let goodgrades = grades.filter((element) => {
//     console.log(element)
//     if (element !== 'FAIL')
//     return true
// })

// console.log(goodgrades)

// let grades = ['A+', 'A', 'FAIL']

// goodgrades = []

// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== 'FAIL') {
//         goodgrades.push(grades[i])
//     }
// }

// console.log(goodgrades)

// let arr = [1, 4, 9, 16]

// let NewArray = arr.map((element) => {
//     console.log(element)
//     return undefined;
// })

// console.log(NewArray)

//  let dollars = [1, 5, 10, 3]

//  dollars.map((element) => {
//      console.log(element * 100)
//  })
//  let dollars = [0, 10, 20,]

//  dollars.map((element) => {
//      console.log(element * 100)
//  })

// let dollars = [1, 5, 10, 3]
// let cents = [];

// for (let i = 0; i < dollars.length; i++) {
//     cents.push(dollars[i] * 100)
// }

// console.log(cents)

//  let users = [
//  {
//      username: 'martins',
//      email: 'martins@frontendsimplified.com',
//      subscriptionStatus: 'VIP',
//      password: 'test123'
// },

// ];

//  function login(email, password) {
//          for (let i = 0; i < users.length; i++) {
//       if (users[i].email === email) {
//         console.log(users[i]);
//         if (users[i].password === password) {
//             console.log('log the user in - the details are correct')
//          }
//          else {
//              console.log('password is incorrect - try again')
//          }
//          return;
//       }

//      }
//      console.log('could not find an email that matches')
//  }

//  login('martins@frontendsimplified.com', 'test123')



// function register(user) {
//     users.push(user);
// }


// register({
//     username: "rich", 
//     email: "rich@fes.com", 
//     password: "rich123", 
//     subscriptionStatus: "VIP", 
//     discordId: "rich#0001", 
//     lessonsCompleted: [0, 1]
// });
    

// console.log(users)

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}




