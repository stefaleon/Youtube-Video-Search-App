import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAy7irITnlGIgN4yqa2wz9qLb883YvpkmU';

// Create a component which should produce some HTML.
const App  = () => {
    return <div>
        Ohai!<br />
        <SearchBar />
    </div>;
}
// Put the component's generated HTML in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
