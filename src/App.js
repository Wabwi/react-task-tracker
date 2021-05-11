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
        id:2,
        text:'Food Shopping',
        day:'Feb 5th at 2pm',
        reminder:true,

    },
    {
        id:3,
        text:'Metting at School',
        day:'Feb 5th at 2pm',
        reminder:false,

    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id) )
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
