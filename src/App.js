import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Map from './pages/Map/Map';
import ComponentSandbox from './pages/ComponentSandbox/ComponentSandbox';
import ProblemsDash from './pages/ProblemsDash/ProblemsDash';
import CreateProblem from './pages/CreateProblem/CreateProblem';
import Layout from './Components/Layout';
import ProblemSearch from './pages/ProblemSearch/ProblemSearch';
import ProblemView from './pages/ProblemView/ProblemView'; // Ensure this import is correct
import IndiProblemView from './pages/IndiProblemView/IndiProblemView'; // Ensure this import is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* All routes that need header/footer go under Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="/sandbox" element={<ComponentSandbox />} />
          <Route path="/MainActor" element={<ProblemsDash />} />
          <Route path="/CreateProblem" element={<CreateProblem />} />
          <Route path="/ProblemSearch" element={<ProblemSearch />} />
          <Route path="/ProblemView" element={<ProblemView />} />
          <Route path="/IndiProblemView" element={<IndiProblemView />} />


          

        </Route>

        {/* Optional: standalone routes without layout */}
        {/* <Route path="/fullpage-login" element={<FullScreenLogin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
