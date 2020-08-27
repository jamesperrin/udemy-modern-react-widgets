import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    // [] - Run at initial render
    // ...nothing - Run at initial render AND Run after every rerender
    // [data] - Run at initial render AND (Run after every rerender AND if data has changed)
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });

            setResults(data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 750);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [term]);

    const renderedResults = results.map((results) => {
        return (
            <div className="item" key={results.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${results.pageid}`} className="ui button" title={`Go to ${results.title}`} target="_blank" rel="noopener noreferrer">Go</a>
                </div>
                <div className="content">
                    <div className="header">{results.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;
