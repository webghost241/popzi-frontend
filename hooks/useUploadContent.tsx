import axios from "axios";

export const uploadAndFetchNote = async (content: string) => {
  // Step 1: Perform the upload
  const uploadResponse = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/note/create_note`,
    { content }
  );

  // Assuming this response has your note_id
  const noteId = uploadResponse.data.data.note_id;

  // Step 2: Fetch details using the note_id from the upload response
  const fetchResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/note/notes/${noteId}`
  );
  return fetchResponse.data; // This will be the data you use in onSuccess
};
