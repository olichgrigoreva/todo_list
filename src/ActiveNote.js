import React from 'react';
import "./App.css";
//или
/*import React, { Component } from 'react';
 export default class ActiveNote extends Component {*/

export default class ActiveNote extends React.Component {

    render() {

        return (
            <div className="App-text">
                App-text обертка
                <div className="App-title">
                    {this.props.activeNote1.title}
                </div>

                <div className="App-date">
                    {this.props.activeNote1.date}
                </div>

                <div className="App-note-content">
                    {this.props.activeNote1.content}
                </div>

                <div className="App-author">
                    {this.props.activeNote1.author_id}
                </div>
            </div>
        )
    }
}