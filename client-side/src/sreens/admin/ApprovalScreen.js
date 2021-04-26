import React, { Component } from "react";
import { Table } from "react-bootstrap";

import Screen from "../../components/Screen";
import Row from "../../components/table/Row";

class ApprovalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
  }

  componentDidMount() {
    //   get course and set state
    const teachers = [
      {
        id: 1,
        firstName: "Adam",
        lastName: "Blake",
        email: "ab@gmail.com",
        status: "",
      },
      {
        id: 2,
        firstName: "Justin",
        lastName: "Blake",
        email: "jb@gmail.com",
        status: "",
      },
      {
        id: 3,
        firstName: "Timber",
        lastName: "Blake",
        email: "tb@gmail.com",
        status: "",
      },
    ];

    this.setState({ ...this.state.teachers, teachers: teachers });
  }

  componentDidUpdate() {
    console.log(this.state.teachers);
  }

  Approve = (accept, teacherId) => {
    console.log(accept, teacherId);
    const teachersBackup = this.state.teachers;
    console.log(teachersBackup);

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
    // this.props.UpdateBooking(bookingUpdate);
    // if (this.props.teachers.error) this.setState({ teachers: bookingsBackup });
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
            {this.state.teachers.map((teacher) => (
              <Row key={teacher.id} teacher={teacher} update={this.Approve} />
            ))}
          </tbody>
        </Table>
      </Screen>
    );
  }
}

export default ApprovalScreen;
