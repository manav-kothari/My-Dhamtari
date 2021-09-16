import React from "react";
import Header from "../components/Header";
// import { Card, Button, Col, Row } from "react-bootstrap";

const MenuScreen = () => {
  return (
    <div style={{ height: "90vh" }}>
      <Header />
      <div className="alert alert-info text-center blink_me p-3 my-5 text-capitalize h1 text-dark">
        Coming Soon...
      </div>
    </div>
    // <div className="page2 text-center">
    //   <Header />
    //   <Row className="row p-2">
    //     <Col sm={12} md={6} lg={4} xl={4}>
    //       <Card className="my-2 p-1 rounded cards">
    //         <Card.Body className="card-body text-center">
    //           <a href="http://mydhamtarihomemenu.herokuapp.com/">
    //             <Card.Title>
    //               <strong className="text-dark">Homemade Food Menu</strong>
    //             </Card.Title>
    //           </a>
    //           <a href="http://mydhamtarihomemenu.herokuapp.com/">
    //             <Button
    //               style={{ backgroundColor: "#000" }}
    //               variant="dark btn-block"
    //             >
    //               See Menu
    //             </Button>
    //           </a>
    //         </Card.Body>
    //       </Card>
    //     </Col>

    //     <Col sm={12} md={6} lg={4} xl={4}>
    //       <Card className="my-2 p-1 rounded cards">
    //         <Card.Body className="card-body text-center">
    //           <a href="/menu/restaurant">
    //             <Card.Title>
    //               <strong className="text-dark">Restaurant Menu</strong>
    //             </Card.Title>
    //           </a>
    //           <a href="/menu/restaurant">
    //             <Button
    //               style={{ backgroundColor: "#000" }}
    //               variant="dark btn-block"
    //             >
    //               See Menu
    //             </Button>
    //           </a>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default MenuScreen;
