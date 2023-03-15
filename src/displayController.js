import format from 'date-fns/format';
import MenuImg from './images/options.svg';
import HighPriorityImg from './images/alert-triangle.svg';
import MediumPriorityImg from './images/triangle.svg';
import LowPriorityImg from './images/circle.svg';
import NotesImg from './images/book.svg';
import ChecksImg from './images/check-square.svg';
import PauseImg from './images/pause.svg';
import CompletedImg from './images/check.svg';
import DeleteImg from './images/x-circle.svg';

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
      hiddenLi2.appendChild(deleteButton);
      optionsUl.appendChild(hiddenLi2);
    }
  }
  function displayToDos(toDoList) {
    while (todos.firstChild) {
      todos.removeChild(todos.lastChild);
    }

    for (let i = 0; i < toDoList.length; i++) {
      const card = document.createElement('div');
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
      cardDescriptionButton.textContent = toDoList[i].getDescription();
      cardDescription.appendChild(cardDescriptionButton);
      card.appendChild(cardDescription);

      const cardPriority = document.createElement('div');
      cardPriority.setAttribute('class', 'card-priority');
      const cardPriorityButton = document.createElement('button');
      cardPriorityButton.setAttribute('class', 'card-priority-button');
      const cardPriorityImage = document.createElement('img');
      switch (toDoList[i].getPriority()) {
        case 0:
          cardPriorityImage.setAttribute('src', HighPriorityImg);
          break;
        case 1:
          cardPriorityImage.setAttribute('src', MediumPriorityImg);
          break;
        case 2:
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
    }
  }
  function displayDate() {
    // eslint-disable-next-line quotes
    const formatted = format(new Date(), "cccc', 'do LLLL");
    dateDiv.textContent = formatted;
    console.log('done');
  }

  return {
    displayProjects,
    displayToDos,
    displayDate,
  };
}
