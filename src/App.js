
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';



function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">

        <Navbar />
        
        <Routes>
          <Route path='/' element={<h1>Product Listing Component</h1>} />
         

          <Route path='/add' element={<h1>Add Product Listing Component</h1>} />
          <Route path='/update' element={<h1> update Product Listing Component</h1>} />
          <Route path='/logout' element={<h1>logout Product Listing Component</h1>} />
          <Route path='/profile' element={<h1>profile Product Listing Component</h1>} />
          <Route path='/signup' element = {<SignUp/>}/>
          
         
        </Routes>
        {/* <h2>E-Dashboard</h2> */}
        
      </BrowserRouter>
      <Footer />
      
     
    </div>
  );
}

export default App;
