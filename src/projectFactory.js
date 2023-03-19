import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
import isThisMonth from 'date-fns/isThisMonth';
import toDoFactory from './toDoFactory';

export default function projectFactory(name) {
  const toDos = [];
  let currentCategory = 'all';

  function setCategory(newCategory) {
    currentCategory = newCategory;
  }

  function getToDo(title) {
    return toDos.find(
      (toDo) => toDo.getTitle().toUpperCase() === title.toUpperCase()
    );
    // for (let i = 0; i < toDos.length; i++) {
    //   if (toDos[i].getTitle().toUpperCase() === title.toUpperCase()) {
    //     return toDos[i];
    //   }
    // }
    // return undefined;
  }

  function getDayToDos() {
    return toDos.filter((toDo) => isToday(toDo.getDueDate()) === true);
  }
  function getWeektoDos() {
    return toDos.filter((toDo) => isThisWeek(toDo.getDueDate()) === true);
  }
  function getMonthToDos() {
    return toDos.filter((toDo) => isThisMonth(toDo.getDueDate()) === true);
  }
  function getUrgentToDos() {
    return toDos.filter(
      (toDo) =>
        isToday(toDo.getDueDate()) === true && toDo.getPriority() === '0'
    );
  }

  function getToDos() {
    switch (currentCategory) {
      case 'all':
        return toDos;
      case 'day':
        return getDayToDos();
      case 'week':
        return getWeektoDos();
      case 'month':
        return getMonthToDos();
      case 'urgent':
        return getUrgentToDos();
      default:
        return [];
    }
  }

  function getTitle() {
    return name;
  }

  function setTitle(newName) {
    name = newName;
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

  function add(title, description = '', dueDate = new Date(), priority = 2) {
    // console.log('adding');
    if (title === '') {
      console.log('empty title');
      return;
    }

    if (getToDo(title) !== undefined) {
      alert('ToDo with same name already exists!');
      return;
    }

    const toDo = toDoFactory(title, description, dueDate, priority);

    // for (let i = 0; i < toDos.length; i++) {
    //   if (toDo.getTitle().toUpperCase() === toDos[i].getTitle().toUpperCase()) {
    //     alert('ToDo with same name already exists!');
    //     return;
    //   }
    // }

    toDos.push(toDo);
  }

  function remove(title) {
    console.log(title);
    const index = getToDoIndex(title);
    console.log(index);
    if (index !== -1) {
      toDos.splice(index, 1);
    }

    // for (let i = 0; i < toDos.length; i++) {
    //   if (toDos[i].getTitle() === title) {
    //     toDos.splice(i, 1);
    //     return;
    //   }
    // }
  }

  function sortByPriority() {
    toDos.sort((a, b) => a.getPriority() - b.getPriority());
  }

  function sortByStatus() {
    toDos.sort((a, b) => a.getStatus() - b.getStatus());
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

  function sortDefault() {
    sortByStatus();
    sortByTitle();
    sortByPriority();
  }

  function sort(by = 'default') {
    switch (by) {
      case 'status':
        return sortByStatus();
      case 'priority':
        return sortByPriority();
      case 'title':
        return sortByTitle();
      default:
        return sortDefault();
    }
  }

  // function addSort(
  //   title,
  //   description = '',
  //   dueDate = new Date(),
  //   priority = 2
  // ) {
  //   add(title, description, dueDate, priority);
  //   sortDefault();
  // }

  function editToDo(title, newTitle, description, dueDate, priority) {
    if (newTitle === '') {
      console.log('empty title');
      return;
    }

    if (newTitle !== title) {
      if (getToDo(newTitle) !== undefined) {
        alert('ToDo with same name already exists!');
        return;
      }
    }

    const toDo = getToDo(title);
    toDo.setTitle(newTitle);
    toDo.setDescription(description);
    toDo.setDueDate(dueDate);
    toDo.setPriority(priority);
    sortDefault();
  }

  return {
    getToDos,
    getTitle,
    setTitle,
    sort,
    add,
    remove,
    getToDo,
    editToDo,
    setCategory,
  };
}
