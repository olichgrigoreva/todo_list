import React from 'react';
import "./App.css";

export default class AddNote extends React.Component {

    saveMyForm(){
        //console.dir("saveMyForm"); //функция в этом же конмоненте, чтобы иметь доступ к рефам
        let newNote = {
            id: this.id.value,
            title: this.title.value,
            content: this.content.value,
            author_id: this.author_id.value,
        }

        this.props.saveNote(newNote);
        //console.dir(newNote);
    }

    render() {

        return (
            <div>
                <input ref = {el => this.id = el}/>
                <input ref = {el => this.title = el}/>
                <input ref = {el => this.content = el}/>
                <input ref = {el => this.date = el}/>
                <input ref = {el => this.author_id = el}/>
                <button className="btn" onClick = {this.saveMyForm.bind(this)}>Save form data</button>
            </div>
        )
    }
}