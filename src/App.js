import './App.css';
import Header from './components/Header';
import ListComponent from './components/listComponent';
import Topbar from './components/Topbar';
// import NoteComponent from './components/noteComponent';
// import { Folders, Notes } from './data';

const App = () => {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Main */}
      <main className='main'>
        <Topbar />
        <ListComponent />
      </main>
      
    </div>
  );
}

export default App;
