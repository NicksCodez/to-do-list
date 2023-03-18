import './style.css';
import './form-style.css';
import format from 'date-fns/format';
import projectListFactory from './projectListFactory';
import controller from './controller';
import displayController from './displayController';
import toDoFactory from './toDoFactory';

const control = controller();
document.addEventListener('DOMContentLoaded', () => {});
control.initPage();
// attachButonListeners();

// const testDate = displayController();
// testDate.displayDate();
// const projects = controller();
// projects.add('Home');
// projects.add('Work');
// testDate.displayProjects(projects.getProjectList());
// console.log(projects.getProjectList()[0]);
// projects
//   .getProjectList()[0]
//   .add('Mow the Lawn', "It's looking very wild out there");
// projects
//   .getProjectList()[0]
//   .add('Clean the fish tank', 'I saw a fish swimming upside down');
// projects
//   .getProjectList()[0]
//   .add('Walk the dog', "The rug's starting to look a bit too yellowy");
// testDate.displayToDos(projects.getProjectList()[0].getToDos());
// console.log(projects.getProjectList()[0].getToDo('Mow the Lawn'));

// console.log(format(new Date(), "cccc', 'do LLLL"));
// console.log(format(new Date(), 'dd-MM-yyyy'));
// console.log(new Date());
// const projects = controller();

// projects.add('Home');
// projects.add('Work');
// console.log(projects.findProjectIndex('Home'));
// console.log(projects.findProjectIndex('Work'));
// console.log(projects.findProjectIndex('Wok'));

// projects
//   .getProjectList()[0]
//   .add('Mow the Lawn', "It's getting quite hairy out there", new Date(), 0);

// console.log(projects.getProjectList());
// console.log(projects.getProjectList()[0].getTitle());

// const card = document.querySelector('.card');
// card.addEventListener('click', (event) => {
//   console.log('div: ', event);
//   console.log('div: ', event.target.dataset.title);
// });

// const button = document.querySelector('.card-priority > button');
// button.addEventListener('click', (event) => {
//   event.stopPropagation();
//   event.preventDefault();
//   console.log('button');
//   console.log(button.closest('.card').dataset.title);
// });

// const listeners = attachButonListeners();
// ------------------------------------------------------------

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
