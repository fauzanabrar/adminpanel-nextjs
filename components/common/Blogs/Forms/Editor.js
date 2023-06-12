import { useEffect, useState } from "react";
import CKeditor from "./CKeditor.js";


export default function Editor({title, name, data = "", handleChange}) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [text, setText] = useState(data);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    setText(data)
  }, [data]);
    

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleChange(name, value);
  };

  return (
    <div>
      <label htmlFor={name} className="block font-medium mb-1">
        {title}
      </label>
      <CKeditor
        name={name}
        onChange={(data) => {
          setText(data);
          handleInputChange({target: {name, value: data}});
        }}
        editorLoaded={editorLoaded}
        value={text}
      />
      {/* {JSON.stringify(text)} */}
    </div>
  );
}