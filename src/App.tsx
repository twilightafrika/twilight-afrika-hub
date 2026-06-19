import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RetailAssistant from './pages/demos/RetailAssistant';
import ClinicBooking from './pages/demos/ClinicBooking';
import LeadScoring from './pages/demos/LeadScoring';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/retail-assistant" element={<RetailAssistant />} />
        <Route path="/demo/clinic-booking" element={<ClinicBooking />} />
        <Route path="/demo/lead-scoring" element={<LeadScoring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
