import React, {Component, PropTypes} from 'react';
import Pedalboard from 'pedalboard';
import Sidebar from './Sidebar/Sidebar';
import PedalboardComponent from './Pedalboard/Pedalboard';

export default class App extends Component {
    static propTypes = {
        onAdd: PropTypes.func.isRequired,
        pedals: PropTypes.array,
    };

    static defaultProps = {
        pedalboard: new Pedalboard()
    };

    render() {
        const sidebarProps = {
            onAdd: this.props.onAdd,
            pedalboard: this.props.pedalboard,
        };

        const pedalboardProps = {
            pedalboard: this.props.pedalboard,
            pedals: this.props.pedals,
        };

        return (
            <div className="container">
                <Sidebar className="sidebar" {...sidebarProps}/>
                <PedalboardComponent className="pedalboard" {...pedalboardProps}/>
            </div>
        );
    }
}