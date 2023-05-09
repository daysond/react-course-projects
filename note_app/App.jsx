import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { nanoid } from "nanoid"
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase"

export default function App() {

    
    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState("")
    const [tempNoteText, setTempNoteText] = React.useState("")

    const currentNote = 
        notes.find(note => note.id === currentNoteId) 
        || notes[0]

    React.useEffect(() => {
        // set up listener
        const unsubscribe = onSnapshot(notesCollection, (snapshot)=> {
            const notesArr = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })).sort((a, b) => b.updatedAt - a.updatedAt)
            setNotes(notesArr)
        })

        // clean up 
        return unsubscribe
    }, [])

    React.useEffect(()=> {
        if(!currentNoteId) {
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes])

    React.useEffect(()=> {
        if(currentNote)
            setTempNoteText(currentNote.body)
    }, [currentNote])


    React.useEffect(()=> {

        const timeoutId = setTimeout(()=> {
            if(tempNoteText !== currentNote.body) {
                console.log("updating")
                updateNote(tempNoteText)
            }
        }, 500)

        return ()=> clearTimeout(timeoutId)
    }, [tempNoteText])

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
    }

  
    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId)
        // merge: update only body instead of overwriting the whole doc
        await setDoc(docRef, {body: text, updatedAt: Date.now()}, {merge: true})
    }

    async function deleteNote(noteId) {
        const docRef = doc(db, "notes", noteId)
        await deleteDoc(docRef)
    }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
            
                            <Editor
                                currentNote={tempNoteText}
                                updateNote={setTempNoteText}
                            />
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                </button>
                    </div>

            }
        </main>
    )
}
