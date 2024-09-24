import './index.css';
import React,{useState} from 'react'
import Employee from './components/Employee';
import {v4 as uuidv4} from 'uuid'


function App() {
  const [role,setRole]=useState('dev');
  const [employees,setEmployees] = useState(
    [
      {
        name: "Gabe",
        role:"Junior Developer",
        img:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Marilia",
        role:"Manager",
        img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "George",
        role:"Dev Ops Guy",
        img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Phil",
        role:"Software Engineer",
        img:"https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Elsa",
        role:"Senior",
        img:"https://images.pexels.com/photos/2744193/pexels-photo-2744193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        name: "Beth",
        role:"Director of Eng.",
        img:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  );


  return (
  <div className='App'>
    <input
      type='text'
      onChange={(e)=>{setRole(e.target.value)}}/>
    <div className='flex flex-wrap justify-center'>
      {employees.map((employee) => {
        return(
          <Employee
            key={uuidv4()}
            name={employee.name}
            role={employee.role}
            img={employee.img}
          />
        )

      })}

    </div>
    
  </div>);
}

export default App; 
