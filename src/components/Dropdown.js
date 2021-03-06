import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            document.body.addEventListener('click', (event) => {
                if (ref.current.contains(event.target)) {
                    return;
                }

                setOpen(false);
            });
        };

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });

    return (
        <div>
            <section className="ui form" ref={ref}>
                <div className="field">
                    <label className="lable">{label}</label>
                    <div
                        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                        onClick={() => setOpen(!open)}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu  ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                    </div>
                </div>
            </section>
            <section className="ui grid" style={{ color: selected.value, padding: '1em', marginTop: '1vh' }}>
                <h2>{selected.label}</h2>
            </section>
        </div>
    );
};

export default Dropdown;
