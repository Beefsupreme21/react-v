import { useState, useEffect } from 'react'

function NotesPage() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editingId, setEditingId] = useState(null)

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes')
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const saveNote = () => {
    if (!title.trim() || !content.trim()) return

    if (editingId) {
      // Update existing note
      setNotes(notes.map(note =>
        note.id === editingId
          ? { ...note, title, content, updatedAt: new Date().toISOString() }
          : note
      ))
      setEditingId(null)
    } else {
      // Create new note
      const newNote = {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toISOString()
      }
      setNotes([...notes, newNote])
    }

    setTitle('')
    setContent('')
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const startEdit = (note) => {
    setTitle(note.title)
    setContent(note.content)
    setEditingId(note.id)
  }

  const cancelEdit = () => {
    setTitle('')
    setContent('')
    setEditingId(null)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Notes</h1>

      <div className="bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? 'Edit Note' : 'New Note'}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#242424] focus:outline-none focus:border-[#646cff]"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Note content..."
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#242424] focus:outline-none focus:border-[#646cff]"
          />
          <div className="flex gap-2">
            <button
              onClick={saveNote}
              className="px-6 py-2 bg-[#646cff] text-white rounded-lg hover:bg-[#535bf2] transition-colors"
            >
              {editingId ? 'Update' : 'Save'}
            </button>
            {editingId && (
              <button
                onClick={cancelEdit}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notes.map(note => (
          <div
            key={note.id}
            className="bg-white dark:bg-[#1a1a1a] p-4 rounded-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-wrap">
              {note.content}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => startEdit(note)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(note.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {notes.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No notes yet. Create one above!</p>
      )}
    </div>
  )
}

export default NotesPage
