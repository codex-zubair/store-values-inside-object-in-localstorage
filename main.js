

// TODO Later Remove All console Logs.


// ! Getting Input field Value Start...
let inputFieldValue = (id) => {
    return document.getElementById(`${id}`).value;
}
// ! Getting Input field Value End...



// !Getting value from the storage Start....
gettingLocalStorageValue = () => {
    value = localStorage.getItem('craft');
    obj = JSON.parse(value);
    if (!!obj) {
        
        return obj;
    }

    else
    {
        obj = {};
        return obj;
    }
}
//! Getting value from the storage End....




// !Adding Object properties and set values Start...
addObjectProperties = (object, itemName, itemBudget) => {
    
    object[itemName] = itemBudget;
    localStorage.setItem('craft',JSON.stringify(object));
    location.reload();
}
// !Adding Object properties and set values End...



// !Calling Local Storage And Storing The object values Start.
obj = gettingLocalStorageValue();
// !Calling Local Storage And Storing The object values End.



// ! Error Handling And Display the Object in UI start
if(!!obj)
{
    displayItem(obj);
}
// ! Error Handling And Display the Object in UI End


// !Add item button Section Start...
document.getElementById('add-item').addEventListener('click', async() => {
    
    itemName = inputFieldValue('item-name-input-field');
    itemBudget = inputFieldValue('item-budget-input-field');
    await addObjectProperties(obj,itemName,itemBudget);
    
});
// !Add item button Section End...



// TODO Show Items in UI 
// ! Display Items in console start.
function displayItem(object)
{
    // console.log(object);

    for(keys in object)
    {
        console.log(keys,':' , object[keys]);
    }

} 
// ! Display Items in console End.



// !clear All Start
clearAll = ()=>{
    localStorage.clear();
    gettingLocalStorageValue();
}
// !clear All End