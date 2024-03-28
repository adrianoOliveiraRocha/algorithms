function gradingStudents(grades) {
  for(let i = 0; i < grades.length; i++) {
    let nextMultiple = 0;
    let d = parseInt(grades[i] / 5);
    let r = parseInt(grades[i] % 5);
    if(r > 0) {
      d += 1;
      nextMultiple = 5 * d;
    }
    if(grades[i] >= 38 && nextMultiple - grades[i] < 3 && r > 0) {
      grades[i] = nextMultiple;
    }
  }
  return grades;
}

let grades = [73, 67, 38, 33, 75];
console.log(gradingStudents(grades));
