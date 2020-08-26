import React, { useState } from 'react';
import fetchData from 'utils/fetchData';
import postData from 'utils/postData';
import { Typography, StudentsForm, Loader } from 'components/shared';
import Message from '../../shared/Message';
import api from 'API/api';
import { useForm } from 'react-hook-form';
const Home = () => {
  const initialState = {
    username: ''
  };
  const [values, setSubmitValues] = useState({});
  const [message, setMessage] = useState(null);
  const [bool, setIsSubmit] = useState(false);
  const { reset } = useForm();

  const onSubmit = (values, e) => {
    if (values && values !== null) {
      setIsSubmit(true);
      setSubmitValues(values);
    }
    e.target.reset();
  };

  const newStudent = postData(api.students.newStudents, bool, values);
  let { data, loading, error } = fetchData(api.students.getStudents, newStudent.data.message);

  return (
    <div className="">
      {newStudent.data.message && <Message message={newStudent.data.message} />}
      <StudentsForm
        initialState={initialState}
        onSubmit={onSubmit}
        bool={bool}
        errorServer={newStudent.error === null && {}}
      />

      {loading ? (
        <div className={`my-40 text-center`}>
          <Loader bg="bg-primary " />
        </div>
      ) : error ? (
        <span data-testid="error" className="text-red-800 text-center w-full">
          {error}
        </span>
      ) : (
        <div className="mt-12 sm:mt-8 mb-16 rounded-xlg  w-3/5 max-w-xlg sm:w-11/12 m-auto  p-8">
          <Typography className="text-center mb-4" variante="h3">
            Membres de l'équipage
          </Typography>
          <div className="flex flex-wrap">
            {data &&
              data.students &&
              data.students.map((student, index) => (
                <div className="w-1/3 sm:w-full text-center " key={student.id}>
                  {student.username}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
