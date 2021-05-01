import React, { Component } from "react";
import { Table } from "react-bootstrap";

import Screen from "../../components/Screen";
import Row from "../../components/table/Row";

import {GetAllTeachers, ApproveTeachers} from '../../api/teachers';


class ApprovalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
  }

  componentDidMount() {
    const res = GetAllTeachers();
    res.then(result => { this.setState({ ...this.state.teachers, teachers: result }) });
  }

  componentDidUpdate() {
    console.log(this.state.teachers);
  }

  Approve = (accept, teacherId) => {
    const teachersBackup = this.state.teachers;

    let teacherUpdate = {};
    if (accept) {
      teacherUpdate = { id: teacherId, status: "approved" };
    } else {
      teacherUpdate = { id: teacherId, status: "rejected" };
    }

    teachersBackup.forEach((teacher) => {
      if (teacher.id === teacherId) {
        teacher.status = teacherUpdate.status;
      }
    });
    console.log(teacherUpdate);

    const res = ApproveTeachers(teacherUpdate);
    res.then(result=>{
      const status = result.status;
      if (status===200) {this.setState({ teachers: teachersBackup });}
    });
  };

  render() {
    return (
      <Screen title="Approve Teachers" navbar={false}>
        <Table striped hover style={{ marginTop: "30px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Approve</th>
            </tr>
          </thead>
          <tbody>
            {this.state.teachers && this.state.teachers.map((teacher) => (
              <Row key={teacher.id} teacher={teacher} update={this.Approve} />
            ))}
          </tbody>
        </Table>
      </Screen>
    );
  }
}

export default ApprovalScreen;
