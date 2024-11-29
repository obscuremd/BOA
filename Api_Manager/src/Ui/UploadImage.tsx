import React, { useState } from 'react'
import axios from 'axios'
import { useGen } from '../Providers/GeneralProvider';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const UploadImage = () => {

    const {userData, url} = useGen()

    const [pic, setPic] = useState<File|null>(null)
    const [picUrl, setPicUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState(0)

    const storage = getStorage()

    const showModal = () => {
        const modal = document.getElementById('my_modal_6') as HTMLDialogElement;
        if (modal) {
          modal.showModal();
        }
      };

      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setPic(e.target.files[0]);
        }
    };

    const uploadPic = async() =>{
        if (!pic) {
            return;
        }
        setLoading(true)
        const ImageRef = ref(storage,  `files/${pic?.name}`)

        try {
            const upload = await uploadBytes(ImageRef, pic)
            const url = await getDownloadURL(upload.ref)
            setPicUrl(url)
            console.log(url)
            setLoading(false)
            setState(1)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const update = async () => {
        setLoading(true)
        try {
          const response = await axios.put(`${url}/user/${userData?._id}`, {profile_picture:picUrl});
          console.log("Updated user data:", response.data);
          setLoading(false)
          setTimeout(() => { window.location.reload() }, 5000);
        } catch (error) {
          console.error("Error updating user data:", error);
        }
      };

return (
    <div>
        <div className="flex items-center gap-5">
            <button onClick={showModal}>
                <img
                    src={userData?.profile_picture}
                    alt=""
                    className="w-20 h-20 rounded-full"
                    
                />
            </button>
          <div>
            <p>Account Number: {userData?.account_number}</p>
            <p>Full Name: {userData?.full_name}</p>
          </div>
        </div>

        <dialog id="my_modal_6" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {
                    state===0 &&
                    <>
                        <label className="form-control w-full max-w-xs">
                            <span className="label-text">Select a Profile Picture</span>
                            <input type="file" onChange={handleFileChange} className="file-input file-input-bordered w-full max-w-xs" />
                        </label>
                        <button className='btn w-full' onClick={uploadPic}>
                        {loading
                            ?<>
                                <span className="loading loading-spinner"></span>
                                'loading'
                            </>
                            :'Upload Image'}
                        </button>
                    </>
                }
                {
                    state===1 &&
                    <>
                        <img src={picUrl} alt="" />
                        <button className='btn w-full' onClick={update}>
                        {loading
                            ?<>
                                <span className="loading loading-spinner"></span>
                                'loading'
                            </>
                            :'Update'}
                        </button>
                    </>
                }
            </div>
        </dialog>
    </div>
    )
}

export default UploadImage