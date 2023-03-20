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
    if (title === '') {
      return;
    }
    if (findProjectIndex(title) !== -1) {
      alert('Project with same name already exists!');
      return;
    }
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
    if (title === '') {
      return;
    }
    if (findProjectIndex(title) === -1) {
      alert('Project with same name already exists!');
      return;
    }
    const projectIndex = findProjectIndex(title);
    if (projectIndex !== -1) {
      projectList[projectIndex].setTitle(newTitle);
    }
  }

  function setCurrentProject(title) {
    currentProject = findProjectIndex(title);
  }

  function toJSON() {
    return { projectList };
  }

  return {
    getProjectList,
    add,
    remove,
    rename,
    findProjectIndex,
    getCurrentProject,
    setCurrentProject,
    toJSON,
  };
}
