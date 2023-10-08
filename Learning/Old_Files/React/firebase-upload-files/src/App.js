import './App.css';
import { useState } from "react";
import { storage } from './firebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";

function App() {
    const [imgUrl, setImgUrl] = useState();
    const [progresspercent, setProgresspercent] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]

        if (!file) return;
        const storageRef = ref(storage, `${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                });
            }
        );
    }

    const desertRef = ref(storage, imgUrl);

    const deleteThisFile = () => {
        deleteObject(desertRef).then(() => {
            console.log('file deleted');
        }).catch((error) => {
            console.log('file not deleted');
        });
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className='form'>
                <input type='file' name='file' />
                <button type='submit'>Upload</button>
            </form>
            <button onClick={deleteThisFile}>delete this</button>
            {
                !imgUrl &&
                <div className='outerbar'>
                    <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                </div>
            }
            {
                imgUrl &&
                <img src={imgUrl} alt='uploaded file' height={200} />
            }
        </div>
    );
}
export default App;