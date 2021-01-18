import React, { useState } from "react";
// Components
import Nav from "./Components/Nav";
import Results from "./Components/Results";
import Modal from "./Components/Modal";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [modalUp, setModalUp] = useState(false);
  const [modalData, setModalData] = useState("");

  const showModalHandler = (data) => {
    setModalData(data);
    setModalUp(!modalUp);
  };

  return (
    <div className="App">
      <Nav
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <div className="results-div">
        {searchResults ? (
          <Results
            searchResults={searchResults}
            modalUp={modalUp}
            setModalUp={setModalUp}
            showModalHandler={showModalHandler}
          />
        ) : (
          ""
        )}
      </div>
      {modalUp ? (
        <Modal
          modalUp={modalUp}
          setModalUp={setModalUp}
          modalData={modalData}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
