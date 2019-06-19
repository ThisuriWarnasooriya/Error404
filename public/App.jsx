import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/app/course/').then ( res => {
            this.setState()
        })
    }

    render() {
        return <h2>{this.state.message}</h2>;
    }
}
