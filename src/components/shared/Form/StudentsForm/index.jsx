import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Typography, Field, Button } from 'components/shared';

const Form = ({ initialState, bool, onSubmit, errorServer }) => {
  const required = {
    required: 'required',
    minLength: {
      value: 3,
      message: 'your username is too short'
    },
    pattern: {
      value: /\S/,
      message: 'Entered value does not match  format'
    }
  };
  const { register, handleSubmit, reset, errors } = useForm();
  useEffect(() => {
    if (bool) {
      reset();
    }
  }, [bool]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 sm:mt-8 mb-16 rounded-xlg  w-3/5 max-w-xlg sm:w-11/12 m-auto border border-gray-300 bg-white p-8"
      >
        <Typography variante="h3" primary className=" text-left mb-4">
          Ajouter un(e) Argonaute
        </Typography>

        {initialState.username !== undefined && (
          <Field
            name="username"
            id="username"
            type="text"
            label="Nom de l'Argonaute"
            defaultValue={initialState.username}
            errors={errors.username}
            autoFocus
            error={errorServer.errors && errorServer.errors.username}
            ref={register({ ...required })}
          />
        )}

        <Button type="submit" primary hover large secondary className="rounded-full mt-4">
          Send
        </Button>
      </form>
    </>
  );
};

export default Form;
