import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import JavaScript from "../icons/Javascript";

const ExecuteJS = () => {
  const [code, setCode] = useState("// Escribe tu codigo ");
  const [result, setResult] = useState([]);

  const logToView = (...messages) => {
    setResult((prevResult) => [
      ...prevResult,
      messages
        .map((msg) => (typeof msg === "object" ? JSON.stringify(msg) : msg))
        .join(" "),
    ]);
  };

  console.log = logToView;

  useEffect(() => {
    if (code === "") {
      setResult([]);
    }
    executeJS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const executeJS = () => {
    try {
      setResult([]);

      const executionResult = eval(code);

      if (executionResult === undefined) {
        setResult((prevResult) => [...prevResult]);
      } else {
        setResult((prevResult) => [
          ...prevResult,
          `${executionResult.message}`,
        ]);
      }
    } catch (error) {
      setResult([`ReferenceError: ${error.message}`]);
    }
  };

  function handleEditorChange(value) {
    setCode(value);
  }

  return (
    <div className="p-5  flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
      <div className="bg-[#1f1e1f] md:w-[50vw] rounded-lg shadow-md shadow-[#9201ad]">
        <div className="bg-black px-3 h-[6vh] flex items-center justify-between rounded-t-lg">
          <a className="flex items-center">
            <JavaScript />
            <span className="ml-2">Javascript</span>
          </a>
          <nav></nav>
        </div>

        <Editor
          className="h-[40vh] md:h-[65vh]"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>

      <div className="text-lg tracking-wider  bg-[#1f1e1f] flex-1  rounded-lg  shadow-md shadow-[#9201ad] ">
        <div className="bg-black px-3 py-2 h-[6vh] rounded-t-lg text-sm">
          Salida
        </div>

        {result.length > 0 ? (
          result.map((msg, index) => (
            <p
              key={index}
              className={`m-3 text-sm  ${
                msg == "undefined" ? "text-gray-400" : "text-yellow-400"
              }`}
            >
              {msg}
              <br />
            </p>
          ))
        ) : (
          <p className="text-yellow-300 m-3 h-[10vh]"></p>
        )}
      </div>
    </div>
  );
};

export default ExecuteJS;
