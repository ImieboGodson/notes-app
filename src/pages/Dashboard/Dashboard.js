import ListComponent from '../../components/ListComponent'
import { useState } from 'react';
import './dashboard.css'

const Dashboard = () => {
    // ViewState Management
    const [viewState, setViewState] = useState('notes');

    // Declaring and attaching functions to topbar buttons
    const notesViewBtn = document.getElementById('notesViewButton');
    const collectionsViewBtn = document.getElementById('collectionsViewButton');
  
    // Changes View to Notes View and Updates ViewState
    const onNotesViewChange = () => {
      notesViewBtn.classList.add('active');
      collectionsViewBtn.classList.remove('active');
      setViewState('notes');
    }
  
    // Changes View to Collections View and Updates ViewState
    const onCollectionsViewChange = () => {
      if(viewState === 'notes') {
        setViewState('collections');
        notesViewBtn.classList.remove('active');
      }
      collectionsViewBtn.classList.add('active');
    }


    return (
        <div className='dashboard'>
            {/* Main */}
            <main className='main'>
                {/* Topbar */}
                <div className='topbar'>
                    <ul className='topbarNavList'>
                        <li id='notesViewButton' className={`topbarNavItems ${viewState === 'notes' ? 'active' : ''}`} onClick={onNotesViewChange}>All Notes</li>
                        <li id='collectionsViewButton' className='topbarNavItems' onClick={onCollectionsViewChange}>Collections</li>
                    </ul>
                </div>
                {/* ListComponent */}
                <ListComponent view={viewState} />
            </main>
        </div>
    )
}

export default Dashboard
