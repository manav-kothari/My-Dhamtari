import React from "react";
import Header from "../components/Header";

const ComingSoon = () => {
  return (
    <div style={{ height: "90vh" }}>
      <Header />
      <div className="alert alert-info text-center blink_me p-3 my-5 text-capitalize h1 text-dark">
        Coming Soon...
      </div>
    </div>
  );
};

export default ComingSoon;
