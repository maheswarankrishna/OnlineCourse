import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";

import Screen from "../../components/Screen";
import FormInput from "../../components/form/FormInput";

function AddCourseScreen(props) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Course Title"),
    description: Yup.string().required().label("Course Description"),
    courseId: Yup.number().integer().required("Category Id"),
  });

  const handleOnSubmit = () => {};

  return (
    <Screen title="Add Course">
      <Formik
        initalValues={{ title: "", description: "", categoryId: 0 }}
        onSubmit={handleOnSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, setFieldTouched, touched, errors }) => (
          <Form>
            <FormInput
              id="title"
              name="title"
              type="text"
              label="Course title"
              onBlur={() => setFieldTouched('title')}
              onChange={handleChange("title")}
              placeholder={"Course title"}
              errors={errors.title}
              touched={touched.title}
            />

            <FormInput
              id="description"
              name="description"
              type="text"
              label="Course description"
              onBlur={() => setFieldTouched("description")}
              onChange={handleChange("description")}
              placeholder={"Course description"}
              errors={errors.description}
              touched={touched.description}
            />

            <Button variant='dark' onSubmit={handleSubmit}>Submit</Button>
          </Form>
        )}
      </Formik>
    </Screen>
  );
}

export default AddCourseScreen;
