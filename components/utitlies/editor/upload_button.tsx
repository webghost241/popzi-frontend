// components/SaveButton.tsx
import React from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { useMutation } from "react-query";
import { isLoadingAtom, noteAtom } from "@/atom";
import { uploadAndFetchNote } from "@/hooks/useUploadContent";
interface UploadButtonProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const UploadButton: React.FC<UploadButtonProps> = ({ contentRef }) => {
  const [note, setNote] = useRecoilState(noteAtom);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);
  const mutation = useMutation(uploadAndFetchNote, {
    onSuccess: (data) => {
      // Data here is what was returned from `fetchResponse.data` above
      setNote({
        id: data.id,
        content: data.content,
        problems: data.problems,
        count: data.problems.length,
      });
      setIsLoading({ isLoading: false });
      toast.info("Success");
    },
    onError: (error) => {
      setIsLoading({ isLoading: false });
      toast.error("An error occurred");
    },
  });

  const handleUpload = () => {
    if (mutation.isLoading) {
      toast.warning("Server is pretty busy!");
      return;
    }
    if (contentRef.current?.innerText) {
      setIsLoading({ isLoading: true });
      mutation.mutate(contentRef.current.innerText);
    } else {
      toast.warning("Please provide some information!");
    }
  };

  return (
    <button
      onClick={handleUpload}
      className="flex items-center justify-center bg-btnbg text-white transition-all duration-200 hover:bg-pink-600 active:bg-pink-800 focus:outline-none"
      aria-label="Save content to file"
      style={{ width: "120px", height: "40px", borderRadius: "6px" }}
    >
      Upload
    </button>
  );
};

export default UploadButton;
