// "close" button  to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on an item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Adding an element to the list
function addElement(){
 
    //appending element to list
    var list = document.createElement("li");
    var inputValue = document.getElementById("userInput").value;
    var newtext = document.createTextNode(inputValue);
    list.appendChild(newtext);
    list.className ="newlist";
    
    if (inputValue === '') {
        alert("OOPS..!! Please write something to the list!");
    }
    else {
        document.getElementById("myList").appendChild(list);
    }
    document.getElementById("userInput").value = "";

    var span = document.createElement("span");
    span.className = "deleteButton";
    var newtext = document.createTextNode("x");
    span.className = "close";
    span.appendChild(newtext);
    list.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    displayCount();
}

//To make all the lists checked on click of complete all
function completeAll(){
  var j;
  for (j = 0; j < myNodelist.length; j++) {
    myNodelist[j].classList.add("checked");
  }
  displayCount();
}
//To clear all completed tasks
var completedElement = document.getElementsByClassName("checked");
function clearCompleted(){
  
  var j;
  for (j = 0; j < completedElement.length; j++) {
    completedElement[j].style.display = "none";
  }
}
//To list down all tasks
function allTasks(){
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.display = "block";
  }
}
//To list down completed tasks
function completed(){
  for(let i=0;i<myNodelist.length;i++){
    myNodelist[i].style.display = "none";
  }
  for (j = 0; j < completedElement.length; j++) {
    completedElement[j].style.display = "block";
  }
}
//To display the number of tasks left
document.getElementById("myList").addEventListener("click", displayCount);
function displayCount() {
  document.getElementById("count").innerHTML = myNodelist.length - completedElement.length;
}
//To display count on page load
function loading(){
  displayCount();
 
}





