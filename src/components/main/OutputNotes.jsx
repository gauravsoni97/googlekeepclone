import React ,{useState}from "react";

const OutputNotes = (props) => {
  const [expand, setexpand] = useState(false);

  const deletebtn = () => {
    props.deleteItems(props.id);
  };

  const expandit = () => {
    setexpand(true);
  };
  

  return (
    <div className="oneboxdiv" onMouseEnter={expandit}>
      <div className="one-box">
        <h4>{props.title}</h4>
        <br />
        <p>{props.content}</p>
        {expand ? (
      <div className="output-box-footer">
        <i class="fas fa-bell"></i>
        <i class="fas fa-user-plus"></i>
        <i class="fas fa-palette"></i>
        <i class="far fa-file-image"></i>
        <i class="fas fa-inbox"></i>
        <i class="far fa-trash-alt"   onClick={deletebtn}></i>        
        </div>): null}
      </div>
    </div>
  );
};

export default OutputNotes;
