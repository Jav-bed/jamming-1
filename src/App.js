import "./App.css";
import SearchBar from "./components/SearchBar/Searchbar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
    return (
        <div className="App">
            <SearchBar />
            <SearchResults />
        </div>
    );
}

export default App;
