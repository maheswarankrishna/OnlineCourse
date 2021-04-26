import React from "react";
import { Button } from "react-bootstrap";

function Row({ teacher,update }) {
  const {id, firstName, lastName, email, status} = teacher;

  const Approve = (accept) => {
    update(accept, id);
  };

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{status}</td>
        <td>
          <Button
            style={{ margin: "0 2px 0 2px" }}
            variant="success"
            onClick={() => Approve(true)}
          >
            Approve
          </Button>
          <Button
            style={{ margin: "0 2px 0 2px" }}
            variant="danger"
            onClick={() => Approve(false)}
          >
            Reject
          </Button>
        </td>
      </tr>
    </>
  );
}

export default Row;
