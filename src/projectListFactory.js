import projectFactory from './projectFactory';

export default function projectListFactory() {
  const projectList = [];
  let currentProject = 0;

  function getCurrentProject() {
    return projectList[currentProject];
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

  function remove(title) {
    const projectIndex = findProjectIndex(title);
    if (projectIndex !== -1) {
      projectList.splice(projectIndex, 1);
    }
    if (currentProject >= projectList.length && currentProject > 0) {
      currentProject--;
    }
  }

  function rename(title, newTitle) {
    const projectIndex = findProjectIndex(title);
    if (projectIndex !== -1) {
      projectList[projectIndex].setTitle(newTitle);
    }
  }

  function setCurrentProject(title) {
    currentProject = findProjectIndex(title);
  }

  return {
    getProjectList,
    add,
    remove,
    rename,
    findProjectIndex,
    getCurrentProject,
    setCurrentProject,
  };
}
