import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
interface ButtonProps {
  /**
   * Background color class for the button, e.g., 'bg-blue-500'.
   */
  bg: string;

  /**
   * Path to the image to be displayed in the button. Optional.
   */
  imagePath?: string;

  /**
   * Flag to show the right arrow icon. Default is false.
   */
  showRightIcon?: boolean;

  /**
   * Text to be displayed inside the button.
   */
  text: string;

  /**
   * Flag to increase the button's height. Default is false.
   */
  lgH?: boolean;

  /**
   * Flag to indicate if the button is open (to display content differently). Default is false.
   */
  isOpen?: boolean;

  /**
   * Flag to indicate if the route is active. Default is false.
   */
  isActive?: boolean;

  /**
   * Flag to indicate if the button is normal. Should be true except for router buttons.
   */
  isNormal: boolean;

  /**
   * Text color class for the button's text, e.g., 'text-black'. Default is 'text-textblack'.
   */
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  bg,
  isNormal,
  color = "text-textblack",
  isActive = false,
  isOpen = false,
  lgH = false,
  imagePath,
  showRightIcon = false,
  text,
}) => {
  return (
    <button
      className={`flex w-full items-center ${
        isNormal && !isActive
          ? bg
          : !isNormal && isActive
          ? bg
          : "bg-transparent"
      }  ${isOpen ? "justify-between" : "justify-center"} px-4 ${
        lgH ? "h-[3.8rem]" : "h-[2.8rem]"
      } ${lgH ? "rounded-[2rem]" : "rounded-3xl"}`}
    >
      <div
        className={`flex items-center ${
          isOpen ? "justify-start" : "justify-center"
        } w-full gap-2`}
      >
        {imagePath && (
          <>
            {lgH ? (
              <Image src={imagePath} alt="Icon" width={40} height={40} />
            ) : (
              <Image src={imagePath} alt="Icon" width={24} height={24} />
            )}
          </>
        )}
        {isOpen && (
          <div
            className={` ${
              isNormal && !isActive
                ? color
                : !isNormal && isActive
                ? color
                : color
            }     leading-5 text-sm font-[300] font-circular`}
          >
            {text}
          </div>
        )}
      </div>
      {showRightIcon && isOpen && (
        <IoIosArrowForward className="ml-2 text-iconcolor" /> // Using the imported icon
      )}
    </button>
  );
};

export default Button;
