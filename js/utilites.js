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
    console.log(total)
    document.getElementById('button').addEventListener('click',function(){
        const inputFieldElement = document.getElementById('inputFiled');
        const inputFiled = inputFieldElement.value;
        if(inputFiled ==='SELL200'){
            const discount = total *0.20;
            const disCountTotal = document.getElementById('discount');
            disCountTotal.innerText=discount;
            const disCountAmount = total -discount;
            const afterDiscount = document.getElementById('afterDiscountTotal');
            afterDiscount.innerText =disCountAmount;
        
        }
        inputFieldElement.value = '';
    })

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

