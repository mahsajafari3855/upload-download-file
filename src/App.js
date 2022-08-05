import { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [selectedfile, setselectedFile] = useState(null);
  const onChangeHandler = (event) => {
    console.log("firstfile", event.target.files[0]);
    const file = event.target.files[0];
    setselectedFile(file);
    console.log("selectedFile", selectedfile);
  };
  const onClickHandler = () => {
    const data = new FormData();
    data.append("file", selectedfile);
    axios
      .post("http://localhost:8000/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Upload&Download with React js</p>
        <input type="file" name="file" onChange={onChangeHandler} />
        <button className="btn" onClick={onClickHandler}>
          Upload
        </button>

        <button className="btn" href="/somefile.txt" download>
          <a href="/somefile.txt" download>
            Click to download
          </a>
        </button>
      </header>
    </div>
  );
}

export default App;
