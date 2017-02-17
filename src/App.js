import React, {Component} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Posts from './components/Posts/Posts';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title="My Awesome Blog"/>
                <section>
                    <Posts />
                </section>
                <Footer />
            </div>
        );
    }
}

export default App;
