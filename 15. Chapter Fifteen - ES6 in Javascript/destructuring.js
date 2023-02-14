let person = {
    name : 'Faysal Riyad',
    email : 'hello@riyad.xyz',
    address : {
        city : 'Dhaka',
        country : 'Bangladesh'
    }
}

// let name = person.name
// let email = person.email

// console.log (name)
// console.log (email)


let {name, email, address, address : {city, country}} = person

console.log (name, email, address, city, country)


let arr = [1, 2, 3, 4, 5]

let [first, second, , , fifth] = arr