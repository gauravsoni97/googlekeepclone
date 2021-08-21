import React, { useState } from "react";

const InputNotes = (props) => {
  const [expand, setexpand] = useState(false);

  const [notes, setnotes] = useState({
    title: "",
    content: "",
  });

  const inputEve = (event) => {
    const { name, value } = event.target;

    setnotes((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // add btn

  const addaction = () => {
    props.addbtnval(notes);

    // refresh main input blank
    setnotes({ title: "", content: "" });
  };

  //   del btn

  const expandit = () => {
    setexpand(true);
  };
  const delit = () => {
    setexpand(false);
  };

  return (
    <div className="input-note-box" onDoubleClick={delit}>
      <form>
        {expand ? (
          <input
            type="text"
            name="title"
            value={notes.title}
            onChange={inputEve}
            placeholder="Title"
            autoComplete="off"
          />
        ) : null}

        <textarea
          cols=""
          rows=""
          name="content"
          value={notes.content}
          onChange={inputEve}
          placeholder="Take a note..."
          onClick={expandit}
        ></textarea>
        {expand ? (
          <div className="box-footer">
            <i class="fas fa-bell"></i>
            <i class="fas fa-user-plus"></i>
            <i class="fas fa-palette"></i>
            <i class="far fa-file-image"></i>
            <i class="fas fa-inbox"></i>
            <i class="fas fa-undo"></i>
            <i class="fas fa-redo"></i>
            <i class="fas fa-plus" onClick={addaction}></i>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default InputNotes;
