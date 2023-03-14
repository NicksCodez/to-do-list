import './style.css';
import toDoFactory from './toDo';
import projectFactory from './projectFactory';

const workout = projectFactory('workout');
workout.add('tractiuni', '', undefined, 1);
workout.add('abdomene', '', undefined, 2);
workout.add('bicepsius', '', undefined, 1);
console.log(workout);
const toDos = workout.getToDos();

console.log(toDos);
let i = 0;
for (const toDo of toDos) {
  console.log(`Titlu ${i}: ${toDo.getTitle()}`);
  i++;
}

console.log(workout.getName());
workout.setName('MUSCHIU TATI');
console.log(workout.getName());

workout.sortByTitle();
console.log('sorted by title', toDos);

workout.sortByPriority();
console.log('sorted by priority', toDos);

workout.addAndSort('aactiuni');
console.log('added and sorted', toDos);

const test = workout.getToDoIndex('aactiuni');
console.log('toDos[test]: ', toDos[test]);
toDos[test].setTitle('test worked');
i = 0;
for (const toDo of toDos) {
  console.log(`Titlu ${i}: ${toDo.getTitle()}`);
  i++;
} // why is it that looking at the _title in the console shows initial title, but getTitle shows updated title?
console.log({ test });
console.log({ toDos });

const toDos2 = workout.getToDos();
console.log({ toDos2 });

// workout.replaceToDo('tractiuni', toDoFactory('flotari'));
// console.log({ toDos });
