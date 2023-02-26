import React from "react";
import Input from "./Input";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import axios from "axios";
import Button from "../Button";
import TextArea from "./TextArea";

interface MainFormValues {
  title: string;
  description: string;
  isDone: boolean;
}

const MainForm = () => {
  const initialValues: MainFormValues = {
    title: "",
    description: "",
    isDone: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        console.log({ values, actions });
        //localhost:3500/api/post/note
        const data = await axios.post("http://localhost:3500/api/post/note", {
          title: values.title,
          description: values.description,
          isDone: false,
        });
        console.log(data);
        actions.setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form>
          <Input
            id="title"
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            variant="outlined"
            placeholder="Your title"
            isFullWidth
            margin="dense"
            handleChange={formik.handleChange}
            value={formik.values.title}
            name="title"
            type="text"
          />
          <TextArea
            id="description"
            minRows={5}
            multiline
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            variant="outlined"
            placeholder="Your description"
            isFullWidth
            margin="dense"
            handleChange={formik.handleChange}
            value={formik.values.description}
            name="description"
            type="text"
          />
          <Button
            size="large"
            type="submit"
            color="success"
            isFullWidth={false}
            variant="outlined"
            disabled={false}
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;
