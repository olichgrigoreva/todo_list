import React from 'react';
import "./App.css";

import ActiveNote from './ActiveNote.js';
import NoteService from './NoteService.js';
import AddNote from './AddNote.js';

let note1 =
    {
        id: 1,
        author_id: 1,
        content: "Hello",
        title: "first",
        date: "2019-07-12"
    };

let note2 =
    {
        id: 2,
        author_id: 2,
        content: "world",
        title: "second",
        date: "2013-04-11"
    };

let note3 =
    {
        id: 3,
        author_id: 3,
        content: "qwerty",
        title: "qwerty",
        date: "2012-04-11"
    };

let notes = [note1, note2, note3];
localStorage.setItem("notebook",JSON.stringify(notes));

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //Идем от обратного
            notes: NoteService.getNote()
        }
        if (!this.state.notes){
            this.state.notes = []
        }
        console.dir(this.state);
    }

    showItem(id){
        this.setState({ //rf;lsq hfp rjulf dspsdftncz setstate вызывается рендер и отрисовывается все
            active: id,
            form: 0//какя именно запись должна показываться
        })
    }

    addNote(){
        this.setState({ //rf;lsq hfp rjulf dspsdftncz setstate вызывается рендер и отрисовывается все
            form: 1 //какя именно запись должна показываться
        })
        console.dir(this.state.form);
    }

    saveNote(note){
        //console.dir(note);

        //console.dir(this.state.form);
        this.state.notes.push(note);
        NoteService.save(this.state.notes)
        this.setState({ //rf;lsq hfp rjulf dspsdftncz setstate вызывается рендер и отрисовывается все
            form: 0, //какя именно запись должна показываться
            notes: NoteService.getNote()
        })
    }

    render() {
        let notes = this.state.notes; //дальше мы вызываем переменную, которую должны сначала объявить
        console.dir(this.state);

        let activeNote = notes.find (note => //как в map перебираем объекты
            note.id == this.state.active
        );

        //проверка на пустоту
        if (!activeNote){
            activeNote = [];
        }

        return (
            <div className="App">

                <header className="App-header">
                    SUPER NOTEBOOK
                </header>

                <div className="App-content">
                    {/*App-content*/}
                    <div className="App-list">
                        App-list
                        {notes.map(note => (
                            <div key={note.id} onClick = {
                                this.showItem
                                    .bind(this,note.id)
                            }>
                                {note.title}, {note.content}
                            </div>
                        ))}
                        <button className="btn" onClick = {this.addNote.bind(this)}>Add new note</button>
                    </div>
                    {!!this.state.active && !this.state.form &&(
                        <ActiveNote activeNote1 = {activeNote}/>
                    )}

                    {!!this.state.form &&(
                        <AddNote saveNote = {this.saveNote.bind(this)}/>
                    )}
                </div>

                <footer className="App-footer">
                    <h4>Copyright by olichgrigoreva</h4>
                    <h4>2019</h4>
                </footer>

            </div>
        )
    }
}

//экспорт компонента в index.js
export default App;