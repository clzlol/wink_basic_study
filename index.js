const date = document.querySelector(".date");
const day = document.querySelector(".day");
const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const tasksLeft = document.querySelector(".tasks-left");
const todoItemBlocks = document.querySelectorAll(".todo_item_block");
const todoBlock = document.querySelector(".todo_block");
const checkCircle = document.querySelector(".check_circle");
const remove = document.querySelector(".remove");
const circleButton = document.querySelector(".circle_button");
const insertform = document.querySelector(".insertform");
const input = document.querySelector(".input");

//남은 todo
let nLeft = todoBlock.childElementCount;
const left = () => {
  tasksLeft.innerText = "할 일 " + nLeft + "개 남음";
}
left();

//날짜
let today = new Date();
date.innerText = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
day.innerText = week[today.getDay()];


//form visible
insertform.style.display = "none";
circleButton.addEventListener("click", () => {
  if (insertform.style.display == "none") {
    insertform.style.display = "block";
    circleButton.style.transform = "translate(-50%, 50%) rotate(45deg)";
    circleButton.style.background = "#ff6b6b";
  } else {
    insertform.style.display = "none";
    circleButton.style.transform = "translate(-50%, 50%) rotate(0deg)";
    circleButton.style.background = "#38d9a9";
  }
})

//todo 추가 기능
insertform.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTodoItem = document.createElement('div');
  const newCheckCircle = document.createElement('div');
  const newText = document.createElement('div');
  const newRemove = document.createElement('div');

  newTodoItem.className = "todo_item_block";
  newCheckCircle.className = "check_circle";
  newText.className = "text";
  newRemove.className = "remove";

  newCheckCircle.innerText = "V";
  newText.innerText = input.value;
  newRemove.innerText = "del";

  //todo 체크
  newCheckCircle.addEventListener("click", () => {
    if (newCheckCircle.nextElementSibling.style.textDecoration == "line-through") {
      newCheckCircle.style.color = "#ced4da";
      newCheckCircle.style.borderColor = "#ced4da";
      newCheckCircle.nextElementSibling.style.textDecoration = "none";
      newCheckCircle.nextElementSibling.style.color = "#495057";
      nLeft++;
    } else {
      newCheckCircle;
      newCheckCircle.style.color = "#20c997";
      newCheckCircle.style.borderColor = "#20c997";
      newCheckCircle.nextElementSibling.style.textDecoration = "line-through";
      newCheckCircle.nextElementSibling.style.color = "#ced4da";
      nLeft--;
    }
    left();
  })
  //todo 삭제
  newRemove.addEventListener("click", () => {
    newRemove.parentElement.remove();
    nLeft--;
    left();
  })

  newTodoItem.appendChild(newCheckCircle);
  newTodoItem.appendChild(newText);
  newTodoItem.appendChild(newRemove);

  todoBlock.appendChild(newTodoItem);
  input.value = "";
  circleButton.click();
  nLeft++;
  left();
})