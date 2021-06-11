import React, {Component} from "react";

class PNhome extends Component {

    state = {
        vis: true
    }

    show = () => {
        this.setState({vis: true})
    }

    hide = () => {
        this.setState({vis: false})
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.vis ? <div className="alert alert-info" role="alert">
                        Programowanie reaktywne. Patryk Nytko, 33189
                    </div> : null}
                    <button onClick={this.show}>Show</button>
                    <button onClick={this.hide}>Hide</button>
                </div>
            </React.Fragment>
        )
    }
}

export default PNhome;
