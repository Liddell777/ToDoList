/*const UserArr = [];

function addInformArr (text) {
    UserArr.push({
        text: text,
        status: false
    })
    console.log(UserArr);
}

function pushButton (event) {
    let elem = document.getElementById("UserTxt");
    const text = elem.value;
    addInformArr(text); 
} */
let inputBtn = document.querySelector('.input__btn'),
 inputUser =  document.querySelector('.input__user'),
 todo = document.querySelector('.maine__item');

// create a function that will be add new task in the list  
let toDoList= [];

inputBtn.addEventListener('click', function (){

    let newToDo = {
        todo: inputUser.value,
        checked: false,
        important: false
    }

    toDoList.push(newToDo);
    console.log(newToDo);
});
