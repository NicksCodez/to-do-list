import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

export default function toDoFactory(
  title,
  description = '',
  dueDate = undefined,
  priority = 2
) {
  let _title = title;
  let _description = description;
  let _dueDate = dueDate;
  let _priority = priority;
  const createdOn = new Date();
  const notes = [];
  const checklist = [];
  let daysLeft =
    _dueDate !== undefined
      ? differenceInCalendarDays(_dueDate, new Date())
      : '';
  let dateCompleted;
  let datePaused;
  let dateResumed;

  function getDateCreated() {
    return createdOn;
  }

  function addNote(note) {
    notes.push(note);
  }

  function deleteNote(note) {
    const index = notes.indexOf(note);
    if (index !== -1) {
      notes.splice(index, 1);
    }
  }

  function getNotes() {
    return notes;
  }

  function addCheckpoint(checkpoint) {
    checklist.push(checkpoint);
  }

  function deleteCheckpoint(checkpoint) {
    const index = notes.indexOf(checkpoint);
    if (index !== -1) {
      checklist.splice(index, 1);
    }
  }

  function getChecklist() {
    return checklist;
  }

  function getDaysLeft() {
    return daysLeft;
  }

  function setDateCompleted(date) {
    dateCompleted = date;
  }

  function getDateCompleted() {
    return dateCompleted;
  }

  function setDatePaused(date) {
    datePaused = date;
  }

  function getDatePaused() {
    return datePaused;
  }

  function setDateResumed(date) {
    dateResumed = date;
  }

  function getDateResumed() {
    return dateResumed;
  }

  function setTitle(newTitle) {
    _title = newTitle;
  }

  function getTitle() {
    return _title;
  }

  function setDescription(newDescription) {
    _description = newDescription;
  }

  function getDescription() {
    return _description;
  }

  function setDueDate(newDueDate) {
    _dueDate = newDueDate;
    daysLeft =
      _dueDate !== undefined
        ? differenceInCalendarDays(_dueDate, new Date())
        : '';
  }

  function getDueDate() {
    return _dueDate;
  }

  function setPriority(newPriority) {
    _priority = newPriority;
  }

  function getPriority() {
    return _priority;
  }

  return {
    setTitle,
    getTitle,
    setDescription,
    getDescription,
    setDueDate,
    getDueDate,
    setPriority,
    getPriority,
    getDateCreated,
    addNote,
    deleteNote,
    getNotes,
    addCheckpoint,
    deleteCheckpoint,
    getChecklist,
    getDaysLeft,
    getDateCompleted,
    setDateCompleted,
    getDatePaused,
    setDatePaused,
    getDateResumed,
    setDateResumed,
  };
}
