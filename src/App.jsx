import { useEffect, useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./App.css";
function App() {
  const [img, setImg] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imgListRef = ref(storage, `images/`);

  const uploadImg = () => {
    if (img == null) return;
    const imgRef = ref(storage, `images/${img.name}+${v4()}`);
    uploadBytes(imgRef, img).then(() => {
      alert("Image Uploaded");
    });
  };

  useEffect(() => {
    listAll(imgListRef).then((res) => {
      res.items.map((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => {
            return [...prev, url];
          });
        });
      });
    });
  }, []);

  return (
    <>
      <div className="content">
        <input
          type="file"
          onChange={(e) => {
            setImg(e.target.files[0]);
          }}
        />
        <button onClick={uploadImg}>Upload File</button>
        <div className="images">
          {imageList &&
            imageList.map((url, index) => {
              return <img src={url} key={index} />;
            })}
        </div>
      </div>
    </>
  );
}

export default App;
