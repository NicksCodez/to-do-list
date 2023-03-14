import controller from './controller';

export default function attachButonListeners() {
  const projects = controller();

  const homeButtons = document.querySelectorAll('.home-button');
  const projectButtons = document.querySelectorAll('.project-button');
  const projectModifiers = document.querySelectorAll('.project-modify');
  const addProject = document.querySelector('.add-project');
  const toDoPriorityButtons = document.querySelector('.card-priority-button');
  const toDoDatesButtons = document.querySelector('.card-due-date-button');
  const toDoNotesButtons = document.querySelector('.card-notes-button');
  const toDoChecksButtons = document.querySelector('.card-checks-button');
  const toDoPauseButtons = document.querySelector('.card-pause-button');
  const toDoCompleteButtons = document.querySelector('.card-complete-button');
  const toDoDeleteButtons = document.querySelector('.card-delete-button');

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
