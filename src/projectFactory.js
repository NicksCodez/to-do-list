import toDoFactory from './toDo';

export default function projectFactory(name) {
  const toDos = [];
  let _name = name;

  function getToDos() {
    return toDos;
  }

  function getTitle() {
    return _name;
  }

  function setTitle(newName) {
    _name = newName;
  }

  function add(title, description = '', dueDate = undefined, priority = 2) {
    const toDo = toDoFactory(title, description, dueDate, priority);

    for (let i = 0; i < toDos.length; i++) {
      if (toDo.getTitle().toUpperCase() === toDos[i].getTitle().toUpperCase()) {
        alert('ToDo with same name already exists!');
        return;
      }
    }

    toDos.push(toDo);
  }

  function remove(title) {
    for (let i = 0; i < toDos.length; i++) {
      if (toDos[i].getTitle() === title) {
        toDos.splice(i, 1);
        return;
      }
    }
  }

  function sortByPriority() {
    toDos.sort((a, b) => a.getPriority() - b.getPriority());
  }

  function sortByTitle() {
    toDos.sort((a, b) => {
      const titleA = a.getTitle().toUpperCase();
      const titleB = b.getTitle().toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }

  function addAndSort(
    title,
    description = '',
    dueDate = undefined,
    priority = 2
  ) {
    add(title, description, dueDate, priority);
    sortByTitle();
    sortByPriority();
  }

  function getToDoIndex(title) {
    return toDos.findIndex(
      (toDo) => toDo.getTitle().toUpperCase() === title.toUpperCase()
    );

    // for (let i = 0; i < toDos.length; i++) {
    //   if (toDos[i].getTitle().toUpperCase() === title.toUpperCase()) {
    //     return i;
    //   }
    // }
    // return -1;
  }

  function getToDo(title) {
    for (let i = 0; i < toDos.length; i++) {
      if (toDos[i].getTitle().toUpperCase() === title.toUpperCase()) {
        return toDos[i];
      }
    }
    return undefined;
  }

  function replaceToDo(title, newToDo) {
    const index = getToDoIndex(title);
    if (index === -1) {
      return;
    }
    toDos.splice(index, 1, newToDo);
    sortByTitle();
    sortByPriority();
  }

  return {
    getToDos,
    getTitle,
    setTitle,
    sortByPriority,
    sortByTitle,
    addAndSort,
    add,
    remove,
    getToDoIndex,
    getToDo,
    replaceToDo,
  };
}
