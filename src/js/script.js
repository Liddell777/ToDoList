const plusButton = document.getElementById('plus_button');
const taskInput =  document.getElementById('task_input');
const taskList = document.querySelector('.maine');


let toDoList =[];

let toDoItemEl =[];

if (localStorage.getItem('todo')) {
    toDoList = JSON.parse(localStorage.getItem('todo'));
    outRender();
}

// create a function that will be add new task in the list
plusButton.addEventListener('click', function(){
    
    let newToDo = {
        todo: taskInput.value,
        checked: false,
        important: false
    };

    toDoList.push(newToDo);
    outRender();
    updateStorage();
    // clear input before type
    taskInput.value =''; 
});

// create a function that will be checked task
const completeTask = index => {
    toDoList[index].checked = !toDoList[index].checked;
    let addTaskClass = (toDoList[index].checked) ? toDoItemEl[index].classList.add('.checked') : 
    toDoItemEl[index].classList.remove('.checked');
    outRender();
    updateStorage();
}

// create a function that will be delete task 
const deleteTask = index => {
    toDoList.splice(index,1);
    outRender();
    updateStorage();
}


// create a function that will be add a localStorage 
function updateStorage() {
    localStorage.setItem('todo', JSON.stringify(toDoList));
}

// create a function that will be render all tasks from toDoList
function outRender() {
    let displayedMessage = '';
    if (toDoList.length >= 0) {
        toDoList.forEach(function(item, i){
            displayedMessage += `
            <li class='maine__item '>
                <input onclick= 'completeTask(${i})' class='item__input' type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
                <label for='item_${i}' class='item__label ${item.checked ? 'checked' : ''}'>
                    ${item.todo}
                </label>
                <button onclick= 'deleteTask(${i})' class='main__btn'>Delete</button>     
            </li> 
            `; 
        });
        taskList.innerHTML = displayedMessage;
        toDoItemEl = document.getElementsByClassName('maine__item');
    }
} 

// create a function that will be filter completed task and send them down the list
/* const filterTask = () => {
    const activeTasks = toDoItemEl.length && toDoItemEl.filter(item => item.checked == false);
    const checkedTasks = toDoItemEl.length && toDoItemEl.filter(item => item.checked == true);
    toDoList = [...activeTasks,...checkedTasks];
    console.log(activeTasks,checkedTasks);
}
 */
