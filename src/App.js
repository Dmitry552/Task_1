import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {PreHeader} from './components/PreHeader';
import {Header} from './components/Header';
import {Solution} from './components/Solution';
import {Social} from './components/Social';
import {Advantages} from './components/Advantages';
import {CommentBlock} from './components/CommentBlock';
import {Sentence} from './components/Sentence';
import {PreFooter} from './components/PreFooter';
import {Footer} from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Switch>
              <Route path='/' exact>
                <PreHeader />
                <Header />
                <Solution />
                <Social />
                <Advantages />
                <CommentBlock />
                <Sentence />
                <PreFooter />
                <Footer />
              </Route>
              <Route path='*'>
                <Redirect to='/'/>
              </Route>
            </Switch>
        </>
      </Router>
      
    </div>
  );
}

export default App;
