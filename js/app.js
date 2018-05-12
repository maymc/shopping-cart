var cartItems = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

var cartElem = document.getElementById("cart");


for(var i=0; i<cartItems.length; i++){
	var divElem = document.createElement("div");
	divElem.className = "item";
	cartElem.appendChild(divElem);


	var pElem = document.createElement("p");
	pElem.id = "product";
	pElem.innerHTML = cartItems[i].product;
	divElem.appendChild(pElem);

	var descriptionElem = document.createElement("p");
	descriptionElem.id = "description";
	descriptionElem.innerHTML = cartItems[i].description;
	divElem.appendChild(descriptionElem);

	var priceElem = document.createElement("p");
	priceElem.id = "price";
	priceElem.innerHTML = cartItems[i].price;
	divElem.appendChild(priceElem);
}
