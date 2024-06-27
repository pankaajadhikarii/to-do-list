const button = document.querySelector("#btn");
const list = document.querySelector(".list");
const input = document.querySelector("#input-box");

function addText() {
  if (input.value === "") {
    alert("Add some text!!!");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.textContent = input.value;
    list.appendChild(li);
    span.innerHTML = "x";
    li.appendChild(span);
  }
  input.value = " ";
}

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else {
    e.target.parentNode.remove();
  }
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addText();
  }
});