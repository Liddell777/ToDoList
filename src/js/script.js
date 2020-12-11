
let inputBtn = document.querySelector('.input__btn'),
 inputUser =  document.querySelector('.input__user'),
 toDo = document.querySelector('.maine');

// create a function that will be add new task in the list  
let toDoList = [];

inputBtn.addEventListener('click', function(){
    let newToDo = {
        todo: inputUser.value,
        checked: false,
        important: false
    };

    toDoList.push(newToDo);

    console.log(toDoList);
    outRender();
});

// create a function that will be render all tasks from toDoList
function outRender(){

    let displayMassage ='';
    toDoList.forEach(function(item, i){

        displayMassage += `
        <li class='maine__item'>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked': ''}>
            <label for='item_${i}'>${item.todo}</label>
        </li>
        `;
        toDo.innerHTML = displayMassage;
    });
} 

