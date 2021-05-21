import React from "react";
import { Col, Container, Row, Button } from 'react-bootstrap';
import QR from "./QR";
import '../App.css';

const Scan = () => {
  const [qrVisible, setQrVisible] = React.useState(false);
  const ChangeVisibility = () => {
    if(qrVisible){
      setQrVisible(false);
    }
    else{
      setQrVisible(true);
    }
  }
  return(
    <div>
      <Container fluid="true">
        <br/>
        <h2 className="heading">React QR Code Scanner</h2>
        <Row>
          <Col xl="4">
          </Col>
          <Col xl="4">
            <br/><br/>
            <div className="text-center">
              {(function() {
                if (qrVisible === false) {
                  return (
                    <Button onClick={ChangeVisibility}>
                      Open Camera for Scanning QR code
                    </Button>
                  );
                }else{
                  return (
                  <Button onClick={ChangeVisibility}>
                    Close Camera
                  </Button> 
                  );
                }
              })()}
              {(function() {
                if (qrVisible === true) {
                  return (
                    <QR/>
                  );
                }
              })()}
            </div>
          </Col>
          <Col xl="4">
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Scan;