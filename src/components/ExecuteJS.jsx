import { useEffect } from "react";
import { useState } from "react";
import Editor from "@monaco-editor/react";

const ExecuteJS = () => {
  const [code, setCode] = useState("// Escribe tu codigo ");
  const [result, setResult] = useState("");

  const logToView = (message) => {
    setResult(`${message}`);
  };

  console.log = logToView;

  useEffect(() => {
    if (code == "") {
      setResult("");
    }
    executeJS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const executeJS = () => {
    try {
      const executionResult = eval(code);

      if (executionResult === undefined) {
        setResult((prevResult) => prevResult);
      } else {
        setResult(`${executionResult.message}`);
      }
    } catch (error) {
      setResult(`ReferenceError: ${error.message}`);
    }
  };
  function handleEditorChange(value) {
    setCode(value);
  }

  return (
    <div className="p-5 flex">
      <div className=" bg-[#1f1e1f]   w-[50vw]">
        <div className="bg-black px-3 py-2 h-[6vh]">
          <button>main.js</button>
        </div>

        <Editor
          height="70vh"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          onChange={handleEditorChange}
        />
      </div>

      <div className="text-lg tracking-wider bg-[#1f1e1f]  flex-1">
        <div className="bg-black px-3 py-2 h-[6vh]">Salida</div>
        {result.split(":")[1] ? (
          <p className="text-green-500 m-2">
            {result.split(":")[0]}

            <span className="text-white">:</span>
            {result.split(":")[1]}
          </p>
        ) : (
          <p className="text-yellow-300 m-3">
            {result}

            <br />
            <span className="text-gray-400 text-sm">
              {result && "=== Code Execution Successful ==="}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ExecuteJS;
