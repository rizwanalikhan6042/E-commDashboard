
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import PrivateComponents from './components/PrivateComponents';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">

        <Navbar />
        
        <Routes>

          <Route element={<PrivateComponents />} >
          {/* The components which we want to make private will be under this private component route The meaning of making component private means 
          when user logged in only then this components will appear and user can access otherwise not*/}
          <Route path='/' element={<h1>Product Listing Component</h1>} />
          <Route path='/add' element={<h1>Add Product Listing Component</h1>} />
          <Route path='/update' element={<h1> update Product Listing Component</h1>} />
          <Route path='/logout' element={<h1>logout Product Listing Component</h1>} />
          <Route path='/profile' element={<h1>profile Product Listing Component</h1>} />

          {/* We are taking sign up page outside private component route because we don't want to make it private */}
          
          </Route>
          {/*  Define a route for the '/signup' path and '/login' path, rendering the SignUp component and  Login component*/}
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='/login' element={<Login />} />

        </Routes>
        
        
      </BrowserRouter>
      <Footer />
      
     
    </div>
  );
}

export default App;
