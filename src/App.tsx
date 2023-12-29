import { GlobalStyles } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#555b67', color: '#fff', margin: 0 },
        }}
      />
      {/* <CssBaseline /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
