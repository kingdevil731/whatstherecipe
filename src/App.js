import React, { useState } from "react";
// Components
import Nav from "./Components/Nav";
import Results from "./Components/Results";
import Modal from "./Components/Modal";

function App() {
  const [modalUp, setModalUp] = useState(false);
  const [modalData, setModalData] = useState("");
  //const [configs, setConfigs] = useState(localStorage.getItem("configs"));
  const [loaded, setLoaded] = useState(false);

  const showModalHandler = (data) => {
    setModalData(data);
    setModalUp(!modalUp);
  };

  return (
    <div className="App">
      <Nav loaded={loaded} setLoaded={setLoaded} />
      {loaded && (
        <div className="results-div">
          <Results
            modalUp={modalUp}
            setModalUp={setModalUp}
            showModalHandler={showModalHandler}
          />
        </div>
      )}
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
