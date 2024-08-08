// components/Editor.tsx
import React, { useRef, useState } from "react";
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiMaximize2,
} from "react-icons/fi";
import FunctionalButton from "./functional_button";
import SaveButton from "./save_button";
import UploadButton from "./upload_button";
// @ts-ignore
const PopziEditor: React.FC = ({ toggleFullSize }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState<string>("3"); // Default size: '16px'
  const [activeCommands, setActiveCommands] = useState<Map<string, boolean>>(
    new Map()
  );
  const [activeAlignment, setActiveAlignment] = useState<string | null>(null);

  // Define possible commands for styling.

  // Execute formatting command and update active state
  const execCommand = (command: string, value: string = "") => {
    document.execCommand(command, false, value);
    const updatedMap = new Map(
      activeCommands.set(command, document.queryCommandState(command))
    );
    setActiveCommands(updatedMap);
  };

  // Handle font size changes
  const handleChangeFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = e.target.value;
    setFontSize(size);
    execCommand("fontSize", size);
  };

  return (
    <div
      style={{ height: "60vh" }}
      className={`flex flex-col w-full p-4 bg-white rounded-2xl border border-bgd transition-all duration-200`}
    >
      <div className="flex justify-between mb-2 items-center">
        <div className="space-x-2 hidden md:flex">
          {/* Font Size Selector */}
          <select
            value={fontSize}
            onChange={handleChangeFontSize}
            className="p-2 text-gray-600 bg-gray-100 rounded focus:outline-none transition-all duration-200"
            aria-label="Change font size"
          >
            <option value="1">10px</option>
            <option value="2">13px</option>
            <option value="3">16px</option>
            <option value="4">18px</option>
            <option value="5">24px</option>
            <option value="6">32px</option>
            <option value="7">48px</option>
          </select>

          {/* Formatting Buttons */}
          <FunctionalButton
            icon={FiBold}
            command="bold"
            isActive={!!activeCommands.get("bold")}
            onClick={execCommand}
          />
          <FunctionalButton
            icon={FiItalic}
            command="italic"
            isActive={!!activeCommands.get("italic")}
            onClick={execCommand}
          />
          <FunctionalButton
            icon={FiUnderline}
            command="underline"
            isActive={!!activeCommands.get("underline")}
            onClick={execCommand}
          />
          <FunctionalButton
            icon={FiAlignLeft}
            command="justifyleft"
            isActive={activeAlignment === "justifyleft"}
            onClick={execCommand}
          />
          <FunctionalButton
            icon={FiAlignCenter}
            command="justifycenter"
            isActive={activeAlignment === "justifycenter"}
            onClick={execCommand}
          />
          <FunctionalButton
            icon={FiAlignRight}
            command="justifyright"
            isActive={activeAlignment === "justifyright"}
            onClick={execCommand}
          />
        </div>
        <div className="flex space-x-2">
          {/* Resize Button */}
          <button
            onClick={toggleFullSize}
            className="flex items-center justify-center bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-gray-200 active:bg-gray-300 focus:outline-none"
            aria-label="Resize editor"
            style={{ width: "40px", height: "40px", borderRadius: "6px" }}
          >
            <FiMaximize2 />
          </button>

          {/* Upload Button */}
          <UploadButton contentRef={editorRef} />

          {/* Save Button */}
          <SaveButton contentRef={editorRef} />
        </div>
      </div>
      {/* Editor Area */}
      <div
        ref={editorRef}
        contentEditable
        className="p-1 text-black bg-transparent shadow-inner overflow-y-auto custom-scrollbar rounded-lg h-full focus:outline-none"
        style={{
          minHeight: "200px",
          margin: "1px",
          wordBreak: "break-word",
          width: "calc(100% - 10px)",
        }}
        aria-multiline="true"
      />
    </div>
  );
};

export default PopziEditor;
