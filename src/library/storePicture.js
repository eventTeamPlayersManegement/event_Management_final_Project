import { storage } from "../library/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uuidv4 } from "@firebase/util";

async function storePicture(data) {
  const imageRef = ref(storage, `/images/${data.name + uuidv4()}`);
  await uploadBytes(imageRef, data);
  const url = await getDownloadURL(imageRef);
  return url;
}
export default storePicture;
