import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contacts } from './pages/Contacts';
import { UploadForm } from './pages/UploadForm';
import { Layout } from './components/layout';
import { useEffect } from 'react';
import { setupHeartbeat } from './lib/utils';
import './App.css';

function App() {
  useEffect(() => {
    const cleanupHeartbeat = setupHeartbeat();
    return cleanupHeartbeat;
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/upload" element={<UploadForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
