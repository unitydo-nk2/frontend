// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString, getDownloadURL, getMetadata } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB44uWxUJtrk-EK9tBtDcoyLcPffT-uIvM",
  authDomain: "unitydodbimage.firebaseapp.com",
  projectId: "unitydodbimage",
  storageBucket: "unitydodbimage.appspot.com",
  messagingSenderId: "664243978640",
  appId: "1:664243978640:web:dec665057255ec595eb315",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export const saveFile = async (fullPath: any, file: any) => {
    const imagesRef = ref(storage,fullPath);
    const snapshot = await uploadString(imagesRef, file, "data_url");
    if(snapshot) {
        const downloadUrl = await getDownloadURL(snapshot.ref);
        const metadata = await getMetadata(imagesRef)
        return downloadUrl
    }
};

export const uploadFile = async (file : any) => {
   return await new Promise(function(resolve, reject){
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (e) => {
      const result = reader.result;
      const  downloadUrl = await saveFile('images/'+file.name,result);
      if(downloadUrl){
        resolve(downloadUrl)
      }else{
        reject();
      }
    }
   }) 
}
