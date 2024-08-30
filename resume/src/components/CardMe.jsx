import React from 'react';
import startbilde from "../assets/start_profilbilde.jpg"

const CardMe = () => {
    return (
        <div className="flex flex-col space-y-6 text-left p-4 rounded-md shadow-lg bg-white box-border w-1/2">
            <div className="flex flex-col">
                <img src={startbilde} style={{height: '100%', width: '100%', objectFit: 'cover',}} alt="Logo" />
                <h1 className="text-lg font-bold">Åsmund Løvoll</h1>
            </div>
            <div className="flex flex-col space-y-1">
            </div>
        </div>
    );
}


export default CardMe;