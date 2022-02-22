




const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const wrapper = document.querySelector('.wrapper');

function item(itemName) {
    createDiv(itemName);
}
function createDiv(itemName) {
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.type = "text";

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    let editButton = document.createElement('button');
    editButton.classList.add('editButton');

    let removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');

    /*let editicon = document.createElement('i')
    editicon.classList.add("fas", "fa-edit");*/
    editButton.innerText="Edit";

    let removeicon = document.createElement('i')
    removeicon.classList.add("fas", "fa-trash-alt");


    wrapper.appendChild(itemBox);

    //editButton.appendChild(editicon);
    removeButton.appendChild(removeicon);

    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener('click', function(e){
        e.preventDefault();
        edit(input,this);
    });

    removeButton.addEventListener('click',function(e){
        e.preventDefault();
        remove(itemBox);
    });
}



function edit(input,button) {
    input.disabled = !input.disabled;
    if(!input.disabled){
        input.focus();
        button.innerText="Update";
    }
    else{
        button.innerText = "Edit";
    }
}
function remove(item) {
    wrapper.removeChild(item);
}


function check() {
    input.classList.remove('error');
    if (input.value != "") {
        item(input.value);
        input.value = "";
    }
    else{
        input.classList.add('error');
        input.focus();
    }
}

addButton.addEventListener('click', check)
window.addEventListener('keydown', (e) => {
    console.log(e.which);
    if (e.which == 13) {
        check();
    }
})







