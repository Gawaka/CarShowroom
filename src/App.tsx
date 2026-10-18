import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from "./components/Header";
import { HomePage } from './pages/HomePage';
import { VehicleDetailsPage } from './pages/VehicleDetailsPage';

function App() {
  return(
    <>
      <Header/>
      <Container component="main" maxWidth="lg" sx={{ py: 3 }}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/vehicles/:vehicleId' element={<VehicleDetailsPage/>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;
