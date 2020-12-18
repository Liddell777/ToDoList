
let inputBtn = document.querySelector('.input__btn'),
 inputUser =  document.querySelector('.input__user'),
 toDo = document.querySelector('.maine');

// create a function that will be add new task in the list  
let toDoList =[];

let toDoItemEl =[];

if (localStorage.getItem('todo')) {
    toDoList = JSON.parse(localStorage.getItem('todo'));
    outRender();
}

inputBtn.addEventListener('click', function(){

    let newToDo = {
        todo: inputUser.value,
        checked: false,
        important: false
    };

    toDoList.push(newToDo);
    outRender();
    // create localstorage 
    localStorage.setItem('todo', JSON.stringify(toDoList));
});

const completeTask = index => {
    console.log(index);
    toDoList[index].checked = !toDoList[index].checked;
    if(toDoList[index].checked) {
        toDoItemEl[index].classList.add('.checked');
    } else {
        toDoItemEl[index].classList.remove('.checked');
    }
    outRender();
    localStorage.setItem('todo', JSON.stringify(toDoList));
}

// create a function that will be render all tasks from toDoList
function outRender() {
    let displayMassage ='';
    if (toDoList.length > 0) {
        toDoList.forEach(function(item, i){
            displayMassage += `
            <li class='maine__item ${item.checked ? 'checked' : ''}'>
                <input onclick= 'completeTask(${i})' class='item__input' type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
                <label for='item_${i}' class='item__label'>${item.todo}</label>
                <button class='main__btn'>Delete</button>
            </li>
            `; 
        });
        toDo.innerHTML = displayMassage;
        toDoItemEl = document.querySelectorAll('.maine__item');
    }
} 

/* toDo.addEventListener('change', function(event) {
    let idInput = event.target.getAttribute('id');
    let forLabel = toDo.querySelector('[for='+ idInput +']');
    let valueLable = forLabel.innerHTML;

    toDoList.forEach(function(item) {
        if (item.todo === valueLable) {
            item.checked = !item.checked;
            if (item.checked === true) {
                forLabel.classList.add('item__label-thr');
            }
            localStorage.setItem('toDoList', JSON.stringify(toDoList));
        }
        });
}); */




