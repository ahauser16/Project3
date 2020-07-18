import React, {Component} from "react";

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const {opened} = this.state;
        this.setState({ opened: !opened})
    }
    render() {
        var{title, children} = this.props;
        const {opened} = this.state;

        if(opened){
            title = 'Close';
        }else{
            title = 'Add Dog';
        }

        return (
            <div>
            <div className='titleDiv' onClick={this.toggle}>
                {title}
            </div>
            {opened && (
                <div className='contentDiv'>
                    {children}
                </div>
            )}
            </div>
        )
    }
};

export default Toggle;