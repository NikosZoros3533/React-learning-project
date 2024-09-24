import './index.css';
import React,{useState} from 'react'
import Employee from './components/Employee';



function App() {
  const [employees,setEmployees] = useState(
    [
      {
        id:1,
        name: "Gabe",
        role:"Junior Developer",
        img:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id:2,
        name: "Marilia",
        role:"Manager",
        img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id:3,
        name: "George",
        role:"Dev Ops Guy",
        img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id:4,
        name: "Phil",
        role:"Software Engineer",
        img:"https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id:5,
        name: "Elsa",
        role:"Senior",
        img:"https://images.pexels.com/photos/2744193/pexels-photo-2744193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id:6,
        name: "Beth",
        role:"Director of Eng.",
        img:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  );
  function updateEmployee(id,newName,newRole){
    const updatedEmployees=employees.map((employee)=>{
      if(id===employee.id){
        return {...employee,name:newName,role:newRole}
      }
      return employee;
    })
    setEmployees(updatedEmployees)
    
  }

  return (
  <div className='App'>
    <div className='flex flex-wrap justify-center'>
      {employees.map((employee) => {
        return(
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            updateEmployee={updateEmployee}
          />
        )

      })}

    </div>
    
  </div>);
}

export default App; 
