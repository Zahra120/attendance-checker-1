const readline = require('readline'),
      async = require('async');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var students = [
  'Jessica', 'Marie', 'William', 'Zahra', 'Marco', 'Mike', 'Kevin', 'Isis', 'Ela', 'Lorenzo'
  ].map((value) => {
    return {
      name: value,
      attending: undefined
    };
  });

async.eachSeries(students, askAttendance, (error) => {
  rl.close();

  console.log('Attending students are: ');

  students.filter((student) => {
    return student.attending;
  }).forEach((student) => {
    console.log(student.name);
  });
});

function askAttendance(student, callback) {
  rl.question('Is ' + student.name + ' attending? ', (answer) => {
    student.attending = (answer === 'yes') || (answer === 'y');

    callback();
  });
}
