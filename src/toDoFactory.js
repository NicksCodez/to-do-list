import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

export default function toDoFactory(
  title,
  description = '',
  dueDate = new Date(),
  priority = 2
) {
  dueDate = new Date(dueDate);
  let status = 0; // 0 ongoing, 1 paused, 2 completed
  const createdOn = new Date();
  const notes = [];
  const checklist = [];
  let daysLeft =
    dueDate !== undefined ? differenceInCalendarDays(dueDate, new Date()) : '';
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

  function getCheckpoints() {
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
    title = newTitle;
  }

  function getTitle() {
    return title;
  }

  function setDescription(newDescription) {
    description = newDescription;
  }

  function getDescription() {
    return description;
  }

  function setDueDate(newDueDate) {
    dueDate = new Date(newDueDate);
    daysLeft =
      dueDate !== undefined
        ? differenceInCalendarDays(dueDate, new Date())
        : '';
  }

  function getDueDate() {
    return dueDate;
  }

  function setPriority(newPriority) {
    if (newPriority !== '-1') {
      priority = newPriority;
    }
  }

  function getPriority() {
    return priority;
  }

  function setStatus(newStatus) {
    status = newStatus;
  }

  function getStatus() {
    return status;
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
    getCheckpoints,
    getDaysLeft,
    setDateCompleted,
    getDateCompleted,
    setDatePaused,
    getDatePaused,
    setDateResumed,
    getDateResumed,
    setStatus,
    getStatus,
  };
}
