import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="primary"
      className="text-white text-center text-lg-left"
    >
      <div style={{padding:' 20px 200px'}}>
        <h5 className="text-uppercase">About Us</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque
          ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
          repudiandae aliquam voluptatem veniam, est atque cumque eum delectus
          sint!
        </p>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-white" href="https://mdbootstrap.com/">
          K&T
        </a>
      </div>
    </MDBFooter>
  );
}
