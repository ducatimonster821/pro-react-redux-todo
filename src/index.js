import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
    const value = '<script>alert("")</script>>';

    const loginBox = <span>Log in please</span>;
    // const loginBox = null;

    const isLoggedIn = true;

    const welcomeBox = <span>Welcome Back</span>;

    return (
        <div>
            { value }
            <span>{(new Date()).toString()}</span>
            {loginBox}
            {isLoggedIn ? null : isLoggedIn}
            {isLoggedIn ? welcomeBox : isLoggedIn}
            {true}
            {false}
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));
