import projectListFactory from './projectListFactory';

export default function storageController() {
  const dirtyProjectList =
    JSON.parse(localStorage.getItem('projectList') || '""').projectList || [];

  const projectList = projectListFactory();
  for (let i = 0; i < dirtyProjectList.length; i++) {
    projectList.add(dirtyProjectList[i].name);
    projectList.getProjectList()[i].fromJSON(dirtyProjectList[i]);
  }
  function getProjectList() {
    return projectList;
  }
  function saveState(projectList) {
    localStorage.setItem('projectList', JSON.stringify(projectList));
  }

  return { getProjectList, saveState };
}
