import React from 'react';
import './App.css';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Home />
    </main>
    <Footer />
  </div>
  );
};

export default App;
