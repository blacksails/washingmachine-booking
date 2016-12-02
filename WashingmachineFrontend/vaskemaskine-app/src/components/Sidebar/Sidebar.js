import React from 'react';
import './Sidebar.css'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                {this.props.children}
            </div>
        )
    }
}

export default Sidebar;