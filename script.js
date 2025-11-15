let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderList() {
  const ul = document.getElementById("todoList");
  ul.innerHTML = "";

  todos.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${item}</span>
      <span>
        <button onclick="editItem(${index})">Edit</button>
        <button onclick="deleteItem(${index})">Delete</button>
      </span>
    `;

    ul.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();

  if (text === "") return;
  
  todos.push(text);
  saveToLocalStorage();
  renderList();
  
  input.value = "";
}

function deleteItem(index) {
  todos.splice(index, 1);
  saveToLocalStorage();
  renderList();
}

function editItem(index) {
  const newValue = prompt("Edit item:", todos[index]);
  if (newValue !== null && newValue.trim() !== "") {
    todos[index] = newValue.trim();
    saveToLocalStorage();
    renderList();
  }
}

renderList();
