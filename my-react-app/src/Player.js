
// src/Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaFutbol } from 'react-icons/fa'; // Exemple d'icône

const cardStyle = {
  width: '20rem',
  margin: '1rem',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  fontFamily: 'Roboto, sans-serif',
  backgroundColor: '#1c1c1c',
  color: '#ffffff'
};

const imageStyle = {
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px'
};

const textStyle = {
  fontSize: '1rem',
  fontWeight: '400'
};

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} style={imageStyle} />
      <Card.Body>
        <Card.Title style={{ fontWeight: '700', fontSize: '1.2rem' }}>
          <FaFutbol /> {name}
        </Card.Title>
        <Card.Text style={textStyle}>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};



export default Player;