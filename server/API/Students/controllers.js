import { get_AllStudents, new_Student } from '../../Services/Students/student_Db';

export async function getAllStudents(req, res) {
  const students = await get_AllStudents();
  if (students) {
    return res.status(200).json({ students });
  } else return null;
}
export async function postStudent(req, res) {
  const { username } = req.body;
  console.log(username);
  const student = await new_Student({ username });
  if (student) {
    return res.status(200).json({ message: `new student is add ${username}` });
  } else return null;
}
