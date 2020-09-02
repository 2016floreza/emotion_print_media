/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const container = useRef<HTMLDivElement>(null);

  const handleIframePrintClick = () => {
    const iframe = window.frames["printFrame" as any];
    iframe.document.body.innerHTML = container.current?.innerHTML || "";

    // This pops the browser's print window to allow user to save or cancel the pdf.
    iframe.window.print();
  };

  const handleDefaultPrintClick = () => {
    window.print();
  };

  return (
    <div className="App">
      <header ref={container} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          css={css`
            background-color: #61dafb;
            border-radius: 28px;
            border: 1px solid #18ab29;
            display: inline-block;
            cursor: pointer;
            color: #282c34;
            font-size: 17px;
            padding: 16px 31px;
            text-decoration: none;
            text-shadow: 0px 1px 0px #2f6627;
            @media print {
              font-size: 100px;
            }
          `}
          onClick={handleIframePrintClick}
        >
          Print page with iframe
        </button>
        <button
          css={css`
            background-color: #61dafb;
            border-radius: 28px;
            border: 1px solid #18ab29;
            display: inline-block;
            cursor: pointer;
            color: #282c34;
            font-size: 17px;
            padding: 16px 31px;
            text-decoration: none;
            text-shadow: 0px 1px 0px #2f6627;
            @media print {
              font-size: 100px;
            }
          `}
          onClick={handleDefaultPrintClick}
        >
          Print page without iframe
        </button>
      </header>
      <iframe
        title="printIframeTitle"
        name="printFrame"
        width="0"
        height="0"
        src="about:blank"
      ></iframe>
    </div>
  );
}

export default App;
