import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointement',
        day:'Feb 5th at 2pm',
        reminder:true,

    },

    {
        id:1,
        text:'Food Shopping',
        day:'Feb 5th at 2pm',
        reminder:true,

    },
    {
        id:1,
        text:'Metting at School',
        day:'Feb 5th at 2pm',
        reminder:true,

    }
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks = {tasks} />
    </div>
  );
}

export default App;
