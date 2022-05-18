import {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {UserContext} from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Explore from './components/Explore';
import BucketList from './components/bucketlist';
import CreateList from './components/CreateList';

function App() {

  const {user} = useContext(UserContext); 
 
  return (
    <div >
        <BrowserRouter>
          <Routes>
            { user && <Route path="/" element={<Home/>} /> }
            {!user && (
              <>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Register/>} />
              </>
            )}
            { user && <Route path="/explore" element={<Explore/>} /> }
            { user && <Route path="/createList" element={<CreateList/>} /> }
            { user && <Route path="/BucketList" element={<BucketList/>} /> }
            <Route path="*" element={<Navigate to={user ? '/':'/login'} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;