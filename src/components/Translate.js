import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Dutch',
        value: 'nl',
    },
    {
        label: 'German',
        value: 'de',
    },
    {
        label: 'Italian',
        value: 'it',
    },
    {
        label: 'Spanish',
        value: 'es',
    },
    {
        label: 'Tagalog (Filipino)',
        value: 'tl',
    },
];

const Transplate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label="Select a Language" selected={language} onSelectedChange={setLanguage} options={options} />
            <hr />
            <h3 className="ui header">Outpout</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Transplate;
