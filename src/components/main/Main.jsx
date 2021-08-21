import React, { useState } from "react";
import InputNotes from "./InputNotes";
import OutputNotes from "./OutputNotes";

export const Main = () => {
  const [addItems, setaddItems] = useState([]);

  const addbtnicon = (notes) => {
    setaddItems((prevdatainfo) => {
      return [...prevdatainfo, notes];
    });
  };

  // delete  box of output

  const onDelete = (id) => {
    setaddItems((oldD) =>
      oldD.filter((curData, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div>
      <InputNotes addbtnval={addbtnicon} />

      <div className="outputdivbox">

      {addItems.map((val, index) => {
        return (
          <OutputNotes
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItems={onDelete}
            
          />
        );
      })}
      </div>
    </div>
  );
};
