// Item Data (array of objects)
var itemsData = [
{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, 

{product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, 

{product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, 

{product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, 

{product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, 

{product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

// Add divs for the product name, description, and price
var cartItemsElem = document.getElementsByClassName("cartItems");

for(var i=0; i<cartItemsElem.length; i++){
	var product = document.createElement('p');
	product.className = "product";
	cartItemsElem[i].appendChild(product);	

	var descrip = document.createElement('p');
	descrip.className = "descrip";
	cartItemsElem[i].appendChild(descrip);	

	var price = document.createElement('p');
	price.className = "price";
	cartItemsElem[i].appendChild(price);

}

// Populate the product name, description, and price from the Items Data array
for(var k=0; k<itemsData.length; k++){
	//console.log(itemsData[k].product);

	var prodElem = document.getElementsByClassName("product");
	prodElem[k].innerHTML = itemsData[k].product;	

	var descripElem = document.getElementsByClassName("descrip");
	descripElem[k].innerHTML = itemsData[k].description;	

	var priceElem = document.getElementsByClassName("price");
	priceElem[k].innerHTML = "$" + itemsData[k].price;

}

var subTotal = document.createElement('div');
subTotal.id = "subTotal";

//add the prices to get the subtotal
var totalPrice = 0;
for(var j=0; j<itemsData.length; j++){

	//console.log(priceElem[j].innerHTML);
	totalPrice += itemsData[j].price;
	//console.log(totalPrice);
}

subTotal.innerHTML = totalPrice;
main.appendChild(subTotal);








