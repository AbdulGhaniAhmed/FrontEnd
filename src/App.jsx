import React,{Component}  from 'react';
import Navigation from './Components/Navigation';
import Practice from './Components/Practice';
import Contact from './Components/Contact';
import About from './Components/About';
import Error from './Components/Error';
import { Route, Switch } from 'react-router-dom';
import Mininav from './Components/Mininav';
import Album from './Components/Album';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ProductCategories from './Components/ProductCategories';
import MasonryPage from './Components/MasonryPage';
import ParallaxPractice from './Components/ParallaxPractice';
import FirstCard from './Components/FirstCard';
import './index.css';

class App extends Component{
    render(){
        return(
            <>
            <Mininav />
            <Navigation />
            
            <Switch>
                <Route exact path='/' render={() => <Practice name='Ghani' lang='python'>
                    <p>Now I am learning React</p>
                </Practice>} />
                <Route exact path='/contact-us' component={Contact} />
                <Route exact path='/about-us' component={About} />
                <Route exact path='/signIn' component={SignIn} />
                <Route exact path='/signUp' component={SignUp} />
                <Route component={Error} />
            </Switch>
            <FirstCard />
            <ProductCategories />
            {/* <Album/> */}
            {/* <ParallaxPractice/> */}
            {/* <MasonryPage /> */}
        </> 
        )
    }
}


export default App;