import { useState, useEffect } from "react";
import produce from "immer";

const Notes = (props) => props.data.map((note) => <div>{note.text}</div>);

export default function NoteApp() {
  const initialData = [{ text: "Loading..." }];

  const [data, setData] = useState(initialData);

  const handleClick = () => {
    const text = document.querySelector("#noteinput").value.trim();
    if (text) {
      const nextState = produce(data, (draftState) => {
        draftState.push({ text });
      });
      document.querySelector("#noteinput").value = "";

      if (typeof window !== "undefined") {
        localStorage.setItem("data", JSON.stringify(nextState));
      }

      setData(nextState);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getNotes = localStorage.getItem("notes");
      if (getNotes !== "" && getNotes !== null) {
        return setData(JSON.parse(getNotes));
      }
      return setData([]);
    }
  }, []);

  return (
    <>
      <input
        id="noteinput"
        style={{ width: "80%" }}
        type="text"
        placeholder="Enter new note"
      />

      <button onClick={() => handleClick()}> Add note </button>
      <Notes data={data} />
    </>
  );
}
