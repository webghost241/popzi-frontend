import { useState } from "react";
import { Inter } from "next/font/google";
import PopziEditor from "@/components/utitlies/editor";
import FileDropzone from "@/components/utitlies/fileupload";
import FloatingButton from "@/components/utitlies/floatingbutton";
import FloatingDialog from "@/components/utitlies/floatingdialog";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isFullSize, setIsFullSize] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFullSize = () => {
    setIsFullSize(!isFullSize);
  };

  return (
    <>
      <h1 className="mb-2 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:block hidden dark:text-white">
        New File
      </h1>
      <main className={`flex w-full h-[60%] ${inter.className} items-center`}>
        <div className={`${isFullSize ? "w-full" : "w-[75%]"}`}>
          <PopziEditor
            // @ts-ignore
            isFullSize={isFullSize}
            toggleFullSize={toggleFullSize}
          />
        </div>
        {!isFullSize && (
          <div className="w-[25%] p-2">
            <FileDropzone />
          </div>
        )}
      </main>
      <FloatingButton onClick={openModal} />
      <FloatingDialog isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
