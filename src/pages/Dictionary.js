//UseEffect()
//1.no dependency array --> update for any state change
//2.empty dependency array --> execute once (at the beggining)
//3.passing data --> only execute when those state variables are changed




import DefinitionSearch from "../components/DefinitionSearch";

export default function Dictionary(){
    return <DefinitionSearch />

}