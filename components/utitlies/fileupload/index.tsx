import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiFile } from "react-icons/fi";

const FileDropzone: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      style={{
        height: "45vh",
      }}
      className="flex flex-col items-center justify-center bg-white border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-btnbg focus:outline-none transition-all duration-200"
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center">
        <FiFile size={48} className="text-btnbg mb-4" />
        {isDragActive ? (
          <p className="text-main font-semibold">Drop the files here ...</p>
        ) : (
          <>
            <p className="text-gray-600">Drop file here, or</p>
            <div className="hidden md:block">
              <button
                className="w-[12rem] mt-2 px-4 py-2 border border-btnbg text-btnbg rounded-lg hover:bg-btnbg hover:text-white transition duration-200"
                type="button"
              >
                Browse files
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FileDropzone;
