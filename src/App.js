import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddClient from './clients/AddClient';
import EditClient from './clients/EditClient';
import ViewClient from './clients/ViewClient';
import Footer from './components/footer/Footer';


function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/addclient' element={<AddClient />} />
                    <Route exact path='/editclient/:id' element={<EditClient />}/>
                    <Route exact path="/viewclient/:id" element={<ViewClient />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;