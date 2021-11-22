import User from "./user.js"


export default class Employee extends User{
    constructor(id,firstName,lastName,city,age,salary){
        super(id,firstName,lastName,city,age)// userın constructorına gönder demektir.Super aslında User dır.
        // PROTOTYPING 
        this.salary = salary
    }
}