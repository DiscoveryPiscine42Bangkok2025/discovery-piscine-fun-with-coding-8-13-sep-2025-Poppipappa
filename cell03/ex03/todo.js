window.onload = () => {
  const saved = getCookie("todos");
  if (saved) {
    const todos = JSON.parse(saved);
    todos.forEach(text => addTodo(text, false));
  }
};


function newTodo() {
  const task = prompt("Enter your new TO DO:");
  if (task && task.trim() !== "") {
    addTodo(task, true);
  }
}


function addTodo(text, save) {
  const list = document.getElementById("ft_list");
  const todo = document.createElement("div");
  todo.innerText = text;

  
  todo.onclick = () => {
    if (confirm("Do you want to remove this TO DO?")) {
      list.removeChild(todo);
      updateCookie();
    }
  };


  list.insertBefore(todo, list.firstChild);

  if (save) updateCookie();
}


function updateCookie() {
  const list = document.getElementById("ft_list").children;
  const todos = [];
  for (let i = 0; i < list.length; i++) {
    todos.push(list[i].innerText);
  }
  setCookie("todos", JSON.stringify(todos), 7); // เก็บ 7 วัน
}


function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decoded = decodeURIComponent(document.cookie);
  const ca = decoded.split(';');
  for(let c of ca) {
    c = c.trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}
