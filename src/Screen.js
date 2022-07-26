import React from 'react';
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import MyMusic from './MyMusic';
import Artists from './Artists';
import Coverflow from './Coverflow';

class Screen extends React.Component{

    // rendering the code to display
    render(){
        return(
            <div style={styles.screen} id='screen-container'>
                {this.props.activePage==='Coverflow'?<Coverflow /> : null}
                {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                {this.props.activePage==='Games'?<Games /> : null}
                {this.props.activePage==='Settings'?<Settings /> : null}
                {this.props.activePage==='MyMusic'?<MyMusic audio={this.props.audio} /> : null}
                {this.props.activePage==='Artists'?<Artists /> : null} 
            </div>
        );
    }
    
}

// Styles for Screen
const styles = {
    screen : {
        height : '50%',
        width : '95%',
        borderRadius : '12px',
        backgroundColor : 'white',
        border : '2px solid black',
        marginTop : '1.3rem'
    }
}

export default Screen;