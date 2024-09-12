import * as React from 'react';
import './App.css';

/* TA1
const Card = ({ title, description, assignedPerson, startDate, endDate }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-assigned-person"><strong>Persona asignada:</strong> {assignedPerson}</p>
      <p className="card-dates">
        <strong>Fecha inicio:</strong> {startDate} <br />
        <strong>Fecha de fin:</strong> {endDate}
      </p>
    </div>
  );
};

const App = () => {
  const cardData = [
    {
      title: 'Card 1',
      description: 'Descripción del primer card.',
      assignedPerson: 'Persona 1',
      startDate: '2024-09-01',
      endDate: '2024-09-10'
    },
    {
      title: 'Card 2',
      description: 'Descripción del segundo card.',
      assignedPerson: 'Persona 2',
      startDate: '2024-09-05',
      endDate: '2024-09-15'
    },
    {
      title: 'Card 3',
      description: 'Descripción del tercer card.',
      assignedPerson: 'Persona 3',
      startDate: '2024-09-10',
      endDate: '2024-09-20'
    }
  ];

  return (
    <div>
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          description={data.description}
          assignedPerson={data.assignedPerson}
          startDate={data.startDate}
          endDate={data.endDate}
        />
      ))}
    </div>
  );
};

export default App;
*/

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card>
        <h2 className="card-title">Card 1</h2>
        <p className="card-description">Descripción del primer card.</p>
        <p className="card-assigned-person"><strong>Persona asignada:</strong> Persona 1</p>
        <p className="card-dates">
          <strong>Fecha inicio:</strong> 2024-09-01 <br />
          <strong>Fecha de fin:</strong> 2024-09-10
        </p>
      </Card>

      <Card>
        <h2 className="card-title">Card 2</h2>
        <p className="card-description">Descripción del segundo card.</p>
        <p className="card-assigned-person"><strong>Persona asignada:</strong> Persona 2</p>
        <p className="card-dates">
          <strong>Fecha inicio:</strong> 2024-09-05 <br />
          <strong>Fecha de fin:</strong> 2024-09-15
        </p>
      </Card>

      <Card>
        <h2 className="card-title">Card 3</h2>
        <p className="card-description">Descripción del tercer card.</p>
        <p className="card-assigned-person"><strong>Persona asignada:</strong> Persona 3</p>
        <p className="card-dates">
          <strong>Fecha inicio:</strong> 2024-09-10 <br />
          <strong>Fecha de fin:</strong> 2024-09-20
        </p>
      </Card>
    </div>
  );
};

export default App;
