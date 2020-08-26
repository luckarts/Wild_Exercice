import axios from 'axios';

export default {
  students: {
    getStudents: () => axios.get('api/students/get/students').then(res => res.data),
    newStudents: student => axios.post('api/students/post/student', student).then(res => res.data)
  }
};
