const products = [

{
name:"Iron Dome Trader EA",
image:"https://picsum.photos/500/300",
link:"product/iron-dome-ea.html"
}

]

const container = document.getElementById("products")

products.forEach(p=>{

const card = document.createElement("div")

card.className="card"

card.innerHTML=`

<img src="${p.image}">

<h3>${p.name}</h3>

<a href="${p.link}">

<button>View Details</button>

</a>

`

container.appendChild(card)

})

{
name:"Trading Journal Pro",
image:"images/journal.jpg",
link:"product/journal.html"
}
