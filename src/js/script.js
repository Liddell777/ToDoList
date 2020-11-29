const UserArr = [];

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
}