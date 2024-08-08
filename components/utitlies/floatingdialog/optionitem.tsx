import { useOptionCorrectness } from "@/hooks/useOptionCorrectness";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { noteAtom } from "@/atom";
import { produce } from "immer";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
interface OptionItemProps {
  orderMark?: string;
  content: string;
  id: string;
  setExplanation: any;
  problemIndex: number;
  optionIndex: number;
  checked: boolean;
}

const OptionItem: React.FC<OptionItemProps> = ({
  orderMark = "A.",
  content,
  id,
  setExplanation,
  problemIndex,
  optionIndex,
  checked,
}) => {
  const [note, setNote] = useRecoilState(noteAtom);
  const checkOption = useOptionCorrectness();
  const onClick = () => {
    checkOption.mutate(id, {
      onSuccess: (data: any) => {
        if (!note.problems[problemIndex]["options"][optionIndex]?.checked)
          setNote(
            produce(note, (draft: any) => {
              draft.problems[problemIndex]["options"][optionIndex]["checked"] =
                data["data"]["correct"];
            })
          );
        setExplanation({
          correct: data["data"]["correct"],
          explanation: data["data"]["explanation"],
        });
      },
    });
  };

  return (
    <li className="flex items-center space-x-2 p-2">
      <span className="items-center justify-between font-bold text-lightergreen">
        {orderMark}.
      </span>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-2 border border-bgd hover:border-optionborder hover:shadow-pink py-2 px-4 rounded-full transition-all duration-200"
      >
        <span
          className={`text-left ${
            note.problems[problemIndex]["options"][optionIndex]["checked"] !=
            undefined
              ? "font-medium"
              : "font-light"
          }`}
        >
          {content}
        </span>
        <span style={{ width: "20px", height: "20px", marginLeft: "10px" }}>
          {note.problems[problemIndex]["options"][optionIndex]["checked"] !=
          undefined ? (
            note.problems[problemIndex]["options"][optionIndex]["checked"] ? (
              <AiFillCheckCircle
                style={{ color: "green", fontSize: "20px" }}
                className="animate-pop-out"
              />
            ) : (
              <AiFillCloseCircle
                style={{ color: "red", fontSize: "20px" }}
                className="animate-pop-out"
              />
            )
          ) : (
            ""
          )}
        </span>
      </button>
    </li>
  );
};

export default OptionItem;
