let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function () {
    if (inp.value != "") {
        addTask();
    }
});
inp.addEventListener("keypress", function (event) {
    if (event.key == "Enter" && inp.value != "") {
        addTask();
    }
});


function addTask() {
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    item.innerText = inp.value;
    delBtn.innerText = "Delete";
    ul.append(item);
    item.appendChild(delBtn);
    // Add class in delBtns which will be add later..
    delBtn.classList.add("del");
    delBtn.classList.add("delLater");

    // to refresh input box..
    inp.value = "";

    // agar msg hai toh task add hote hi use hata do..
    let msg = document.querySelector(".msg");
    if (msg) {
        msg.remove();
    }
}


// let delBtns = document.querySelectorAll(".del");
// for (btn of delBtns) {
//     btn.addEventListener("click", function (event) {
//         let par = this.parentElement;
//         par.remove();
//     })
// }


// let li = document.querySelectorAll("li");
// for (i of li) {
//     i.addEventListener("click", function (event) {
//         if (event.target.nodeName = "BUTTON") {
//             event.target.parentElement.remove();
//         }
//     })
// }


ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.remove();
    }
})

ul.addEventListener("click", function () {
    if (this.children.length === 0) {
        console.log("no chilren");
        let msg = document.createElement("h1");
        document.querySelector("body").append(msg);
        msg.innerText = "Hurray! you have completed all the tasks :)";
        msg.classList.add("msg");
    }
})

