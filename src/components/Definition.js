import { useEffect,useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import NotFound from "./NotFound";
import DefinitionSearch from "./DefinitionSearch";


export default function Definition(){
    const [word,setWord] = useState([]);
    const [notFound,setNotFound] = useState(false);
    const [error,setError] = useState(false);
    let { search } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response)=>{
                if(response.status === 404){
                    setNotFound(true);
                }
                else if (response.status === 401){
                    navigate('/login')
                }
                if (!response.ok){
                    setError(true);
                    throw new Error('Something went wrong');

                }
               return response.json()
            })
            .then((data)=>{
                setWord(data[0].meanings);
            }
        )
        .catch((e)=>{console.log(e.message)});
    },[]);


    if (notFound === true){
        return (
            <>
                <NotFound/>
                <Link to="/dictionary">Search another</Link>
            </>
    )
    }
    if (error === true){
        return (
            <>
                <p>Something went wrong</p>
                <Link to="/dictionary">Search another</Link>
            </>
    )
    }

    return (
    <>
        {word 
            ?(
            <>
            <h1>Here is a the definition:</h1>
            {word.map((meaning)=>{
                return (
                    <p key={uuidv4()}>
                        {meaning.partOfSpeech + ': '}
                        {meaning.definitions[0].definition}
                    </p>
                    );
        })}
            <p>Search Again</p>
            <DefinitionSearch/>
        </>
        ):null
        } 
        
    </>
);
}