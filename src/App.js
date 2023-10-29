import Login from './Login'
import MainPage from './MainPage'
import Registration from './Registration';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signout from './Signout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signout />}>
            <Route path="/" element={<Login />} /> 
            <Route path="/register" element={<Registration />} />
          </Route>
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;