import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import AddClient from './clients/AddClient';
import TableClients from './pages/TableClients';
import EditClient from './clients/EditClient';
import ViewClient from './clients/ViewClient';
import ScrollToTop from "./components/scroll/Scroll";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addclient' element={<AddClient />} />
                    <Route path='/tableclients' element={<TableClients />} />
                    <Route path='/editclient/:id' element={<EditClient />}/>
                    <Route path="/viewclient/:id" element={<ViewClient />} />
                </Routes>
                <Footer />
                <ScrollToTop/>
            </Router>
        </div>
    );
}

export default App;