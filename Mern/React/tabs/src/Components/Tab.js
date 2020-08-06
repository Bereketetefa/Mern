import React, { useState } from 'react';

const Tab = props => {

    const [currentTab, setCurrentTab] = useState(0);

    const content = [
        "What does “best before date” mean ? any foods have a “best before” date printed on the label. date printed on the label. The best before date does not guarantee food safety, but it gives you information about the freshness and likely the shelf-life of the unopened food product. Once the package has been opened, the food should be stored properly and be eaten within a few days. You cannot always tell if food is safe by how it looks, smells or tastes. Always throw away any food after the “best before” date. Look at Tab 2 for more information", 

        "What does “cook thoroughly” mean? Properly cooking food kills most bacteria and makes the food safe to eat. Some processed or packaged foods are fully cooked and ready-to-eat. Other foods are not and may contain raw ingredients. If cooking instructions say “cook thoroughly” or “must be cooked”, or similar wording, follow the manufacturer’s cooking instructions. Warming up a food doesn’t destroy the bacteria.Foods containing raw ingredients, including raw meat, poultry, eggs and fish, are safe if cooked to an internal temperature of at least 74°C (165ºF). Use a clean and sanitized thermometer to check the temperature. Look at Tab 3 for emergency procedures",

        "Is it an emergency? If you or someone in your care has chest pains, difficulty breathing, or severe bleeding, it could be a life-threatening emergency. Call 9-1-1 or the local emergency number immediately.If you are concerned about a possible poisoning or exposure to a toxic substance, call Poison Control now at 1-800-567-8911."
    ];

    return (
        <div>
            <h1>Tabs</h1>
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <a className={currentTab === 1 ? "nav-link active": "nav-link"} href="#" onClick={e => setCurrentTab(0)}>Tab 1</a>
                </li>
                <li className="nav-item">
                    <a className={currentTab === 1 ? "nav-link active": "nav-link"} href="#" onClick={e => setCurrentTab(1)}>Tab 2</a>
                </li>
                <li className="nav-item">
                    <a className={currentTab === 1 ? "nav-link active": "nav-link"} href="#" onClick={e => setCurrentTab(2)}>Tab 3</a>
                </li>
            </ul>
            <div className="alert alert-info">{content[currentTab]}</div>
        </div>
    );
}

export default Tab;