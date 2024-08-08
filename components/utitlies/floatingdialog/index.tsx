import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRecoilState } from "recoil";
import OptionItem from "./optionitem";
import { noteAtom } from "@/atom";

interface FloatingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const FloatingDialog: React.FC<FloatingDialogProps> = ({ isOpen, onClose }) => {
  const [note, setNote] = useRecoilState(noteAtom);
  const [problemIndex, setProblemIndex] = useState(0);
  const [explanation, setExplanation] = useState("");

  const handleClose = () => {
    setExplanation("");
    onClose();
  };

  const handleProblemChange = (message: string, e: any) => {
    if (message === "back") {
      if (problemIndex > 0) {
        setProblemIndex(problemIndex - 1);
        setExplanation("");
      }
    } else {
      if (problemIndex < note.count - 1) {
        setProblemIndex(problemIndex + 1);
        setExplanation("");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{ width: "30rem" }}
      className="fixed bottom-20 right-4 max-w-md "
    >
      <div className="bg-white rounded-lg shadow-pinkdlg z-50">
        <div className="flex justify-between items-center p-4 bg-btnbg rounded-t-lg">
          <h3 className="text-white text-lg">
            Question {problemIndex + 1} of {note.count}
          </h3>
          <span>
            <button
              className={`${
                !problemIndex
                  ? "text-lightgreen cursor-not-allowed"
                  : "text-white"
              } text-f28`}
              aria-label="Close dialog"
            >
              <IoIosArrowBack onClick={(e) => handleProblemChange("back", e)} />
            </button>
            <button
              className={`${
                problemIndex == note.count - 1
                  ? "text-lightgreen cursor-not-allowed"
                  : "text-white"
              } text-f28`}
              aria-label="Close dialog"
            >
              <IoIosArrowForward
                onClick={(e) => handleProblemChange("forward", e)}
              />
            </button>
            <button
              className="text-white text-f28"
              onClick={handleClose}
              aria-label="Close dialog"
            >
              <FiX />
            </button>
          </span>
        </div>
        <div className="p-4 max-h-[30rem] overflow-y-auto custom-scrollbar w-full">
          <div className="flex mb-4 space-x-2">
            <div className="w-[10%]">
              <img src={"/cotton.png"} alt="Floating button" />
            </div>
            <p className="w-[90%] text-gray-600 bg-contentbg rounded-lg p-2 text-pretty break-all text-f18">
              {note.count > 0 ? note.problems[problemIndex]["content"] : <></>}
            </p>
          </div>
          <ul className="list-none space-y-2">
            {note.count > 0 ? (
              // @ts-ignore
              note.problems[problemIndex]["options"].map((option, index) => (
                <OptionItem
                  problemIndex={problemIndex}
                  optionIndex={index}
                  content={option["content"]}
                  key={option["id"]}
                  id={option["id"]}
                  orderMark={String.fromCharCode(65 + index)}
                  setExplanation={setExplanation}
                />
              ))
            ) : (
              <></>
            )}
          </ul>
          <div className="animate-pop-out">
            {explanation ? (
              <div className="text-gray-600 bg-contentbg rounded-lg p-2 text-pretty break-all">
                <div className="text-f18 font-bold text-black py-2">
                  {
                    // @ts-ignore
                    explanation["correct"]
                      ? "Correct Answer"
                      : "Incorrect Answer"
                  }
                </div>
                {
                  // @ts-ignore
                  explanation["explanation"]
                }
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  transform -translate-y-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="77"
          height="60"
          viewBox="0 0 77 60"
          fill="none"
        >
          <g filter="url(#filter0_d_280_1602)">
            <path
              d="M33.4843 11.7031L46.4844 11.7032L61.3813 40.4517L15.4844 11.703L33.4843 11.7031Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_280_1602"
              x="0.684375"
              y="0.903003"
              width="75.497"
              height="58.3487"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_280_1602"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="6.9" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.731667 0 0 0 0 0.170722 0 0 0 0 0.641916 0 0 0 0.16 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_280_1602"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_280_1602"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default FloatingDialog;
