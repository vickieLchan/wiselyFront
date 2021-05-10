import React, { useCallback, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import ReservationForm from './components/reservationForm';
import InventoryForm from './components/InventoryForm';
import './App.css';

function App() {
  const [selectedForm, setSelectedForm] = useState('inventory');
  const handleFormSelect = useCallback((formName: string) => {
    if (formName !== selectedForm) {
      setSelectedForm(formName);
    }
  }, [selectedForm, setSelectedForm])
  return (
    <Container className="App">
      <Container>
        <Button onClick={() => handleFormSelect('inventory')}>inventory</Button>
        <Button onClick={() => handleFormSelect('reservation')}>reservation</Button>
      </Container>
      {
        selectedForm === 'inventory' && <InventoryForm />
      }
      {
        selectedForm === 'reservation' && <ReservationForm />
      }
    </Container>
  );
}

export default App;
