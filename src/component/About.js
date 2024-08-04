import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} className="text-center">
          <h1 className="mb-4">Bienvenue sur Tech Store</h1>
          <p className="lead">
            Votre destination ultime pour des produits technologiques de pointe à des prix imbattables !
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={6}>
          <h2>Pourquoi choisir Tech Store ?</h2>
          <ul className="list-unstyled">
            <li>
              <i className="bi bi-check-circle-fill me-2 text-primary"></i>
              Sélection organisée : Nous choisissons soigneusement une gamme diversifiée de produits technologiques de haute qualité.
            </li>
            <li>
              <i className="bi bi-check-circle-fill me-2 text-primary"></i>
              Prix imbattables : Nous nous efforçons d'offrir les meilleurs prix du marché.
            </li>
            <li>
              <i className="bi bi-check-circle-fill me-2 text-primary"></i>
              Satisfaction client : Votre satisfaction est notre priorité absolue.
            </li>
            <li>
              <i className="bi bi-check-circle-fill me-2 text-primary"></i>
              Sécurité et fiabilité : Vos informations personnelles sont en sécurité avec nous.
            </li>
            <li>
              <i className="bi bi-check-circle-fill me-2 text-primary"></i>
              Expédition rapide : Nous proposons des options d'expédition rapides et fiables.
            </li>
            <li>
              <i className="bi bi-check-circle-fill me-2 text-primary"></i>
              Communauté de passionnés de technologie : Rejoignez notre communauté vibrante de passionnés de technologie.
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6}>
          <h2>Embrassez l'avenir de la technologie</h2>
          <p>
            Que vous soyez un passionné de technologie, un professionnel à la recherche d'outils de productivité ou simplement
            à la recherche d'un super cadeau pour quelqu'un de spécial, Tech Store a le produit parfait pour vous.
          </p>
          <p>
            Découvrez les merveilles de la technologie de pointe et explorez notre sélection organisée de gadgets,
            des smartphones aux appareils intelligents pour la maison. Profitez d'une expédition rapide, de transactions
            sécurisées et d'un service client amical. Rejoignez notre communauté de passionnés de technologie et achetez maintenant
            pour vivre une expérience technologique exceptionnelle chez Tech store .
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
