import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-grow">
        <h1>Hello World</h1>
        {/* Add some more content here if needed */}
      </header>
      <Footer />
    </div>
  );
}

export default App
