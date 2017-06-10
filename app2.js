import React, { Component } from 'react';
import { Drawer } from 'native-base';
import Home from './src/Containers/Home';
import SideBar from './src/Containers/showProduct';

export default class DrawerExample extends Component {
    render() {
        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
                
                <Home />
            </Drawer>
        );
    }
}