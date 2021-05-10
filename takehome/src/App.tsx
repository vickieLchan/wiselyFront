import React from 'react';
import './App.css';

function App() {
  const [selectedForm, setSelectedForm] = useHook('inventory')
  return (
    <Container>
      <Container>
        <Button></Button>
        <Button></Button>
      </Container>

    </Container>
  );
}

export default App;
