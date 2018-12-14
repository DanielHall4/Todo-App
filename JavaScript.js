
// Pop up gets displayed when button is pressed
document.getElementById("pop-up-button").onclick = function display(){
    document.getElementById("pop-up").style.display = "block";
}

// Displays Todo
document.getElementById("add").onclick = function addTodos(){
    var getContainer = document.getElementById("todoContainer");
    var input = document.getElementById("input").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    getContainer.appendChild(li);
    document.getElementById("input").value = "";
    // Remove Item
    li.onclick = function removeItem(){
        getContainer.removeChild(li);
    }
    // Pop up removed from screen after todo added
    document.getElementById("pop-up").style.display = "none";
}

document.querySelector("I").onclick = function closePopUp(){
    document.getElementById("pop-up").style.display = "none";
}


