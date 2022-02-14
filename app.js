function updateCartNumber(inputFeild, isIncrsing){
    const itemIput = document.getElementById(inputFeild);
    let itemNumber = itemIput.value;
    if(isIncrsing){
        itemNumber = parseInt(itemNumber) + 1;
    }
    else if(itemNumber > 0){
        itemNumber = parseInt(itemNumber) - 1;
    }
    itemIput.value = itemNumber
    if(inputFeild == 'phone-input'){
        const itemPhonePrice = document.getElementById('phone-price');
        itemPhonePrice.innerText = 1219 * itemNumber;
    }
    else if(inputFeild == 'case-input'){
        const itemCasePrice = document.getElementById('case-price');
        itemCasePrice.innerText = 59 * itemNumber;
    }

   
}

// phone cart plus/minus

document.getElementById('phone-plus').addEventListener('click',function(){
    updateCartNumber('phone-input', true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCartNumber('phone-input', false);
})

// case cart plus/minus

document.getElementById('case-plus').addEventListener('click',function(){
   updateCartNumber('case-input', true);
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateCartNumber('case-input', false)
})
