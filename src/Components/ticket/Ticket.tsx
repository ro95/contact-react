import React from 'react';

import './ticket.css';

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <h2>Événement Spécial</h2>
      </div>
      <div className="ticket-content">
        <p>Nom: <span className="name">Nom_de_famille</span></p>
        <p>Prénom: <span className="surname">Prénom</span></p>
      </div>
      <div className="ticket-footer">
        <p>Date de l'événement: 01/01/2023</p>
        <p>Lieu de l'événement: Paris, France</p>
      </div>
    </div>

  );
};

export default Ticket;
