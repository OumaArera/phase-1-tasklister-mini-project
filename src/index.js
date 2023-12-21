document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener('submit', event => {
    event.preventDefault();
    handleTask(event.target.new_task_description.value);
    form.reset();
  })
});
// This function  creates p tag and a button for it
// content of p is x
// The function also listens to click on p content
// 
const handleTask = event => {
  let p = document.createElement('p');
  let btn = document.createElement("button");
  btn.textContent = 'x';
  p.textContent = `${event}`;
  btn.addEventListener("click", handleDelete);
  p.appendChild(btn)
  document.getElementById("to_do_container").appendChild(p);

  // priority is a variable that targets id of select in HTML document
  let priority = event.target.priority_select.value;

  // add a class to the <p> element, depending on the priority
  if (priority === "high") {
    p.classList.add("high-priority");
  } else if (priority === "medium") {
    p.classList.add("medium-priority");
  } else {
    p.classList.add("low-priority");
  }

  // Creates an edit button
  // Listens to click on it
  let editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.addEventListener("click", handleEdit);
  p.appendChild(editBtn);

}



const handleDelete = event => {
  event.target.parentNode.remove()
}

// edit function creates an edit button then enables editing
// It then saves the chanes made
const handleEdit = event => {
  let p = event.target.parentNode;
  let editTaskInput = document.getElementById("edit_task");
  let editTaskBtn = document.createElement("button");
  editTaskBtn.textContent = "save";
  editTaskBtn.addEventListener("click", () => {
    p.textContent = editTaskInput.value;
    p.appendChild(btn);
    p.appendChild(editBtn);
  });
  p.textContent = "";
  p.appendChild(editTaskInput);
  p.appendChild(editTaskBtn);
}
