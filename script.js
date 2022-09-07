'use strict';

const todoText = document.getElementById('text');
const saveBtn = document.querySelector('.save-btn');
const todoList = document.querySelector('.list');
const todoItem = document.querySelector('.todo-item');
const filter = document.querySelector('.filter');
const search = document.querySelector('.text1');
const li = todoList.querySelectorAll('div.todo-div');

// adding todo list
saveBtn.addEventListener('click', function () {
  event.preventDefault();

  if (todoText.value !== '') {
    const myList = document.createElement('div');
    myList.classList.add('todo-div');

    const newtodoList = document.createElement('li');
    newtodoList.classList.add('todo-item');
    // newtodoList.innerText = todoText.value;
    myList.appendChild(newtodoList);

    const tagName = document.createElement('a');
    tagName.classList.add('a');
    tagName.innerHTML = todoText.value;
    newtodoList.appendChild(tagName);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('check');
    completeBtn.innerHTML = '✅';
    myList.appendChild(completeBtn);

    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash');
    trashBtn.innerHTML = '🚮';
    myList.appendChild(trashBtn);

    todoList.appendChild(myList);
  }

  todoText.value = '';
});

// implementing completed and trash btn
todoList.addEventListener('click', function (a) {
  const clicked = a.target;

  // complete btn
  if (clicked.classList[0] === 'check') {
    const list = clicked.parentElement;
    list.classList.toggle('done');

    // trash btn
  } else if (clicked.classList[0] === 'trash') {
    const listT = clicked.parentElement;
    listT.classList.add('hidden');
    listT.addEventListener('transitionend', function () {
      listT.remove();
    });
  }
});

// implementing search btn
search.addEventListener('keyup', function searchTodo() {
  const searchValue = search.value.toLowerCase();

  const li = todoList.querySelectorAll('div.todo-div');

  // // looping through collection
  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName('a')[0];

    if (a.innerHTML.toLowerCase().indexOf(searchValue) > -1) {
      li[i].classList.remove('hide');
    } else {
      li[i].classList.add('hide');
    }
  }
});

//  implementing filter btn
filter.addEventListener('change', function () {
  // select the list to filter
  const filt = document.querySelectorAll('.todo-div');

  // loop through the list
  filt.forEach(b => {
    for (let a = 0; a < filt.length; a++) {
      switch (filter.value) {
        // option 'ALL"
        case 'ALL':
          filt[a].style.display = '';
          break;
        // option 'COMPLETED'
        case 'COMPLETED':
          if (filt[a].classList.contains('done')) {
            filt[a].style.display = '';
          } else {
            filt[a].style.display = 'none';
          }
          break;
        // option 'PENDING'
        case 'PENDING':
          if (filt[a].classList.contains('done')) {
            filt[a].style.display = 'none';
          } else {
            filt[a].style.display = '';
          }
          break;
      }
    }
  });
});
