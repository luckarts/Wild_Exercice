import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { Typography, Textarea, Field, Button } from 'components/shared';
import './style.scss';
const Form = ({ title, initialState, loading, onSubmit, serverErrors }) => {
  const [errorServer, setErrors] = useState({});
  const [file, setFile] = useState({});
  useEffect(() => {
    setErrors({ errors: serverErrors });
  }, [serverErrors]);

  const required = {
    required: 'required',
    minLength: {
      value: 5,
      message: 'min length is 5'
    }
  };
  const { register, handleSubmit, errors } = useForm();
  return (
    <>
      {initialState && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 sm:mt-8 mb-16 rounded-xlg  w-3/5 max-w-xlg sm:w-11/12 m-auto border border-gray-300 bg-white p-8"
        >
          {title && (
            <Typography variante="h3" primary className=" text-left mb-4">
              {title}
            </Typography>
          )}
          {initialState.username !== undefined && (
            <Field
              name="username"
              id="username"
              type="text"
              label="Username"
              defaultValue={initialState.username}
              errors={errors.username}
              autoFocus
              error={errorServer.errors && errorServer.errors.username}
              ref={register({ ...required })}
            />
          )}
          {initialState.email !== undefined && (
            <Field
              type="email"
              name="email"
              id="email"
              label="Email"
              defaultValue={initialState.email}
              errors={errors.email}
              error={errorServer.errors && errorServer.errors.email}
              ref={register({ ...required })}
            />
          )}

          {initialState.password !== undefined && (
            <Field
              type="password"
              id="password"
              name="password"
              label="Password"
              defaultValue={initialState.password}
              error={errorServer.errors && errorServer.errors.password}
              errors={errors.password}
              ref={register({ ...required })}
            />
          )}
          {initialState.description !== undefined && (
            <Textarea
              type="text"
              name="description"
              id="description"
              label="description"
              defaultValue={initialState.description}
              error={errorServer.errors && errorServer.errors.description}
              errors={errors.description}
              ref={register({ ...required })}
            />
          )}

          <Button type="submit" primary hover large secondary className="rounded-full">
            <span> Valider</span>
          </Button>
        </form>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  serverErrors: state.formErrors.errors
});
export default connect(mapStateToProps)(Form);
