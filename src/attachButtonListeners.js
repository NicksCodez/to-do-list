import controller from './controller';

export default function attachButonListeners() {
  const projects = controller();
  let currentTitle = '';
  console.log('yup, attaching or smth');
  // forms
  const projectForm = document.querySelector('.form.add-project');
  const editProjectForm = document.querySelector('.form.edit-project');
  const dateForm = document.querySelector('.form.change-date');
  const notesForm = document.querySelector('.form.notes');
  const checkpointsForm = document.querySelector('.form.checkpoints');
  const priorityForm = document.querySelector('.form.change-priority');
  const settingsForm = document.querySelector('.form.toDo-settings');

  // buttons
  const homeButtons = document.querySelectorAll('.home-button');
  const projectSelectButtons = document.querySelectorAll('.project-button');
  const projectOptionsButtons = document.querySelectorAll('.project-modify');
  const projectAdd = document.querySelector('.add-project');
  const projectEditButtons = document.querySelectorAll('.project-edit');
  const projectDeleteButtons = document.querySelectorAll('.project-delete');
  const toDoDescriptionButtons = document.querySelectorAll(
    '.card-description-button'
  );
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
  const deleteCheckpointButtons =
    document.querySelectorAll('.delete-checkpoint');
  const submitFormButtons = document.querySelectorAll('.form-submit');
  const cancelFormButtons = document.querySelectorAll('.form-cancel');

  const deleteNoteButtons = document.querySelectorAll('.delete-note');

  // inputs
  // add-project form
  const projectTitle = document.querySelector('input[id="project-title"]');

  // edit-project form
  const newProjectTitle = document.querySelector(
    'input[id="new-project-title"]'
  );

  // change-date form
  const newDueDate = document.querySelector('input[id="due-date"]');

  // notes form
  const newNote = document.querySelector('input[id="add-note"]');

  // checkpoints form
  const newCheckpoint = document.querySelector('input[id="add-checkpoint"]');

  // priority form
  const newPriority = document.querySelector('select[id="priority"]');

  // toDo settings form
  const toDoTitle = document.querySelector('input[id="toDo-title"]');
  const toDoDescription = document.querySelector(
    'textarea[id="toDo-description"]'
  );
  const toDoPriority = document.querySelector('select[id="toDo-priority"]');

  // event listeners

  function getCardTitle(event) {
    return event.target.closest('.card').firstElementChild.textContent;
  }

  for (let i = 0; i < toDoPauseButtons.length; i++) {
    toDoPauseButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      currentTitle = getCardTitle(event);
      projects.pauseResumeToDo(currentTitle);
      // displayPause(_title) implement me to add pause class to div by title
    });
  }

  for (let i = 0; i < toDoCompleteButtons.length; i++) {
    toDoCompleteButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      currentTitle = getCardTitle(event);
      projects.completeToDo(currentTitle);
      // displayComplete(_title) implement me to add pause class to div by title
    });
  }

  for (let i = 0; i < toDoDeleteButtons.length; i++) {
    toDoDeleteButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      currentTitle = getCardTitle(event);
      projects.removeToDo(currentTitle);
      // display todos
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

  for (let i = 0; i < toDoChecksButtons.length; i++) {
    toDoChecksButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      currentTitle = getCardTitle(event);
      checkpointsForm.classList.add('active');
    });
  }

  for (let i = 0; i < toDoNotesButtons.length; i++) {
    toDoNotesButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      currentTitle = getCardTitle(event);
      notesForm.classList.add('active');
    });
  }

  for (let i = 0; i < toDoDatesButtons.length; i++) {
    toDoDatesButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      currentTitle = getCardTitle(event);
      dateForm.classList.add('active');
    });
  }

  for (let i = 0; i < toDoPriorityButtons.length; i++) {
    toDoPriorityButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      currentTitle = getCardTitle(event);
      priorityForm.classList.add('active');
    });
  }

  for (let i = 0; i < toDoDescriptionButtons.length; i++) {
    toDoDescriptionButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      currentTitle = getCardTitle(event);
      settingsForm.classList.add('active');
    });
  }

  for (let i = 0; i < projectSelectButtons.length; i++) {
    projectSelectButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      projects.selectProject(projectSelectButtons[i].textContent);
      // display todos in current project
    });
  }

  for (let i = 0; i < projectOptionsButtons.length; i++) {
    projectOptionsButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      projectOptionsButtons[i].nextElementSibling.classList.toggle('active');
    });
  }

  projectAdd.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    projectForm.classList.add('active');
    // display projects list
  });

  for (let i = 0; i < projectEditButtons.length; i++) {
    projectEditButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const title =
        projectEditButtons[i].closest('.project').firstElementChild.textContent;
      projects.selectProject(title);
      // display todos in project
      editProjectForm.classList.add('.active');
    });
  }

  for (let i = 0; i < projectDeleteButtons.length; i++) {
    projectDeleteButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const title =
        projectDeleteButtons[i].closest('.project').firstElementChild
          .textContent;
      projects.removeProject(title);
      // display project list and todos in prev project
    });
  }

  for (let i = 0; i < deleteCheckpointButtons.length; i++) {
    deleteCheckpointButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      projects.removeCheckpoint(
        currentTitle,
        deleteCheckpointButtons[i].previousElementSibling.lastElementChild
          .textContent
      );
      // display form aka refresh form contents
    });
  }

  for (let i = 0; i < deleteNoteButtons.length; i++) {
    deleteNoteButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      projects.removeNote(
        currentTitle,
        deleteCheckpointButtons[i].previousElementSibling.textContent
      );
      // display form aka refresh form contents
    });
  }

  for (let i = 0; i < submitFormButtons.length; i++) {
    submitFormButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const mainDiv = submitFormButtons[i].closest('.form');
      const formType = mainDiv.classList[1];

      switch (formType) {
        case 'add-project':
          projects.add(projectTitle.value);
          // redisplay projects list
          break;
        case 'edit-project':
          projects.changeProjectTitle(newProjectTitle.value);
          // redisplay projects list
          break;
        case 'change-date':
          projects.changeDueDate(currentTitle, newDueDate.value);
          // redisplay todos
          break;
        case 'notes':
          projects.addNote(currentTitle, newNote.value);
          // redisplay todos
          break;
        case 'checkpoints':
          projects.addCheckpoint(currentTitle, newCheckpoint.value);
          // redisplay todos
          break;
        case 'change-priority':
          projects.changeToDoPriority(currentTitle, newPriority.value);
          // redisplay todos
          break;
        case 'toDo-settings':
          projects.changeToDoTitle(currentTitle, toDoTitle.value);
          projects.changeToDoDescription(currentTitle, toDoDescription.value);
          projects.changeToDoPriority(currentTitle, toDoPriority.value);
          // redisplay todos
          break;
        default:
          break;
      }

      mainDiv.classList.remove('active');
    });
  }

  for (let i = 0; i < cancelFormButtons.length; i++) {
    cancelFormButtons[i].addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const mainDiv = cancelFormButtons[i].closest('.form');
      const formType = mainDiv.classList[1];

      switch (formType) {
        case 'add-project':
          projectTitle.value = '';
          break;
        case 'edit-project':
          newProjectTitle.value = '';
          break;
        case 'change-date':
          newDueDate.value = new Date();
          break;
        case 'notes':
          newNote.value = '';
          break;
        case 'checkpoints':
          newCheckpoint.value = '';
          break;
        case 'change-priority':
          break;
        case 'toDo-settings':
          toDoTitle.value = 0;
          toDoDescription.value = 0;
          break;
        default:
          break;
      }

      mainDiv.classList.remove('active');
    });
  }
}
