import ListComponent from '../../components/listComponent/ListComponent'
import { useState } from 'react';
import './dashboard.css'
import SecondaryNavbar from '../../components/secondaryNavbar/SecondaryNavbar';

const Dashboard = () => {
    // ViewState Management
    const [viewState, setViewState] = useState('notes');

  
    // Changes View to Notes View and Updates ViewState
    const onNotesViewChange = () => {
      setViewState('notes');
    }
  
    // Changes View to Collections View and Updates ViewState
    const onCollectionsViewChange = () => {
        setViewState('collections');
    }


    return (
        <div className='dashboard'>
            {/* Main */}
            <main className='main'>
                {/* Topbar */}
                {/* <div className='topbar'>
                    <ul className='topbarNavList'>
                        <li id='notesViewButton' className={`topbarNavItems ${viewState === 'notes' ? 'active' : ''}`} onClick={onNotesViewChange}>All Notes</li>
                        <li id='collectionsViewButton' className='topbarNavItems' onClick={onCollectionsViewChange}>Collections</li>
                    </ul>
                </div> */}
                <SecondaryNavbar view={viewState} onNoteViewChange={() => onNotesViewChange()} onCollectionViewChange={() => onCollectionsViewChange()}/>
                {/* ListComponent */}
                <ListComponent view={viewState} />
            </main>
        </div>
    )
}

export default Dashboard
