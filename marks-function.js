function assignMarks(assignment1, assignment2, assignment3) {
    const totalMarks = assignment1 + assignment2 + assignment3;
    const avgMarks = totalMarks / 3;
    return avgMarks
}
const assignmentMarks1 = 45;
const assignmentMarks2 = 28;
const assignmentMarks3 = 37;
var returnedMarks = assignMarks(assignmentMarks1, assignmentMarks2, assignmentMarks3);
console.log(returnedMarks);