import controller from './controller';

export default function attachButonListeners() {
  const projects = controller();

  // buttons
  const homeButtons = document.querySelectorAll('.home-button');
  const projectButtons = document.querySelectorAll('.project-button');
  const projectModifiers = document.querySelectorAll('.project-modify');
  const addProject = document.querySelector('.add-project');
  const toDoPriorityButtons = document.querySelectorAll(
    '.card-priority-button'
  );
  const toDoDatesButtons = document.querySelectorAll('.card-due-date-button');
  const toDoNotesButtons = document.querySelectorAll('.card-notes-button');
  const toDoChecksButtons = document.querySelectorAll('.card-checks-button');
  const toDoPauseButtons = document.querySelectorAll('.card-pause-button');
  const toDoCompleteButtons = document.querySelectorAll(
    '.card-complete-button'
  );
  const toDoDeleteButtons = document.querySelectorAll('.card-delete-button');
  const submitFormButtons = document.querySelectorAll('.form-submit');
  const cancelFormButtons = document.querySelectorAll('.form-cancel');

  const deleteNoteButtons = document.querySelectorAll('.delete-note');
  // inputs
  // add-project form
  const newProjectTitle = document.querySelector(
    'input[id="project-title"]'
  ).value;

  // change-date form
  const newDueDate = document.querySelector('input[id="due-date"]').value;

  // notes form
  const newNote = document.querySelector('input[id="add-note"]').value;

  // checkpoints form
  const newCheckpoint = document.querySelector(
    'input[id="add-checkpoint"]'
  ).value;

  // priority form
  const newPriority = document.querySelector('select[id="priority"]').value;

  // toDo settings form
  const toDoTitle = document.querySelector('input[id="toDo-title"]').value;
  const toDoDescription = document.querySelector(
    'textarea[id="toDo-description"]'
  ).value;
  const toDoPriority = document.querySelector(
    'select[id="toDo-priority"]'
  ).value;

  function getCardTitle(event) {
    return event.target.closest('.card').dataset.title;
  }

  for (let i = 0; i < toDoPauseButtons.length; i++) {
    toDoPauseButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const _title = getCardTitle(event);
      projects.pauseResumeToDo(_title);
      // displayPause(_title) implement me to add pause class to div by title
    });
  }

  for (let i = 0; i < toDoCompleteButtons.length; i++) {
    toDoCompleteButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const _title = getCardTitle(event);
      projects.completeToDo(_title);
      // displayComplete(_title) implement me to add pause class to div by title
    });
  }

  for (let i = 0; i < toDoDeleteButtons.length; i++) {
    toDoDeleteButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const _title = getCardTitle(event);
      projects.completeToDo(_title);
      // displayRemove(_title) implement me to add pause class to div by title
    });
  }

  for (let i = 0; i < homeButtons.length; i++) {
    homeButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const text = homeButtons[i].lastElementChild.textContent;
      switch (text.toLowerCase()) {
        case 'all todos': // displayToDos(projects.getToDos()) implement me to show all todos given by the parameter function
          break;
        case 'today': // displayToDos(projects.getToDosToday())
          break;
        case 'this week': // displayToDos(projects.getToDosWeek())
          break;
        case 'this month': // displayToDos(projects.getToDosMonth())
          break;
        case 'urgent': //  displayToDos(projects.getToDosUrgent())
          break;
        default:
          break;
      }
    });
  }
}
