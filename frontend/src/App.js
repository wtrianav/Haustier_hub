import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import AddAdvisor from './components/advisors/AddAvisor';
import TableAdvisors from './components/advisors/TableAdvisors';
import ViewAdvisor from './components/advisors/ViewAddvisor';
import EditAdvisor from './components/advisors/EditAdvisor';
import AddClient from './components/clients/AddClient';
import TableClients from './components/clients/TableClients';
import EditClient from './components/clients/EditClient';
import ViewClient from './components/clients/ViewClient';
import AddPet from './components/pets/AddPet';
import TablePets from './components/pets/TablePets';
import EditPet from './components/pets/EditPet';
import ViewPet from './components/pets/ViewPet';
import AddCompany from './components/companies/AddCompany';
import TableCompanies from './components/companies/TableCompanies';
import LoginRegister from './components/pages/loginRegister/LoginRegister';
import GlobalStyle from './GlobalStyle';
import ScrollToTop from "./components/scroll/Scroll";
import IconsGridSection from './components/sections/IconsGridSection';
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/nosotros" element={<IconsGridSection />} />
                    <Route path='/addadvisor' element={<AddAdvisor />} />
                    <Route path='/tableadvisors' element={<TableAdvisors />} />
                    <Route path="/viewadvisor/:id" element={<ViewAdvisor />} />
                    <Route path='/editadvisor/:id' element={<EditAdvisor />}/>
                    <Route path='/addclient' element={<AddClient />} />
                    <Route path='/tableclients' element={<TableClients />} />
                    <Route path='/editclient/:id' element={<EditClient />}/>
                    <Route path="/viewclient/:id" element={<ViewClient />} />
                    <Route path='/addpet' element={<AddPet />} />
                    <Route path='tablepets' element={<TablePets />} />
                    <Route path='/editpet/:id' element={<EditPet />} />
                    <Route path='/viewpet/:id' element={<ViewPet />} />
                    <Route path='/addcompany' element={<AddCompany />} />
                    <Route path='/tablecompanies' element={<TableCompanies />} />
                    <Route path='/loginregister' element={<LoginRegister />} />
                </Routes>
                <Footer />
                <ScrollToTop />
            </Router>
        </div>
    );
}

export default App;