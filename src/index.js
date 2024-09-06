import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Register from './Component/Register/Register';
import Home from './Component/Home/Home';
import ForgotPass from './Component/ForgotPass/ForgotPass';
import ResetPassword from './Component/ResetPassword/ResetPassword';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<App/>}>
                <Route path='/' element={<Home/>} />
              </Route>
              <Route path='/register' element={<Register/>}/>
              <Route path='/forgotpass' element = {<ForgotPass/>}/>
              <Route path='/resetpass' element = {<ResetPassword/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

