export default class NoteService {

    static getNote(){ //xnj,s yt cjplfdfnm экземпляр класса
        return JSON.parse(localStorage.getItem("notebook"))
    }

    static save(notes){
        localStorage.setItem(
            "notebook",
            JSON.stringify(notes)
        );
    }
}