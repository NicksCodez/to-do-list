import projectListFactory from './projectListFactory';
import displayController from './displayController';

export default function controller() {
  const projects = projectListFactory();
  const display = displayController();

  // display.displayDate();
  // display.displayProjects(projects.getProjectList());
  // display.displayToDos(projects.getToDos());
  // const currentTitle = '';
  // console.log('yup, attaching or smth');
  // // forms
  // const projectForm = document.querySelector('.form.add-project');
  // const editProjectForm = document.querySelector('.form.edit-project');
  // const dateForm = document.querySelector('.form.change-date');
  // const notesForm = document.querySelector('.form.notes');
  // const checkpointsForm = document.querySelector('.form.checkpoints');
  // const priorityForm = document.querySelector('.form.change-priority');
  // const settingsForm = document.querySelector('.form.toDo-settings');

  // buttons
  // const homeButtons = document.querySelectorAll('.home-button');
  // let projectSelectButtons = document.querySelectorAll('.project-button');
  // let projectOptionsButtons = document.querySelectorAll('.project-modify');
  // let projectAdd = document.querySelector('.add-project');
  // let projectEditButtons = document.querySelectorAll('.project-edit');
  // let projectDeleteButtons = document.querySelectorAll('.project-delete');
  // const toDoDescriptionButtons = document.querySelectorAll(
  //   '.card-description-button'
  // );
  // const toDoPriorityButtons = document.querySelectorAll(
  //   '.card-priority-button'
  // );
  // const toDoDatesButtons = document.querySelectorAll('.card-due-date-button');
  // const toDoNotesButtons = document.querySelectorAll('.card-notes-button');
  // const toDoChecksButtons = document.querySelectorAll('.card-checks-button');
  // const toDoPauseButtons = document.querySelectorAll('.card-pause-button');
  // const toDoCompleteButtons = document.querySelectorAll(
  //   '.card-complete-button'
  // );
  // const toDoDeleteButtons = document.querySelectorAll('.card-delete-button');
  // const deleteCheckpointButtons =
  //   document.querySelectorAll('.delete-checkpoint');
  // const submitFormButtons = document.querySelectorAll('.form-submit');
  // const cancelFormButtons = document.querySelectorAll('.form-cancel');

  // const deleteNoteButtons = document.querySelectorAll('.delete-note');

  // // inputs
  // // add-project form
  // const projectTitle = document.querySelector('input[id="project-title"]');

  // // edit-project form
  // const newProjectTitle = document.querySelector(
  //   'input[id="new-project-title"]'
  // );

  // // change-date form
  // const newDueDate = document.querySelector('input[id="due-date"]');

  // // notes form
  // const newNote = document.querySelector('input[id="add-note"]');

  // // checkpoints form
  // const newCheckpoint = document.querySelector('input[id="add-checkpoint"]');

  // // priority form
  // const newPriority = document.querySelector('select[id="priority"]');

  // // toDo settings form
  // const toDoTitle = document.querySelector('input[id="toDo-title"]');
  // const toDoDescription = document.querySelector(
  //   'textarea[id="toDo-description"]'
  // );
  // const toDoPriority = document.querySelector('select[id="toDo-priority"]');

  // event listeners

  // function getCardTitle(event) {
  //   return event.target.closest('.card').firstElementChild.textContent;
  // }

  // for (let i = 0; i < toDoPauseButtons.length; i++) {
  //   toDoPauseButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     currentTitle = getCardTitle(event);
  //     projects.pauseResumeToDo(currentTitle);
  //     // displayPause(_title) implement me to add pause class to div by title
  //   });
  // }

  // for (let i = 0; i < toDoCompleteButtons.length; i++) {
  //   toDoCompleteButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     currentTitle = getCardTitle(event);
  //     projects.completeToDo(currentTitle);
  //     // displayComplete(_title) implement me to add pause class to div by title
  //   });
  // }

  // for (let i = 0; i < toDoDeleteButtons.length; i++) {
  //   toDoDeleteButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     currentTitle = getCardTitle(event);
  //     projects.removeToDo(currentTitle);
  //     // display todos
  //   });
  // }

  // for (let i = 0; i < homeButtons.length; i++) {
  //   homeButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     const text = homeButtons[i].lastElementChild.textContent;
  //     switch (text.toLowerCase()) {
  //       case 'all todos': // displayToDos(projects.getToDos()) implement me to show all todos given by the parameter function
  //         break;
  //       case 'today': // displayToDos(projects.getToDosToday())
  //         break;
  //       case 'this week': // displayToDos(projects.getToDosWeek())
  //         break;
  //       case 'this month': // displayToDos(projects.getToDosMonth())
  //         break;
  //       case 'urgent': //  displayToDos(projects.getToDosUrgent())
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }

  // for (let i = 0; i < toDoChecksButtons.length; i++) {
  //   toDoChecksButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     currentTitle = getCardTitle(event);
  //     checkpointsForm.classList.add('active');
  //   });
  // }

  // for (let i = 0; i < toDoNotesButtons.length; i++) {
  //   toDoNotesButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     currentTitle = getCardTitle(event);
  //     notesForm.classList.add('active');
  //   });
  // }

  // for (let i = 0; i < toDoDatesButtons.length; i++) {
  //   toDoDatesButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     currentTitle = getCardTitle(event);
  //     dateForm.classList.add('active');
  //   });
  // }

  // for (let i = 0; i < toDoPriorityButtons.length; i++) {
  //   toDoPriorityButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     currentTitle = getCardTitle(event);
  //     priorityForm.classList.add('active');
  //   });
  // }

  // for (let i = 0; i < toDoDescriptionButtons.length; i++) {
  //   toDoDescriptionButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     currentTitle = getCardTitle(event);
  //     settingsForm.classList.add('active');
  //   });
  // }

  // for (let i = 0; i < projectSelectButtons.length; i++) {
  //   projectSelectButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     projects.selectProject(projectSelectButtons[i].textContent);
  //     // display todos in current project
  //   });
  // }

  // for (let i = 0; i < projectOptionsButtons.length; i++) {
  //   projectOptionsButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     projectOptionsButtons[i].nextElementSibling.classList.toggle('active');
  //   });
  // }

  // projectAdd.addEventListener('click', (event) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   projectForm.classList.add('active');
  //   // display projects list
  // });

  // for (let i = 0; i < projectEditButtons.length; i++) {
  //   projectEditButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     const title =
  //       projectEditButtons[i].closest('.project').firstElementChild.textContent;
  //     projects.selectProject(title);
  //     // display todos in project
  //     editProjectForm.classList.add('.active');
  //   });
  // }

  // for (let i = 0; i < projectDeleteButtons.length; i++) {
  //   projectDeleteButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     const title =
  //       projectDeleteButtons[i].closest('.project').firstElementChild
  //         .textContent;
  //     projects.removeProject(title);
  //     // display project list and todos in prev project
  //   });
  // }

  // for (let i = 0; i < deleteCheckpointButtons.length; i++) {
  //   deleteCheckpointButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     projects.removeCheckpoint(
  //       currentTitle,
  //       deleteCheckpointButtons[i].previousElementSibling.lastElementChild
  //         .textContent
  //     );
  //     // display form aka refresh form contents
  //   });
  // }

  // for (let i = 0; i < deleteNoteButtons.length; i++) {
  //   deleteNoteButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     projects.removeNote(
  //       currentTitle,
  //       deleteCheckpointButtons[i].previousElementSibling.textContent
  //     );
  //     // display form aka refresh form contents
  //   });
  // }

  // for (let i = 0; i < submitFormButtons.length; i++) {
  //   submitFormButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     const mainDiv = submitFormButtons[i].closest('.form');
  //     const formType = mainDiv.classList[1];

  //     switch (formType) {
  //       case 'add-project':
  //         projects.add(projectTitle.value);
  //         display.displayProjects(projects.getProjectList());
  //         projectSelectButtons = document.querySelectorAll('.project-button');
  //         projectOptionsButtons = document.querySelectorAll('.project-modify');
  //         projectAdd = document.querySelector('.add-project');
  //         projectEditButtons = document.querySelectorAll('.project-edit');
  //         projectDeleteButtons = document.querySelectorAll('.project-delete');
  //         break;
  //       case 'edit-project':
  //         projects.changeProjectTitle(newProjectTitle.value);
  //         display.displayProjects(projects.getProjectList());

  //         break;
  //       case 'change-date':
  //         projects.changeDueDate(currentTitle, newDueDate.value);
  //         // redisplay todos
  //         break;
  //       case 'notes':
  //         projects.addNote(currentTitle, newNote.value);
  //         // redisplay todos
  //         break;
  //       case 'checkpoints':
  //         projects.addCheckpoint(currentTitle, newCheckpoint.value);
  //         // redisplay todos
  //         break;
  //       case 'change-priority':
  //         projects.changeToDoPriority(currentTitle, newPriority.value);
  //         // redisplay todos
  //         break;
  //       case 'toDo-settings':
  //         projects.changeToDoTitle(currentTitle, toDoTitle.value);
  //         projects.changeToDoDescription(currentTitle, toDoDescription.value);
  //         projects.changeToDoPriority(currentTitle, toDoPriority.value);
  //         // redisplay todos
  //         break;
  //       default:
  //         break;
  //     }

  //     mainDiv.classList.remove('active');
  //   });
  // }

  // for (let i = 0; i < cancelFormButtons.length; i++) {
  //   cancelFormButtons[i].addEventListener('click', (event) => {
  //     event.stopPropagation();
  //     event.preventDefault();
  //     const mainDiv = cancelFormButtons[i].closest('.form');
  //     const formType = mainDiv.classList[1];

  //     switch (formType) {
  //       case 'add-project':
  //         projectTitle.value = '';
  //         break;
  //       case 'edit-project':
  //         newProjectTitle.value = '';
  //         break;
  //       case 'change-date':
  //         newDueDate.value = new Date();
  //         break;
  //       case 'notes':
  //         newNote.value = '';
  //         break;
  //       case 'checkpoints':
  //         newCheckpoint.value = '';
  //         break;
  //       case 'change-priority':
  //         break;
  //       case 'toDo-settings':
  //         toDoTitle.value = 0;
  //         toDoDescription.value = 0;
  //         break;
  //       default:
  //         break;
  //     }

  //     mainDiv.classList.remove('active');
  //   });
  // }

  function setProject() {
    event.preventDefault();
    event.stopPropagation();
    projects.setCurrentProject(event.target.textContent);
  }

  function showProjectOptions() {
    event.preventDefault();
    event.stopPropagation();
    const projectOptions = document.querySelector('.project-popups');
    projectOptions.classList.toggle('active');
  }

  function editProject() {
    event.preventDefault();
    event.stopPropagation();
    const editForm = document.querySelector('.form.edit-project');
    const projectDiv = event.target.closest('.project');
    const title = projectDiv.querySelector('.project-button').textContent;
    editForm.dataset.title = title;
    editForm.classList.add('active');
  }

  function removeProject() {
    event.preventDefault();
    event.stopPropagation();
    const project =
      event.target.previousElementSibling.previousElementSibling.textContent;
    projects.remove(project);
  }

  function displayInitProjects() {
    display.displayProjects(projects.getProjectList());

    const projectSelectButtons = document.querySelectorAll('.project-button');
    const projectOptionsButtons = document.querySelectorAll('.project-modify');
    const projectEditButtons = document.querySelectorAll('.project-edit');
    const projectDeleteButtons = document.querySelectorAll('.project-delete');

    for (let i = 0; i < projectSelectButtons.length; i++) {
      projectSelectButtons[i].addEventListener('click', setProject);
    }

    for (let i = 0; i < projectOptionsButtons.length; i++) {
      projectOptionsButtons[i].addEventListener('click', showProjectOptions);
    }

    for (let i = 0; i < projectEditButtons.length; i++) {
      projectEditButtons[i].addEventListener('click', editProject);
    }

    for (let i = 0; i < projectDeleteButtons.length; i++) {
      projectDeleteButtons[i].addEventListener('click', () => {
        removeProject();
        displayInitProjects();
      });
    }
  }

  function addToDo() {
    event.preventDefault();
    event.stopPropagation();
    const form = document.querySelector('.form.toDo-settings');
    const label = form.querySelector('label');
    label.textContent = 'New ToDo';
    form.classList.add('active');
  }

  function editToDo() {
    event.preventDefault();
    event.stopPropagation();
    const card = event.target.closest('card');
    if (card.classList.contains('card-done')) {
      return;
    }
    const titleDiv = card.querySelector('.card-title');
    const title = titleDiv.textContent;
    const toDo = projects.getCurrentProject().getToDo(title);
    const form = document.querySelector('.form.toDo-settings');
    form.dataset.title = title;
    const label = form.querySelector('label');
    label.textContent = 'Edit ToDo';
    display.populateToDoSettings(toDo);
    form.classList.add('active');
  }

  function editPriority() {
    event.preventDefault();
    event.stopPropagation();
    const card = event.target.closest('card');
    if (card.classList.contains('card-done')) {
      return;
    }
    const titleDiv = card.querySelector('.card-title');
    const title = titleDiv.textContent;
    const toDo = projects.getCurrentProject().getToDo(title);
    display.displayPriorityForm(toDo);
  }

  function editDates() {
    event.preventDefault();
    event.stopPropagation();
    const card = event.target.closest('card');
    if (card.classList.contains('card-done')) {
      return;
    }
    const titleDiv = card.querySelector('.card-title');
    const title = titleDiv.textContent;
    const toDo = projects.getCurrentProject().getToDo(title);
    display.displayDateForm(toDo);
  }

  function editNotes() {
    event.preventDefault();
    event.stopPropagation();
    const card = event.target.closest('card');
    if (card.classList.contains('card-done')) {
      return;
    }
    const titleDiv = card.querySelector('.card-title');
    const title = titleDiv.textContent;
    const toDo = projects.getCurrentProject().getToDo(title);
    display.displayNotesForm(toDo);
  }

  function editChecks() {
    event.preventDefault();
    event.stopPropagation();
    const card = event.target.closest('card');
    if (card.classList.contains('card-done')) {
      return;
    }
    const titleDiv = card.querySelector('.card-title');
    const title = titleDiv.textContent;
    const toDo = projects.getCurrentProject().getToDo(title);
    display.displayCheckpointsForm(toDo);
  }

  function pauseToDo() {
    event.preventDefault();
    event.stopPropagation();
    const card = event.target.closest('card');
    if (card.classList.contains('card-done')) {
      return;
    }
    const toDo = projects.getCurrentProject().getToDo(card.dataset.title);

    const date = new Date();

    if (card.classList.contains('card-paused')) {
      toDo.setDateResumed(date);
    } else {
      toDo.setDatePaused(date);
    }

    display.pauseResumeCard(card, date);
  }

  function completeToDo() {
    event.preventDefault();
    event.stopPropagation();

    const card = event.target.closest('card');
    const date = new Date();

    if (card.classList.contains('card-done')) {
      return;
    }
    const toDo = projects.getCurrentProject().getToDo(card.dataset.title);
    toDo.setDateCompleted(date);
    display.completeCard(card, date);
  }

  function displayInitToDos() {
    let toDos = projects?.getCurrentProject()?.getToDos();
    if (typeof toDos === 'undefined') {
      toDos = [];
    }
    display.displayToDos(toDos);
    const DescriptionButtons = document.querySelectorAll(
      '.card-description-button'
    );
    const PriorityButtons = document.querySelectorAll('.card-priority-button');
    const DatesButtons = document.querySelectorAll('.card-due-date-button');
    const NotesButtons = document.querySelectorAll('.card-notes-button');
    const ChecksButtons = document.querySelectorAll('.card-checks-button');
    const PauseButtons = document.querySelectorAll('.card-pause-button');
    const CompleteButtons = document.querySelectorAll('.card-complete-button');
    const DeleteButtons = document.querySelectorAll('.card-delete-button');
    const newToDo = document.querySelector('#add-card');

    newToDo.addEventListener('click', addToDo);

    for (let i = 0; i < DescriptionButtons.length; i++) {
      DescriptionButtons[i].addEventListener('click', editToDo);
    }

    for (let i = 0; i < PriorityButtons.length; i++) {
      PriorityButtons[i].addEventListener('click', editPriority);
    }

    for (let i = 0; i < DatesButtons.length; i++) {
      DatesButtons[i].addEventListener('click', editDates);
    }

    for (let i = 0; i < NotesButtons.length; i++) {
      NotesButtons[i].addEventListener('click', editNotes);
    }

    for (let i = 0; i < ChecksButtons.length; i++) {
      ChecksButtons[i].addEventListener('click', editChecks);
    }

    for (let i = 0; i < PauseButtons.length; i++) {
      PauseButtons[i].addEventListener('click', pauseToDo);
    }

    for (let i = 0; i < CompleteButtons.length; i++) {
      CompleteButtons[i].addEventListener('click', completeToDo);
    }

    for (let i = 0; i < DeleteButtons.length; i++) {
      DeleteButtons[i].addEventListener('click', () => {
        event.preventDefault();
        event.stopPropagation();
        const card = event.target.closest('card');
        if (card.classList.contains('card-done')) {
          return;
        }
        projects.getCurrentProject().remove(card.dataset.title);
        displayInitToDos();
      });
    }
  }

  function addProject() {
    event.preventDefault();
    event.stopPropagation();
    const form = document.querySelector('.form.add-project');
    form.classList.add('active');
  }

  function changeCategory() {
    event.preventDefault();
    event.stopPropagation();
    const button = event.target.closest('.home-buton');
    const div = button.querySelector('.todos-category');
    switch (div.textContent) {
      case 'All ToDos':
        projects.getCurrentProject().setCategory('all');
        break;
      case 'Today':
        projects.getCurrentProject().setCategory('day');
        break;
      case 'This Week':
        projects.getCurrentProject().setCategory('week');
        break;
      case 'This Month':
        projects.getCurrentProject().setCategory('month');
        break;
      case 'Urgent':
        projects.getCurrentProject().setCategory('urgent');
        break;
      default:
        break;
    }
  }

  function displayInitStatic() {
    const homeButtons = document.querySelectorAll('.home-button');
    const newProject = document.querySelector('.add-project');

    newProject.addEventListener('click', addProject);

    for (let i = 0; i < homeButtons.length; i++) {
      homeButtons[i].addEventListener('click', changeCategory);
    }
  }

  function cancelForm() {
    event.stopPropagation();
    event.preventDefault();

    const mainDiv = event.target.closest('.form');
    const formType = mainDiv.classList[1];

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
    const toDoDueDate = document.querySelector('select[id="toDo-due-date"]');
    const legend = mainDiv.querySelector('legend');

    switch (formType) {
      case 'add-project':
        projectTitle.value = '';
        break;
      case 'edit-project':
        newProjectTitle.value = '';
        mainDiv.dataset.title = '';
        break;
      case 'change-date':
        newDueDate.value = new Date();
        mainDiv.dataset.title = '';
        break;
      case 'notes':
        newNote.value = '';
        mainDiv.dataset.title = '';
        break;
      case 'checkpoints':
        newCheckpoint.value = '';
        mainDiv.dataset.title = '';
        break;
      case 'change-priority':
        newPriority.value = -1;
        mainDiv.dataset.title = '';
        break;
      case 'toDo-settings':
        toDoTitle.value = '';
        toDoDescription.value = '';
        toDoPriority.value = -1;
        toDoDueDate.value = new Date();
        legend.textContent = 'New ToDo';
        break;
      default:
        break;
    }

    mainDiv.classList.remove('active');
  }

  function submitForm() {
    event.stopPropagation();
    event.preventDefault();

    const mainDiv = event.target.closest('.form');
    const formType = mainDiv.classList[1];

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
    const toDoDueDate = document.querySelector('select[id="toDo-due-date"]');
    const legend = mainDiv.querySelector('legend');

    const { title } = mainDiv.dataset; // changed by formatter

    switch (formType) {
      case 'add-project':
        projects.add(projectTitle.value);
        display.displayProjects(projects.getProjectList());
        displayInitProjects();
        break;
      case 'edit-project':
        projects.rename(title, newProjectTitle.value);
        display.displayProjects(projects.getProjectList());
        displayInitProjects();
        break;
      case 'change-date':
        projects
          .getCurrentProject()
          .getToDo(title)
          .setDueDate(newDueDate.value);
        display.displayToDos(projects.getCurrentProject());
        displayInitToDos();
        break;
      case 'notes':
        projects.getCurrentProject().getToDo(title).addNote(newNote.value);
        display.refreshNotes();
        break;
      case 'checkpoints':
        projects
          .getCurrentProject()
          .getToDo(title)
          .addNote(newCheckpoint.value);
        display.refreshCheckpoints();
        break;
      case 'change-priority':
        projects
          .getCurrentProject()
          .getToDo(title)
          .setPriority(newPriority.value);
        display.displayToDos(projects.getCurrentProject());
        displayInitToDos();
        break;
      case 'toDo-settings':
        if (legend.textContent === 'New ToDo') {
          projects
            .getCurrentProject()
            .add(
              toDoTitle.value,
              toDoDescription.value,
              toDoDueDate.value,
              toDoPriority.value
            );
        } else {
          projects
            .getCurrentProject()
            .editToDo(
              title,
              toDoTitle.value,
              toDoDescription.value,
              toDoDueDate.value,
              toDoPriority.value
            );
          mainDiv.dataset.title = '';
        }
        display.displayToDos(projects.getCurrentProject());
        displayInitToDos();
        break;
      default:
        break;
    }
    cancelForm();
    mainDiv.classList.remove('active');
  }

  function initForms() {
    const submitFormButtons = document.querySelectorAll('.form-submit');
    const cancelFormButtons = document.querySelectorAll('.form-cancel');
    const deleteCheckpointButtons =
      document.querySelectorAll('.delete-checkpoint');
    const deleteNoteButtons = document.querySelectorAll('.delete-note');

    for (let i = 0; i < submitFormButtons.length; i++) {
      submitFormButtons[i].addEventListener('click', submitForm);
    }

    for (let i = 0; i < cancelFormButtons.length; i++) {
      cancelFormButtons[i].addEventListener('click', cancelForm);
    }

    for (let i = 0; i < deleteCheckpointButtons.length; i++) {
      deleteCheckpointButtons[i].addEventListener('click', () => {
        event.preventdefault();
        event.stopPropagation();
        const check =
          event.target.previousElementSibling.querySelector('label');
        const mainDiv = event.target.closest('.form');
        projects
          .getCurrentProject()
          .getToDo(mainDiv.dataset.title)
          .deleteCheckpoint(check.textContent);
        display.refreshCheckpoints(
          projects.getCurrentProject().getToDo(mainDiv.dataset.title)
        );
        initForms();
      });
    }

    for (let i = 0; i < deleteNoteButtons.length; i++) {
      deleteNoteButtons[i].addEventListener('click', () => {
        event.preventdefault();
        event.stopPropagation();
        const note = event.target.previousElementSibling;
        const mainDiv = event.target.closest('.form');
        projects
          .getCurrentProject()
          .getToDo(mainDiv.dataset.title)
          .deleteNote(note.textContent);
        display.refreshNotes(
          projects.getCurrentProject().getToDo(mainDiv.dataset.title)
        );
        initForms();
      });
    }
  }

  function initPage() {
    display.displayDate();
    displayInitStatic();
    initForms();
    displayInitProjects();
    displayInitToDos();
  }

  return {
    initPage,
  };
}
