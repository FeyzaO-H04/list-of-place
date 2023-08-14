const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const submitEl = document.getElementById("submit-el")
const messageError = document.getElementById("message-error")

// error message
inputEl.addEventListener("input", (e) => {
  if (!errorMessage(e.target.value)) return
  messageError.textContent = ""
}) 

function errorMessage(placeData) {
  if( placeData.length < 3) {
    messageError.textContent = "Please enter a word with more than three letters!"
    return
  }
  return true
}

// function displays the information entered in the input as a list when the submit button is pressed.
submitEl.addEventListener("click", function() {

  if(inputEl.value === "") {
    alert("You must write something!")
  }if(inputEl.value.length < 3){
    li.textContent = ""

  }else {
    let li = document.createElement("li")
    li.textContent = inputEl.value;
    ulEl.appendChild(li);
    let span = document.createElement("span");
    span.className = "remove"
    span.innerHTML = "\u00d7";
    li.appendChild(span);  
  }
    inputEl.value = "";
    saveData(inputEl.value);
});

// function deletes the desired item in the list.
ulEl.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
  }
  else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
  }
}, false);



