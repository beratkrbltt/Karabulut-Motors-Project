import { useState } from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import PageContainer from './container/PageContainer';
import Cards from './Components/Cards.jsx';
import { Routes, Route } from 'react-router-dom';
import Service from './Components/Service.jsx';
import './css/Card.css';
import Footer from './Components/Footer.jsx';
import BookAppointment from './Components/BookAppointment.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <PageContainer>
          <Routes>
            <Route path='/' element={<Cards />} />
            <Route path='/Service' element={<Service />} />
            <Route path="/book-appointment/:id" element={<BookAppointment />} />
          </Routes>
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}

export default App;
