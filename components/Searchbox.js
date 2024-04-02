'use client'
import { useState } from "react"
import "./compStyle.css"



export default function SearchBox(){
    const [searchVal , setSearchVal] = useState("");
    const [results , setResult] = useState([]);

    function fetchData(value){
        fetch(`https://backapi.yatrirestro.com/api/v1/station?stationName=${value.toUpperCase()}`)
        .then((res) => res.json())
        .then((json) =>{
            setResult(json.data.slice(0,8));
        })
    }
    const valSelected = (val) =>{
        setSearchVal(val);
        setResult([]);
    }
    
    const valChange = (val) =>{
        setSearchVal(val);
        if(val.length > 2) fetchData(val);
        else setResult([]);
    }
    const searchResult = (val) =>{
        if( val.length > 2){
            alert("Searching  " + val);
        }

    }

    return(
        <search>
            <div id="inner-search">
            <input id="searchInput" 
            type="search" name="searchBox" 
            placeholder="Search Station.." 
            onChange={(e) => valChange(e.target.value)} 
            value={searchVal}/>

            <button id="searchBtn" onClick={()=>searchResult(searchVal)}>Search</button>
            </div>
            <div id="search-dropdown">
                {
                    results.map((station , id) =>(
                        <li key={id} onClick={(e) => valSelected(station.stationName)}>{station.stationName}</li>
                    ))
                }
            </div>
        </search>
    )


}