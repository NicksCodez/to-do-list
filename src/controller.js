import {
  isToday,
  isThisWeek,
  isThisMonth,
} from 'date-fns/differenceInCalendarDays';
import projectFactory from './projectFactory';

export default function controller() {
  const projectList = [];
  let currentProject = 0;

  function getToDosUrgent() {
    return projectList[currentProject]
      .getToDos()
      .filter(
        (toDo) =>
          isToday(toDo.getDueDate()) === true && toDo.getPriority() === 0
      );
  }

  function getToDosMonth() {
    return projectList[currentProject]
      .getToDos()
      .filter((toDo) => isThisMonth(toDo.getDueDate()) === true);
  }

  function getToDosWeek() {
    return projectList[currentProject]
      .getToDos()
      .filter((toDo) => isThisWeek(toDo.getDueDate()) === true);
  }

  function getToDosToday() {
    return projectList[currentProject]
      .getToDos()
      .filter((toDo) => isToday(toDo.getDueDate()) === true);
  }

  function getToDos() {
    return projectList[currentProject].getToDos();
  }

  function getCurrentProject() {
    return currentProject;
  }

  function setCurrentProject(newProject) {
    currentProject = newProject;
  }

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

  function changeToDoPriority(title, newPriority) {
    // const toDoIndex = projectList[currentProject]
    //   .getToDos()
    //   .getToDoIndex(title);
    // projectList[currentProject].getToDos()[toDoIndex].setPriority(newPriority);
    projectList[currentProject].getToDo(title).setPriority(newPriority);
  }

  function changeToDoDescription(title, newDescription) {
    // const toDoIndex = projectList[currentProject]
    //   .getToDos()
    //   .getToDoIndex(title);
    // projectList[currentProject]
    //   .getToDos()
    //   [toDoIndex].setDescription(newDescription);
    projectList[currentProject].getToDo(title).setDescription(newDescription);
  }

  function pauseToDo(title) {
    // const toDoIndex = projectList[currentProject]
    //   .getToDos()
    //   .getToDoIndex(title);
    // projectList[currentProject].getToDos()[toDoIndex].setDatePaused(new Date());
    // projectList[currentProject].getToDos()[toDoIndex].setPriority(3);
    projectList[currentProject].getToDo(title).setDatePaused(new Date());
    projectList[currentProject].getToDo(title).setStatus(1);
  }

  function resumeToDo(title) {
    // const toDoIndex = projectList[currentProject]
    //   .getToDos()
    //   .getToDoIndex(title);
    // projectList[currentProject]
    //   .getToDos()
    //   [toDoIndex].setDateResumed(new Date());
    // projectList[currentProject].getToDos()[toDoIndex].setPriority(3);
    projectList[currentProject].getToDo(title).setDateResumed(new Date());
    projectList[currentProject].getToDo(title).setStatus(0);
  }

  function pauseResumeToDo(title) {
    const status = projectList[currentProject].getToDo(title).getStatus();
    if (status === 0) {
      pauseToDo(title);
    } else if (status === 1) {
      resumeToDo(title);
    }
  }

  function completeToDo(title) {
    // const toDoIndex = projectList[currentProject]
    //   .getToDos()
    //   .getToDoIndex(title);
    // projectList[currentProject]
    //   .getToDos()
    //   [toDoIndex].setDateCompleted(new Date());
    projectList[currentProject].getToDo(title).setDateCompleted(new Date());
    projectList[currentProject].getToDo(title).setStatus(2);
  }

  return {
    getProjectList,
    add,
    removeProject,
    changeProjectTitle,
    changeToDoPriority,
    changeToDoDescription,
    pauseToDo,
    resumeToDo,
    completeToDo,
    findProjectIndex,
    getCurrentProject,
    setCurrentProject,
    pauseResumeToDo,
    getToDos,
    getToDosToday,
    getToDosWeek,
    getToDosMonth,
  };
}
