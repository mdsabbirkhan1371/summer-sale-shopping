// entry function 

function  addItemsEntry (itemName,price){
    const elementContainer = document.getElementById('element-container');
    const p = document.createElement('p');
    const count = elementContainer.childElementCount;
    p.innerHTML =`${count} . ${itemName} : ${price} tk`;
    elementContainer.appendChild(p);
    const preTotalElement = document.getElementById('totalPrice');
    const preTotalString = preTotalElement.innerText;
    const preTotal = parseFloat(preTotalString);
    const total = preTotal +price ;
    preTotalElement.innerText = total;

}

// get name information 
function getName(nameId){
    const nameElement =document.getElementById(nameId);
    const name = nameElement.innerText;
    return name;
}

// get price information 
function getPrice (priceId){
    const priceElement = document.getElementById(priceId);
    const priceString = priceElement.innerText;
    const price = parseFloat(priceString);
    return price;
}