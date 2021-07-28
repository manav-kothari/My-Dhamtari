import React from "react";
import { Container, Table } from "react-bootstrap";
import Header from "../../components/Header";
import policedata from "./policedata";
const PoliceScreen = () => {
  return (
    <div>
      <Header />
      <h3 className="heading text-center pt-1 my-4">Police Contact Details:</h3>
      <Container className="mb-4 pb-4">
        <Table
          striped
          bordered
          responsive
          hover
          variant="light"
          className="table-sm text-dark"
        >
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Contact No.</th>
            </tr>
          </thead>

          <tbody className="text-center text-dark">
            {policedata.map((data) => (
              <tr key={data._id}>
                <td>{data.title}</td>
                <td>{data.contact}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default PoliceScreen;
