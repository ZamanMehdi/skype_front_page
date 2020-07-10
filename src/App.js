import React from 'react';

//components
import NavBar from './components/navBar';
import TitleDiv from './components/titleDiv';
import Features from './components/features';
import Try from './components/try';
import Footer from './components/footer';

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <NavBar />
                <TitleDiv />
                <Features />
                <Try />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;