import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import MenuImg from './images/options.svg';
import HighPriorityImg from './images/alert-triangle.svg';
import MediumPriorityImg from './images/triangle.svg';
import LowPriorityImg from './images/circle.svg';
import NotesImg from './images/book.svg';
import ChecksImg from './images/check-square.svg';
import PauseImg from './images/pause.svg';
import PlayImg from './images/play.svg';
import CompletedImg from './images/check.svg';
import DeleteImg from './images/x-circle.svg';
import PlusImg from './images/plus.svg';

export default function displayController() {
  const dateDiv = document.querySelector('.header-date');
  const projectsUl = document.querySelector('.projects-list');
  const todos = document.getElementById('todos');

  function displayProjects(projectList) {
    while (projectsUl.firstChild) {
      projectsUl.removeChild(projectsUl.lastChild);
    }
    for (let i = 0; i < projectList.length; i++) {
      const li = document.createElement('li');
      li.setAttribute('class', 'project');
      projectsUl.appendChild(li);

      const titleButton = document.createElement('button');
      titleButton.setAttribute('class', 'project-button');
      titleButton.textContent = projectList[i].getTitle();
      li.appendChild(titleButton);

      const modifyButton = document.createElement('button');
      modifyButton.setAttribute('class', 'project-modify');
      const modifyImage = document.createElement('img');
      modifyImage.setAttribute('src', MenuImg);
      modifyButton.appendChild(modifyImage);
      li.appendChild(modifyButton);

      const optionsUl = document.createElement('ul');
      optionsUl.setAttribute('class', 'project-popups');
      li.appendChild(optionsUl);

      const hiddenLi = document.createElement('li');

      const editButton = document.createElement('button');
      editButton.setAttribute('class', 'project-edit');
      editButton.textContent = 'Edit';
      hiddenLi.appendChild(editButton);
      optionsUl.appendChild(hiddenLi);

      const hiddenLi2 = document.createElement('li');
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'project-delete');
      deleteButton.textContent = 'Delete';
      deleteButton.dataset.title = projectList[i].getTitle();
      hiddenLi2.appendChild(deleteButton);
      optionsUl.appendChild(hiddenLi2);
    }
  }

  function pauseCard(card, date = new Date()) {
    const img = card.querySelector('.card-pause-button > img');
    const datePausedDiv = card.querySelector('.paused-date');
    const cardDatePaused = card.querySelector('.card-date-paused');
    card.classList.add('card-paused');
    img.setAttribute('src', PlayImg);
    datePausedDiv.textContent = format(date, 'dd-MM-yyyy');
    if (!cardDatePaused.classList.contains('active')) {
      cardDatePaused.classList.add('active');
    }
  }

  function resumeCard(card, date = new Date()) {
    const img = card.querySelector('.card-pause-button > img');
    const dateResumedDiv = card.querySelector('.resumed-date');
    const cardDateResumed = card.querySelector('.card-date-resumed');
    card.classList.remove('card-paused');
    img.setAttribute('src', PauseImg);
    dateResumedDiv.textContent = format(date, 'dd-MM-yyyy');
    if (!cardDateResumed.classList.contains('active')) {
      cardDateResumed.classList.add('active');
    }
  }

  function pauseResumeCard(card, date = new Date()) {
    if (card.classList.contains('card-paused')) {
      resumeCard(card, date);
    } else {
      pauseCard(card, date);
    }
  }

  function completeCard(card, date = new Date()) {
    if (card.classList.contains('card-paused')) {
      pauseResumeCard(card, date);
    }
    const daysLeft = card.querySelector('.card-days-left');
    daysLeft.textContent = format(date, 'dd-MM-yyyy');
    card.classList.toggle('card-done');
  }

  function displayAddToDo() {
    const card = document.createElement('div');
    card.setAttribute('class', 'add-card');
    todos.appendChild(card);
    const button = document.createElement('button');
    button.setAttribute('id', 'add-card');
    card.appendChild(button);
    const image = document.createElement('img');
    image.setAttribute('src', PlusImg);
    button.appendChild(image);
  }

  function displayToDos(toDoList) {
    while (todos.firstChild) {
      todos.removeChild(todos.lastChild);
    }

    for (let i = 0; i < toDoList.length; i++) {
      const card = document.createElement('div');
      card.dataset.title = toDoList[i].getTitle();
      card.setAttribute('class', 'card');
      todos.appendChild(card);

      const cardTitle = document.createElement('div');
      cardTitle.setAttribute('class', 'card-title');
      cardTitle.textContent = toDoList[i].getTitle();
      card.appendChild(cardTitle);

      const cardDescription = document.createElement('div');
      cardDescription.setAttribute('class', 'card-description');
      const cardDescriptionButton = document.createElement('button');
      cardDescriptionButton.setAttribute('class', 'card-description-button');
      if (toDoList[i].getDescription().split(' ').length > 15) {
        cardDescriptionButton.textContent = toDoList[i]
          .getDescription()
          .split(' ')
          .slice(0, 15)
          .join(' ');
      } else {
        cardDescriptionButton.textContent = toDoList[i].getDescription();
      }

      cardDescription.appendChild(cardDescriptionButton);
      card.appendChild(cardDescription);

      const cardDateDetails = document.createElement('div');
      cardDateDetails.classList.add('card-date-details');

      const cardDateCreated = document.createElement('div');
      const cardDateCreatedDiv = document.createElement('div');
      cardDateCreated.classList.add('card-date-created');
      cardDateCreatedDiv.textContent = 'Created on:';
      cardDateCreated.appendChild(cardDateCreatedDiv);
      const createdDate = document.createElement('div');
      createdDate.classList.add('created-date');
      createdDate.textContent = format(
        toDoList[i].getDateCreated(),
        'dd-MM-yyyy'
      );
      cardDateCreated.appendChild(createdDate);
      cardDateDetails.appendChild(cardDateCreated);

      const cardDatePaused = document.createElement('div');
      const cardDatePausedDiv = document.createElement('div');
      cardDatePaused.classList.add('card-date-paused');
      cardDatePausedDiv.textContent = 'Paused on:';
      cardDatePaused.appendChild(cardDatePausedDiv);
      const pausedDate = document.createElement('div');
      pausedDate.classList.add('paused-date');
      if (typeof toDoList[i].getDatePaused() !== 'undefined') {
        pausedDate.textContent = format(
          toDoList[i].getDatePaused(),
          'dd-MM-yyyy'
        );
        pausedDate.classList.add('active');
      }

      cardDatePaused.appendChild(pausedDate);
      cardDateDetails.appendChild(cardDatePaused);

      const cardDateResumed = document.createElement('div');
      const cardDateResumedDiv = document.createElement('div');
      cardDateResumed.classList.add('card-date-resumed');
      cardDateResumedDiv.textContent = 'Resumed on:';
      cardDateResumed.appendChild(cardDateResumedDiv);
      const resumedDate = document.createElement('div');
      resumedDate.classList.add('resumed-date');
      if (typeof toDoList[i].getDateResumed() !== 'undefined') {
        resumedDate.textContent = format(
          toDoList[i].getDateResumed(),
          'dd-MM-yyyy'
        );
        resumedDate.classList.add('active');
      }

      cardDateResumed.appendChild(resumedDate);
      cardDateDetails.appendChild(cardDateResumed);

      cardDescription.appendChild(cardDateDetails);

      const cardPriority = document.createElement('div');
      cardPriority.setAttribute('class', 'card-priority');
      const cardPriorityButton = document.createElement('button');
      cardPriorityButton.setAttribute('class', 'card-priority-button');
      const cardPriorityImage = document.createElement('img');
      switch (toDoList[i].getPriority()) {
        case '0':
          cardPriorityImage.setAttribute('src', HighPriorityImg);
          break;
        case '1':
          cardPriorityImage.setAttribute('src', MediumPriorityImg);
          break;
        case '2':
          cardPriorityImage.setAttribute('src', LowPriorityImg);
          break;
        default:
          break;
      }
      cardPriorityButton.appendChild(cardPriorityImage);
      cardPriority.appendChild(cardPriorityButton);
      card.appendChild(cardPriority);

      const cardDueDate = document.createElement('div');
      cardDueDate.setAttribute('class', 'card-due-date');
      const cardDueDateButton = document.createElement('button');
      cardDueDateButton.setAttribute('class', 'card-due-date-button');
      cardDueDateButton.textContent = format(
        toDoList[i].getDueDate(),
        'dd-MM-yyyy'
      );
      cardDueDate.appendChild(cardDueDateButton);
      card.appendChild(cardDueDate);

      const cardDaysLeft = document.createElement('div');
      cardDaysLeft.setAttribute('class', 'card-days-left');
      cardDaysLeft.textContent = `Days left: ${toDoList[i].getDaysLeft()}`;
      card.appendChild(cardDaysLeft);

      const cardExtraButtons = document.createElement('div');
      cardExtraButtons.setAttribute('class', 'card-extra-buttons');

      const cardNotesButton = document.createElement('button');
      cardNotesButton.setAttribute('class', 'card-notes-button');
      const cardNotesImage = document.createElement('img');
      cardNotesImage.setAttribute('src', NotesImg);
      cardNotesButton.appendChild(cardNotesImage);
      cardExtraButtons.appendChild(cardNotesButton);

      const cardChecksButton = document.createElement('button');
      cardChecksButton.setAttribute('class', 'card-checks-button');
      const cardChecksImage = document.createElement('img');
      cardChecksImage.setAttribute('src', ChecksImg);
      cardChecksButton.appendChild(cardChecksImage);
      cardExtraButtons.appendChild(cardChecksButton);

      card.appendChild(cardExtraButtons);

      const cardControlButtons = document.createElement('div');
      cardControlButtons.setAttribute('class', 'card-control-buttons');

      const cardPauseButton = document.createElement('button');
      cardPauseButton.setAttribute('class', 'card-pause-button');
      const cardPauseImage = document.createElement('img');
      cardPauseImage.setAttribute('src', PauseImg);
      cardPauseButton.appendChild(cardPauseImage);
      cardControlButtons.appendChild(cardPauseButton);

      const cardCompleteButton = document.createElement('button');
      cardCompleteButton.setAttribute('class', 'card-complete-button');
      const cardCompleteImage = document.createElement('img');
      cardCompleteImage.setAttribute('src', CompletedImg);
      cardCompleteButton.appendChild(cardCompleteImage);
      cardControlButtons.appendChild(cardCompleteButton);

      const cardDeleteButton = document.createElement('button');
      cardDeleteButton.setAttribute('class', 'card-delete-button');
      const cardDeleteImage = document.createElement('img');
      cardDeleteImage.setAttribute('src', DeleteImg);
      cardDeleteButton.appendChild(cardDeleteImage);
      cardControlButtons.appendChild(cardDeleteButton);

      card.appendChild(cardControlButtons);

      switch (toDoList[i].getStatus()) {
        case 0:
          break;
        case 1:
          pauseCard(card, toDoList[i].getDatePaused());
          break;
        case 2:
          completeCard(card, toDoList[i].getDateResumed());
          break;
        default:
          break;
      }
    }
    displayAddToDo();
  }

  function displayDate() {
    // eslint-disable-next-line quotes
    const formatted = format(new Date(), "cccc', 'do LLLL");
    dateDiv.textContent = formatted;
    console.log('done');
  }

  function refreshNotes(toDo) {
    const noteList = document.querySelector('.note-list');
    while (noteList.firstChild) {
      noteList.removeChild(noteList.lastChild);
    }
    for (const note of toDo.getNotes()) {
      const div = document.createElement('div');
      noteList.appendChild(div);
      const p = document.createElement('p');
      p.textContent = note;
      div.appendChild(p);
      const button = document.createElement('button');
      button.classList.add('delete-note');
      button.textContent = 'x';
      div.appendChild(button);
    }
  }

  function refreshCheckpoints(toDo) {
    const checkpointList = document.querySelector('.checkpoint-list');
    while (checkpointList.firstChild) {
      checkpointList.removeChild(checkpointList.lastChild);
    }
    for (const checkpoint of toDo.getCheckpoints()) {
      const checkpointDiv = document.createElement('div');
      checkpointDiv.classList.add('checkpoint');
      checkpointList.appendChild(checkpointDiv);
      const div = document.createElement('div');
      checkpointDiv.appendChild(div);
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', 'checkpoint');
      input.setAttribute('name', 'checkpoint');
      div.appendChild(input);
      const label = document.createElement('label');
      label.setAttribute('for', 'checkpoint');
      label.textContent = checkpoint;
      div.appendChild(label);
      const button = document.createElement('button');
      button.classList.add('delete-checkpoint');
      button.textContent = 'x';
      checkpointDiv.appendChild(button);
    }
  }

  function populateToDoSettings(todo) {
    const form = document.querySelector('.form.toDo-settings');

    const title = form.querySelector('#toDo-title');
    title.value = todo.getTitle();

    const description = form.querySelector('textarea');
    description.value = todo.getDescription();

    const priority = form.querySelector('#toDo-priority');
    priority.value = todo.getPriority();

    const date = form.querySelector('#toDo-due-date');
    date.value = format(todo.getDueDate(), 'yyyy-MM-dd');
  }

  function displayPriorityForm(toDo) {
    const form = document.querySelector('.form.change-priority');
    const label = form.querySelector('label');
    label.value = toDo.getPriority();
    form.dataset.title = toDo.getTitle();
    form.classList.add('active');
  }

  function displayCheckpointsForm(toDo) {
    const form = document.querySelector('.form.checkpoints');
    refreshCheckpoints(toDo);
    form.dataset.title = toDo.getTitle();
    form.classList.add('active');
  }

  function displayDateForm(toDo) {
    const form = document.querySelector('.form.change-date');
    const label = form.querySelector('label');
    label.value = toDo.getDueDate();
    form.dataset.title = toDo.getTitle();
    form.classList.add('active');
  }

  function displayNotesForm(toDo) {
    const form = document.querySelector('.form.notes');
    refreshNotes(toDo);
    form.dataset.title = toDo.getTitle();
    form.classList.add('active');
  }

  function clearToDos() {
    while (todos.firstChild) {
      todos.removeChild(todos.lastChild);
    }
  }
  return {
    displayProjects,
    displayToDos,
    displayDate,
    displayAddToDo,
    refreshNotes,
    refreshCheckpoints,
    populateToDoSettings,
    pauseResumeCard,
    completeCard,
    displayPriorityForm,
    displayCheckpointsForm,
    displayDateForm,
    displayNotesForm,
    clearToDos,
  };
}
