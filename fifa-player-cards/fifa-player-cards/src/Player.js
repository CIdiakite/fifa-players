import React from 'react';
import { Card } from 'react-bootstrap';

const cardStyle = {
  width: '18rem',
  margin: '1rem',
  textAlign: 'center'
};

const Player = ({ nom = "Inconnu", equipe = "Aucune", nationalite = "N/A", numero = 0, age = 0, image = "https://via.placeholder.com/150" }) => {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {equipe}<br />
          <strong>Nationalité:</strong> {nationalite}<br />
          <strong>Numéro:</strong> {numero}<br />
          <strong>Âge:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;