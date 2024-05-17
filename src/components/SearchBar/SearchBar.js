import React, { useState } from "react";
import styles from "./SearchBar.module.css"

function SearchBar(){
    const [playList, setPlayList] = useState("");
    
    function submitHandler(event) {
        event.preventDefault();
        alert(`You have searched for ${playList}`);
        setPlayList('')
    }
    return(
        <div className={styles.searchBar}>
            <h1 className={styles.title}>{playList}</h1>
            <div className={styles.elements}>    
                <form className={styles.searchForm} onSubmit={submitHandler}>
                    <label className={styles.label} for="SearchBar">Search: </label>
                    <input className="searchBarInput"id="SearchBar" value={playList} onChange={(e)=> setPlayList(e.target.value)}></input>
                    <button className={styles.button}>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default SearchBar;