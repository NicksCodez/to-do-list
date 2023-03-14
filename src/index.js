import './style.css';
import './form-style.css';
import toDoFactory from './toDo';
import projectFactory from './projectFactory';

const controller = () => {
  const projectList = [];
  const currentProject = 0;

  function findProjectIndex(title) {
    return projectList.findIndex(
      (project) => project.getTitle().toUpperCase() === title.toUpperCase()
    );
  }

  function getProjectList() {
    return projectList;
  }

  function add(title) {
    projectList.push(projectFactory(title));
  }

  function removeProject(title) {
    const projectIndex = findProjectIndex(title);
    if (projectIndex !== -1) {
      projectList.splice(projectIndex, 1);
    }
  }

  function changeProjectTitle(title, newTitle) {
    const projectIndex = findProjectIndex(title);
    if (projectIndex !== -1) {
      projectList[projectIndex].setTitle(newTitle);
    }
  }

  function loadProjects() {
    // clearProjects implement me to clear the projects sidebar
    for (let i = 0; i < projectList.length; i++) {
      // displayProject(projectList[i].getTitle()) implement me to add child li to ul project list with proper name
    }
  }

  function loadToDos() {
    const toDos = projectList[currentProject].getToDos();
    for (let i = 0; i < toDos.length; i++) {
      // displayTodo(toDos[i]) implement me to add child card div to #todos;
    }
  }

  function changeToDoPriority(title, newPriority) {
    const toDoIndex = projectList[currentProject]
      .getToDos()
      .getToDoIndex(title);
    projectList[currentProject].getToDos()[toDoIndex].setPriority(newPriority);
  }

  function changeToDoDescription(title, newDescription) {
    const toDoIndex = projectList[currentProject]
      .getToDos()
      .getToDoIndex(title);
    projectList[currentProject]
      .getToDos()
      [toDoIndex].setDescription(newDescription);
  }

  function pauseToDo(title) {
    const toDoIndex = projectList[currentProject]
      .getToDos()
      .getToDoIndex(title);
    projectList[currentProject].getToDos()[toDoIndex].setDatePaused(new Date());
  }

  function resumeToDo(title) {
    const toDoIndex = projectList[currentProject]
      .getToDos()
      .getToDoIndex(title);
    projectList[currentProject]
      .getToDos()
      [toDoIndex].setDateResumed(new Date());
  }

  function completeToDo(title) {
    const toDoIndex = projectList[currentProject]
      .getToDos()
      .getToDoIndex(title);
    projectList[currentProject]
      .getToDos()
      [toDoIndex].setDateCompleted(new Date());
  }

  function buttonListeners() {}

  add('Home');
  add('Work');
  console.log(findProjectIndex('Home'));
  console.log(findProjectIndex('Work'));
  console.log(findProjectIndex('Wok'));

  projectList[0].add(
    'Mow the Lawn',
    "It's getting quite hairy out there",
    new Date(),
    0
  );

  return {
    getProjectList,
    add,
  };
};

const projects = controller();
console.log(projects.getProjectList());
console.log(projects.getProjectList()[0].getTitle());

const card = document.querySelector('.card');
card.addEventListener('click', (event) => {
  console.log('div: ', event);
  console.log('div: ', event.target.dataset.title);
});

const button = document.querySelector('.card-priority > button');
button.addEventListener('click', (event) => {
  event.stopPropagation();
  event.preventDefault();
  console.log('button');
  console.log(button.closest('.card').dataset.title);
});

// const workout = projectFactory('workout');
// workout.add('tractiuni', '', undefined, 1);
// workout.add('abdomene', '', undefined, 2);
// workout.add('bicepsius', '', undefined, 1);
// console.log(workout);
// const toDos = workout.getToDos();

// console.log(toDos);
// let i = 0;
// for (const toDo of toDos) {
//   console.log(`Titlu ${i}: ${toDo.getTitle()}`);
//   i++;
// }

// console.log(workout.getName());
// workout.setName('MUSCHIU TATI');
// console.log(workout.getName());

// workout.sortByTitle();
// console.log('sorted by title', toDos);

// workout.sortByPriority();
// console.log('sorted by priority', toDos);

// workout.addAndSort('aactiuni');
// console.log('added and sorted', toDos);

// const test = workout.getToDoIndex('aactiuni');
// console.log('toDos[test]: ', toDos[test]);
// toDos[test].setTitle('test worked');
// i = 0;
// for (const toDo of toDos) {
//   console.log(`Titlu ${i}: ${toDo.getTitle()}`);
//   i++;
// } // why is it that looking at the _title in the console shows initial title, but getTitle shows updated title?
// console.log({ test });
// console.log({ toDos });

// const toDos2 = workout.getToDos();
// console.log({ toDos2 });

// // workout.replaceToDo('tractiuni', toDoFactory('flotari'));
// // console.log({ toDos });
