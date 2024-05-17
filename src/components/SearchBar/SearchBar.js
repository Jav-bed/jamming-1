import React, { useState } from "react";

function SearchBar(){
    const [playList, setPlayList] = useState("");
    
    function submitHandler(event) {
        event.preventDefault();
        alert(`You have searched for ${playList}`);
        setPlayList('')
    }
    return(
        <div className="searchBar">
            <h1 className="">{playList}</h1>
            <form className="" onSubmit={submitHandler}>
                <label for="SearchBar">Search: </label>
                <input id="SearchBar" value={playList} onChange={(e)=> setPlayList(e.target.value)}></input>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default SearchBar;