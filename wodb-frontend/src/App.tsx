import './App.css'
import Sidebar from './components/Sidebar';
import MainContent from './components/Main-Content';


function App() {

  return (
    <>
      <div className='flex font-mono'>
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
