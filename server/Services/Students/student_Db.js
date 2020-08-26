import db from '../../Database/models';

export async function get_AllStudents() {
  const students = db.Student.findAll({});
  if (students) {
    return students;
  }
  return null;
}
export async function new_Student({ username }) {
  console.log(username);
  const student = db.Student.create({ username: username });
  if (student) {
    return student;
  }
  return null;
}
