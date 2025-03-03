import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Card className="my-5">
        <Card.Body>
          <Card.Title className="display-4">Bienvenue sur Tech Store</Card.Title>
          <Card.Text className="lead">
            Votre destination ultime pour des produits technologiques de pointe à des prix imbattables !
          </Card.Text>
          <hr className="my-4" />
          <Card.Text>
            Explorez notre sélection organisée de gadgets, des smartphones aux appareils intelligents pour la maison.
            Embrassez l'avenir de la technologie et déverrouillez les possibilités que la technologie de pointe a à offrir.
          </Card.Text>
          <Link to="/productlist">
            <Button variant="primary" className="btn-lg">Notre Produits</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="my-5 bg-light">
        <Card.Body>
          <Card.Title className="display-5">Notre Contact</Card.Title>
          <hr className="my-3" />
          <Card.Text>
            <strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              Téléphone :
            </strong> +216 29 422 812
          </Card.Text>
         <Card.Text>
            <strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook me-2" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
              Facebook:
            </strong>{' '}
            <a href="https://www.facebook.com/zohrabenhassen" target="_blank" rel="noopener noreferrer">Tech Store</a>
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
