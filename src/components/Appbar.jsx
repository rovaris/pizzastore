import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ShoppinCartIcon from 'material-ui/svg-icons/action/shopping-cart';

class AppBarExampleComposition extends Component {
    state = {
        logged: true,
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        return (
            <AppBar
                title="Waldo's Pizza Express"
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={ <IconButton> <ShoppinCartIcon /> </IconButton> }
            />
        );
    }
}

export default AppBarExampleComposition;