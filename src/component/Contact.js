import React, { Fragment } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";



function Contact() {
  return (
    <Fragment>
      
      <Container>
        <div className="w-50 mx-auto my-5">
          <Card>
            <Card.Header>
              <h3 className="text-center"> Contactez-nous</h3>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Votre nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Will Smith"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Votre Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="smith@example.com"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Votre Message</Form.Label>
                  <textarea
                    className="form-control"
                    rows={5}
                    style={{ resize: "none" }}
                    placeholder="Votre message"
                  ></textarea>
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" variant="dark">
                  Envoyer message
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
      
    </Fragment>
  );
}

export default Contact;
