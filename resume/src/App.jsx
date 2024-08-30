import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Card from './components/Card';
import CardVerv from './components/CardVerv';
import CardMe from './components/CardMe'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-400 p-4">
      {/* Container for Cards */}
      <div className="flex flex-col gap-4 flex-grow">
        <div className="flex justify-end">
          <Card />
        </div>
        <div className="flex justify-end">
          <CardVerv />
        </div>
        
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
