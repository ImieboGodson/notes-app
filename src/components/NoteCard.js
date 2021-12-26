import './noteCard.css'

const NoteCard = ({ note }) => {
    return (
        <div className='noteCard'>
           <p className='date'>{note.date}</p>
           <p className='title'>{note.title}</p>
           <div className='tagsContainer'>
            { note.tags.map((t, i) => {
                return <p className='tags' key={i}>{t}</p>
            })}
           </div>
           <div className='body'>
            <p className='bodyText'>{note.body}</p>
           </div>
        </div>
    )
}

export default NoteCard
