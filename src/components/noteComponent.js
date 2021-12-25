import './noteComponent.css'

const noteComponent = ({ note }) => {
    return (
        <div className='noteComponent'>
           <p className='date'>{note.date}</p>
           <p className='title'>{note.title}</p>
           <div className='tagsContainer'>
            { note.tags.map((t) => {
                return <p className='tags'>{t}</p>
            })}
           </div>
           <div className='body'>
            <p className='bodyText'>{note.body}</p>
           </div>
        </div>
    )
}

export default noteComponent
