import { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Alert, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from "../../components/Screen";
import FormInput from "../../components/form/FormInput";

import { AddVideo } from "../../api/courses";

class AddVideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      error: false
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ ...this.state.id, id: params.id });
  }

  CourseCategory = (reqVideo) => {

    var videoObj = {
      courseId: this.state.id,
      fileName: reqVideo.name,
      formFiles: reqVideo.file,
      description: reqVideo.description
    };

    console.log(videoObj);

    const res = AddVideo(videoObj);
    res.then(result => { result === 200 ? this.props.history.push(`/teacher/courses/${this.state.id}`) : this.setState({ error: true }) })
    

  };

  saveFile(e) {
    console.log(e.target.files[0]);
    //setFile()
  }

  render() {
    //   Initializing formik variables
    const initalValues = { name: '', fileType: '', description: '', courseId: this.state.id }

    const validationSchema = Yup.object().shape({
      name: Yup.string().required().label("Name"),
      // fileType: Yup.string().required().label("fileType"),
      description: Yup.string().required().label("Description"),
    });

    return (
      <Screen navbar={false}>
        <div>
          {this.state.error && <Alert variant='danger'>Failed to Add Video!</Alert>}
          <Formik initialValues={initalValues} onSubmit={(values) => this.CourseCategory(values)} validationSchema={validationSchema}>
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched, setFieldValue }) => (
              <Form >
                <h1>Add Video</h1>
                <hr style={{ marginBottom: 25 }} />

                <FormInput id="name" name='name' type='text' label='Name' placeholder='Course type name' onBlur={() => setFieldTouched('name')} onChange={handleChange('name')} errors={errors.name} touched={touched.name} />

                <input id='fileType' type="file" name="fileType" accept="video/*" onChange={(event) => { setFieldValue("file", event.currentTarget.files[0]); }} />

                <FormInput id="description" name='description' type='text' label='Description' placeholder='Description' onBlur={() => setFieldTouched('description')} onChange={handleChange('description')} errors={errors.description} touched={touched.description} />


                <div style={{ marginTop: 30, marginLeft: 0 }}>
                  <Button variant="dark" onClick={handleSubmit} >
                    Upload video
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Screen>
    );

  }
}

export default withRouter(AddVideoScreen);
