/////////////////////////////////////////////////////////////////////////////////

function addCart(quantity,productName="Elma"){
    console.log("Ürün sepete eklendi :",productName +
    " adet: "+ quantity)
}
addCart(10)
//////////////////////////////////////////////////////////////////////////////////

let addToCart2=(quantity,productName)=>{console.log(" Miktar :" , quantity," Adı :",productName)}
addToCart2(34,"telefon")

//////////////////////////////////////////////////////////////////////////////////

let sayHello =function(){
    console.log("hellooo ")
}

sayHello()

///////////////////////////////////////////////////////////////////////////////////
function addToCart3(productName,quantity,unitPrice){

}
addToCart3("Elma",5,10)
addToCart3("Armut",2,20)
addToCart3("Limon",3,15)

///////////////////////////////////////////////////////////////////////////////////

function addToCart4(product){
    console.log("Ürün : "+ product.productName," quantity :"+ product.quantity," unitPrice :" + product.unitPrice)
}

let product1 = {productName:"Elma",
                quantity:3,
                unitPrice:5}
addToCart4(product1)

let product2 ={productName:"Elma",quantity:3,unitPrice:5}
let product3 ={productName:"Elma",quantity:3,unitPrice:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)

let sari1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)
// SAYILAR DEGER TİP OBJELER ,ARRAYLER REFERANS TİPTİR.

///////////////////////////////////////////////////////////////////////////////////

function addToCart5(products){
    console.log(products)
}
let products=[
    {productName:"Telefon",quantity:3,unitPrice:5},
    {productName:"Bilgisayar",quantity:3,unitPrice:5},
    {productName:"Mouse",quantity:3,unitPrice:5}
]

addToCart5(products)
///////////////////////////////////////////////////////////////////////////////////

function add(number1,number2){
    console.log(number1 + number2)
}
add(20,30)
///////////////////////////////////////////////////////////////////////////////////
function add2(birsey,...numbers){ // REST OPERATORU (...)
    let total=0
   for (let index = 0; index < numbers.length; index++) {
      
      total = total + numbers[index];
       console.log(total)
       console.log(birsey)
   
       
   }
}
add2(45,20,30,40,50)

let numbers = [ 30,50,40,700,90,45,932]
console.log(Math.max(20,40,50,60,89))
console.log(Math.max(...numbers))// SPREAD ---(numbersı ayır demek istiyor--> ayrı ayrı degiskenler gibi düsünüyor.)


///////////////////////////////////////////////////////////////////////////////////
// Elinizdeki arrayin degiskenlerini degiskenlere atamaktır.(DESTRUCTIRING)

let regions = ["İç Anadolu","Marmara","Karadeniz"]

// let [icAnadolu,marmara] = ["İç Anadolu","Marmara","Karadeniz"]
// console.log(icAnadolu)

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population: "20M"},
    {name:"marmara", population: "30M"},
    {name:"Karadeniz", population: "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


let product6 = {productName:"Telefon",quantity:3,unitPrice:5}
console.log(product6)

let {productName:newproductName,Quantity:newquantity,UnitPrice:newunitprice} = {productName:"Mouse",quantity:3,unitPrice:5}
console.log(newproductName)
