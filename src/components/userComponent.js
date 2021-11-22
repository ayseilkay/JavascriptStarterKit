import UserService from "../services/userService.js"
import User from "../models/user.js"
import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
//.. bir üst klasöre git demektir.
console.log(" User component loaded")

let logger1= new ElasticLogger()



let userService = new UserService(logger1)
let user1 = new User(1,"Ali","Birinci","Ankara")
let user2 = new User(2,"Ayse","İlkay","İzmir")
userService.add(user1)
userService.add(user2)
// userService.getById(3)
// userService.list()
//iki olusturdugumuz userı add ile ekledik.

// bu kısımda da ekledigimiz userları list ile cagırıyoruz.
// console.log(userService.list())
// 2 numaralı userı getirmesini söyledik
// console.log(userService.getById(1))


let customer = {
    id:1,
    firstName: "Ayse"
}
// bu olaya prototyping denir
customer.lastName = "İlkay"
console.log(customer.lastName)

console.log("-------------------------------------------------------------")
//bizim newCustomer diye göndermemiz hatalı bir kullanım
userService.add(new Customer(8,"Seda","Kaya","izmir","sdfsdsdgd"))
userService.load()
let customerToAdd =new Customer(8,"Veli","Kaya","izmir","sdfsdsdgd")
customerToAdd.type ="customer" // Bu yapıda prototyping dir.
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
