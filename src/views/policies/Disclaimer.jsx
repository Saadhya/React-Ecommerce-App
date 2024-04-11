import React, { useState } from "react";
import mammoth from "mammoth"; // Import mammoth library for parsing Word documents

const Disclaimer = () => {
  const [fileContent, setFileContent] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // const result = 
        await readFile(file);
        // setFileContent(result);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload =  (event) => {
        let res = event.target.result;
        resolve(event.target.result);
        parseWordFile(res)
        // const data = parseWordFile(res)
        //   .then((res) => {
        //     console.log(res)
        //     setFileContent(res)
        //   })
        //   .catch((err) => console.log(err));
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const parseWordFile = async (content) => {
    const result = await mammoth.convertToHtml({ arrayBuffer: content });
    // console.log(result.value);
    setFileContent(result.value)
    return result.value;
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {fileContent && (
        <div>
          <h2>Word File Content</h2>
          <div dangerouslySetInnerHTML={{ __html: fileContent }} />
        </div>
      )}
    </div>
  );
};

export default Disclaimer;
