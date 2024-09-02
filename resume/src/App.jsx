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
    <div className="flex flex-col space-y-10 min-h-screen bg-gray-400 gap-4 p-4">
      {/* Container for Cards */}
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
        <CardMe />
        <div className="flex flex-col gap-4 flex-grow">
          <div className="flex justify-end touch-pan-up">
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
