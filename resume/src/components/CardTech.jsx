import React from 'react';

const CardTech = () => {
    return (
        <div className="flex flex-col space-y-6 text-left p-4 rounded-md shadow-lg bg-white box-border h-full w-full">
            <div className="flex flex-row space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"/></svg>
                <h1 className="text-lg font-bold">Technical experience</h1>
            </div>
            <div className="flex flex-row space-x-4">
                <div className="flex flex-col space-y-2">
                    <h1 className = "font-bold">
                        Computer Science Project 
                    </h1>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Developed a simple note-taking application in a team of four developers</li>
                        <li>Learned about project setup as well as building a REST API to handle data storage</li>
                        <li>Technologies: Java, JavaFX, GitLab / GitHub</li>
                    </ul>
                </div>
                <div className = "flex flex-col space-y-2">
                    <h1 className = "font-bold">
                        Software Development 

                    </h1>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Together with a team of seven, we developed a travel destination application</li>
                        <li>Focused on Scrum and agile development. Learned how to set up a project in React with an associated database and user interface</li>
                        <li>Technologies: React with JavaScript, CSS, Firebase, GitLab / GitHub</li>
                    </ul>
                </div>
                <div className = "flex flex-col space-y-2">
                    <h1 className = "font-bold">
                    Database Project 

                    </h1>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Together with a team of three, we developed logic for retrieving data from a database</li>
                        <li>Technologies: Python, SQLite, GitLab / GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardTech;