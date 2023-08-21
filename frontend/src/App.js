import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import AddClient from './components/clients/AddClient';
import TableClients from './components/clients/TableClients';
import EditClient from './components/clients/EditClient';
import ViewClient from './components/clients/ViewClient';
import LoginRegister from './components/pages/loginRegister/LoginRegister';
import GlobalStyle from './GlobalStyle';
import ScrollToTop from "./components/scroll/Scroll";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addclient' element={<AddClient />} />
                    <Route path='/tableclients' element={<TableClients />} />
                    <Route path='/editclient/:id' element={<EditClient />}/>
                    <Route path="/viewclient/:id" element={<ViewClient />} />
                    <Route path='/loginregister' element={<LoginRegister />} />
                </Routes>
                <Footer />
                <ScrollToTop />
            </Router>
        </div>
    );
}

export default App;