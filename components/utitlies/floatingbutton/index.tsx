import React from "react";
import { useRecoilState } from "recoil";
import { isLoadingAtom } from "@/atom";
import Image from "next/image";
interface FloatingButtonProps {
  onClick: () => void;
  imageSrc: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);

  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 p-4 bg-transparent transition-transform duration-300 disabled:opacity-50 hover:animate-jump"
      aria-label="Open dialog"
      disabled={isLoading.isLoading}
    >
      <img
        src={"/cotton.png"}
        alt="Floating button"
        className={`w-25 h-20 object-cover transition-all duration-200 ${
          isLoading.isLoading ? "opacity-50" : "opacity-100"
        }`}
      />
      {isLoading.isLoading ? (
        <svg
          className="animate-spin h-8 w-8 text-btnbg absolute top-1/2 left-1/2 -mt-4 -ml-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        ""
      )}
    </button>
  );
};

export default FloatingButton;
