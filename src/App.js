import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at Scool',
        day: 'Feb 6th at 2:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 6th at 2:30pm',
        reminder: false
    }
]);
  
  return (
    <div className="container">
     <Header title="Task tracker"/>
     <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
