const list = document.querySelector('ul');
const input = document.querySelector('input');
const addItem = document.querySelector('button');

addItem.addEventListener ( 'click', () =>{
    const myItem = input.value;
    input.value = "";

    const itemList = document.createElement('li');
    const span = document.createElement('span');
    const listButton = document.createElement('button');
    

    itemList.appendChild(span);
    span.textContent = myItem;
    itemList.appendChild(listButton);
    listButton.textContent = 'Delete';
    list.appendChild(itemList);


    listButton.addEventListener('click', () =>{
        list.removeChild(itemList);
    })
   
    input.focus();
})


