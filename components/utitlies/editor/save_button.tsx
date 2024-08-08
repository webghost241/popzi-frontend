// components/SaveButton.tsx
import React from "react";
import { FiSave } from "react-icons/fi";

interface SaveButtonProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const SaveButton: React.FC<SaveButtonProps> = ({ contentRef }) => {
  const saveToFile = async () => {
    if (contentRef.current) {
      const content = contentRef.current.innerText;

      // Check if the browser supports the File System Access API
      if ("showSaveFilePicker" in window) {
        try {
          const fileHandle = await (window as any).showSaveFilePicker({
            suggestedName: "editor-content.txt",
            types: [
              {
                description: "Text files",
                accept: {
                  "text/plain": [".txt"],
                },
              },
            ],
          });
          const writable = await fileHandle.createWritable();
          await writable.write(content);
          await writable.close();
          alert("Content saved to file!");
        } catch (error) {
          console.error("Error saving file", error);
        }
      } else {
        // Fallback method for older browsers
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "editor-content.txt";
        a.click();
        URL.revokeObjectURL(url);
      }
    }
  };

  return (
    <button
      onClick={saveToFile}
      className="flex items-center justify-center bg-btnbg text-white transition-all duration-200 hover:bg-pink-600 active:bg-pink-800 focus:outline-none"
      aria-label="Save content to file"
      style={{ width: "120px", height: "40px", borderRadius: "6px" }}
    >
      Save
    </button>
  );
};

export default SaveButton;
