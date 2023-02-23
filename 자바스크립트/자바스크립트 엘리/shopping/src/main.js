//Fetch the items from the JSON file
function loadItems(){
    // setTimeout(()=>{},5000)
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items)
}

// Update the list with the given items
function displayItems(items){
    const container = document.querySelector('.items');
    const html = container.innerHTML = items.map(item => createHTMLString(item)).join('');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');

}

function onButtonClick(event, items){
    const datset = event.target.dataset;
    const key = datset.key;
    const value = datset.value;
    if(key == null || value == null) return;

    const filter =  items.filter(item => item[key] === value);
    console.log(filter);
    displayItems(items.filter(item => item[key] === value));
}

//Create HTML list item from the given data item
function createHTMLString(item){
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item_thembnail">
            <span class="item_description">${item.gender}, ${item.size}</span>
        </li>
    `;
}

function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click',()=>displayItems(items));
    buttons.addEventListener('click', event=>onButtonClick(event, items));
}

//main
loadItems()
    .then(items => {
        console.log(items);
         displayItems(items);
         setEventListeners(items);
    })
    .catch(console.log());

