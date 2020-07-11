import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import './App.css';

export default class PostRoute extends React.Component {

    state = {
        loading: true,

    }

    async componentDidMount() {
        const url = "https://api.randomuser.me";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.person ? (
                    <div>loading...</div>
                ) : (
                        <div>
                            <div>{this.state.person.name.title} </div>
                            <div>{this.state.person.name.first} </div>
                            <div>{this.state.person.name.last} </div>
                        </div>
                    )}
            </div>
        );
    }
}
