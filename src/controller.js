import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import projectListFactory from './projectListFactory';
import displayController from './displayController';

export default function controller() {
  const projects = projectListFactory();
  const display = displayController();

  function addToDo() {
    event.preventDefault();
    event.stopPropagation();
    console.log('no of projects: ', projects.getProjectList().length);
    if (projects.getProjectList().length === 0) {
      projects.add('Rename me!');
      projects.setCurrentProject('Rename me!');
      displayInitProjects();
      const form = document.querySelector('.form.toDo-settings');
      const date = form.querySelector('#toDo-due-date');
      date.value = format(new Date(), 'yyyy-MM-dd');
      const legend = form.querySelector('legend');
      legend.textContent = 'New ToDo';
      form.classList.add('active');
    } else {
      const form = document.querySelector('.form.toDo-settings');
      const legend = form.querySelector('legend');
      legend.textContent = 'New ToDo';
      form.classList.add('active');
    }
  }

  function editToDo() {
    event.preventDefault();
    event.stopPropagation();
    const card = event.target.closest('.card');
    if (card.classList.contains('card-done')) {
      return;
    }
    const titleDiv = card.querySelector('.card-title');
    const title = titleDiv.textContent;
    const toDo = projects.getCurrentProject().getToDo(title);
    const form = document.querySelector('.form.toDo-settings');
    form.dataset.title = title;
    const legend = form.querySelector('legend');
    legend.textContent = 'Edit ToDo';
    // const label = form.querySelector('label');
    // label.textContent = 'Edit ToDo';
    display.populateToDoSettings(toDo);
    form.classList.add('active');
  }

  function editPriority() {
    event.preventDefault();
    event.stopPropagation();
    const card = event.target.closest('.card');
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
    const card = event.target.closest('.card');
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
    const card = event.target.closest('.card');
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
    const card = event.target.closest('.card');
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
    const card = event.target.closest('.card');
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

    const card = event.target.closest('.card');
    const date = new Date();

    // if (card.classList.contains('card-done')) {
    //   return;
    // }
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
        const card = event.target.closest('.card');
        if (card.classList.contains('card-done')) {
          return;
        }
        projects.getCurrentProject().remove(card.dataset.title);
        displayInitToDos();
      });
    }
  }

  function setProject() {
    event.preventDefault();
    event.stopPropagation();
    projects.setCurrentProject(event.target.textContent);
    displayInitToDos();
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
    console.log(event.target);
    console.log(event.target.parentElement.parentElement);
    console.log(
      event.target.parentElement.parentElement.previousElementSibling
    );
    console.log(event.target.dataset.title);
    const project = event.target.dataset.title;
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
    if (projects.getProjectList().length === 0) {
      return;
    }
    const button = event.target.closest('.home-button');
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
    displayInitToDos();
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
    const toDoDueDate = document.querySelector('input[id="toDo-due-date"]');
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
        newDueDate.value = format(new Date(), 'yyyy-MM-dd');
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
        newPriority.selectedValue = -1;
        mainDiv.dataset.title = '';
        break;
      case 'toDo-settings':
        toDoTitle.value = '';
        toDoDescription.value = '';
        toDoPriority.selectedValue = -1;
        toDoDueDate.value = format(new Date(), 'yyyy-MM-dd');
        // legend.textContent = 'New ToDo';
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
    const toDoDueDate = document.querySelector('input[id="toDo-due-date"]');
    const legend = mainDiv.querySelector('legend');

    const { title } = mainDiv.dataset; // changed by formatter

    switch (formType) {
      case 'add-project':
        projects.add(projectTitle.value);
        display.displayProjects(projects.getProjectList());
        displayInitProjects();
        projects.setCurrentProject(projectTitle.value);
        displayInitToDos();
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
        if (projects.getProjectList().length !== 0) {
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
        }

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
