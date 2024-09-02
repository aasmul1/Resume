import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Card from './components/Card';
import CardVerv from './components/CardVerv';
import CardMe from './components/CardMe'
import CardTech from './components/CardTech'

function App() {
  const [count, setCount] = useState(0);

  return (

    <div className="flex flex-col space-y-10 min-h-screen bg-gray-400 gap-4">
      {/* Container for Cards */}
      <div className="flex flex-row space-x-8 p-3">
        <CardMe />
      <div className="flex flex-col gap-4 flex-grow">
        <div className="flex justify-end">
          <CardVerv />
        </div>
        <div className="flex justify-end">
          <CardTech />
        </div>
        <div className="flex justify-end">
          <Card />
        </div>
        
      </div>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
