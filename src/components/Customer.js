import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { baseUrl } from "../shared";

export default function Customer(){
    const {id}=useParams();
    const [customer,setCustomer]=useState()
    const [tempCustomer,setTempCustomer]= useState();
    const [changed,setChanged] = useState(false);
    const navigate = useNavigate();



    useEffect(()=>{
        if(!customer) return
        if (!tempCustomer) return
        let equal = true;
        if(customer.name !== tempCustomer.name){
            equal= false;
        }
        if(customer.industry !==tempCustomer.industry){
            equal = false;
        }
        if(equal) {
            setChanged(false);
        }
        
    });

    

    useEffect(()=>{
        const url = baseUrl+"api/customers/"+id;
        fetch(url)
        .then((response)=>{
            if(response.status===404){
                navigate("/404")
            }
            return response.json()})
        .then((data)=>{
            setCustomer(data.customer);
            setTempCustomer(data.customer);
        })
    },[])

    

    function updateCustomer(){
        const url = baseUrl + 'api/customers/' + id;
        fetch(url,{
            method : 'POST',
            headers : {'Content-type':'application/json'},
            body : JSON.stringify(tempCustomer)

        })
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            setCustomer(data.customer)
            console.log(data)
            setChanged(false);
        }).catch()
    }
    return (
    <>
        {customer ? 
        <div>
            <input type="text" value={tempCustomer.name} className="m-2 px-2 block" onChange={(e)=>{

                setChanged(true);
                setTempCustomer({...tempCustomer,name:e.target.value})
                
                }}>

            </input>
            <input type="text" value={tempCustomer.industry} className="m-2 px-2 block" onChange={(e)=>{
                setChanged(true);
                setTempCustomer({...tempCustomer,industry:e.target.value})
                
                }}>

            </input>
            {changed ? 
                <>
                    <button onClick={updateCustomer} className="m-2 hover:bg-green-600 px-3 py-2 rounded">Save</button>
                    <button className="m-2 hover:bg-red-600 px-3 py-2 rounded" onClick={(e)=>{
                        setTempCustomer({...customer})
                        setChanged(false);
                }}>Cancel</button>
                </>

            :null}
        </div> 
        : null}
        <button onClick={(e)=>{
            const url = baseUrl + 'api/customers/'+ customer.id;
            fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((response)=>{
                if(!response.ok){
                    throw new Error('Something went wrong')

                }
                navigate('/customers')
            }).catch((e)=>{console.log(e);})
        }} >Delete</button>
        <br/>
        <Link to="/customers">Go Back</Link>
    </>
)
}