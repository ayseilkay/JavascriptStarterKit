let cart = [
    {
        id:1,
        productName:"Telefon",
        quantity:3,
        unitPrice:4000
    },
    {
        id:2,
        productName:"Bardak",
        quantity:4,
        unitPrice:600
    },
    {
        id:3,
        productName:"Kalem",
        quantity:5,
        unitPrice:200
    },
    {
        id:4,
        productName:"Şarj Aleti",
        quantity:3,
        unitPrice:4500
    },
    {
        id:5,
        productName:"Defter",
        quantity:2,
        unitPrice:2500
    },
    {
        id:6,
        productName:"Kalem",
        quantity:10,
        unitPrice:8000
    },
    {
        id:7,
        productName:"Pot",
        quantity:6,
        unitPrice:3790
    },
]

// map iterate eder ve istersek üzerinde bir islem yapıp bize yeni bir array verebilir.
// cart.map(product =>{console.log(product.productName)})

console.log("<ul>")
cart.map(product =>{
    console.log("<li>" +product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")


// 0 acc nin ilk degeridif.
let total = cart.reduce((acc,product) => acc + product.unitPrice, 0)
console.log("total",total)

let total2 = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity, 0)
console.log("total2",total2)
// sarta uyanlar quantityover2 içine atıyor.
let quantityOver2 = cart.filter(product=>product.quantity>5 )


console.log("quantityOver2",quantityOver2)




// sepete yeni bir eleman ekleyelim
// cart.push({
//     id:8,
//     productName:"Masa",
//     quantity:1,
//     unitPrice:1500
// })

// SPA ( Single Page Application)

// alt kısımdaki fonksiyonda cartın referansına push etmiş oluyoruz
function addToCart (sepet){
    sepet.push({
        id:8,
        productName:"Masa",
        quantity:1,
        unitPrice:1500
    })
}
addToCart(cart)
console.log(cart)

// Asagıdaki yapıda ise sayının degerini arttırıyoruz ve isimiz bitiyor.

let sayi =10
const sayiTopla = (number) =>{
    number += 1
} 
sayiTopla(sayi)
console.log(sayi) // yani buradaki degerimiz 10 olarak cıktı verir.