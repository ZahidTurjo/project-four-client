import { useState } from "react";
import AddRoomForm from "../../From/AddRoomFrom";
import { imageUpload } from "../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { addARoom } from "../../api/room";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const AddRoom = () => {
    const navigate= useNavigate()
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = parseInt(form.price.value);
        const quests = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const bedrooms = form.bedrooms.value;
        const description = form.description.value;
        const image = form.image.files[0]
        const host = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
        }
        const image_url = await imageUpload(image)
        const roomData = {
            location,
            category,
            title,
            to, from, price, quests, bathrooms, bedrooms, description, host,
            image: image_url?.data?.display_url
        }
        console.table(roomData)

    try {
        setLoading(true)
        const data= await addARoom(roomData)
        console.log(data);
        setUploadButtonText('uploaded')
     toast.success('room added')
        setLoading(false)
        navigate('/dashboard/my-listings')
    } catch (error) {
        console.log(error);
    }
    }
    // handle date change from react-date-range calender

    const handleDates = ranges => {
        setDates(ranges.selection)
    }

    const handleImageChange = (image) => {
        setUploadButtonText(image?.name)
    }
    return (
        <div>
            <AddRoomForm
                uploadButtonText={uploadButtonText}
                handleImageChange={handleImageChange}
                loading={loading}
                handleSubmit={handleSubmit}
                handleDates={handleDates}
                dates={dates} >

            </AddRoomForm>
        </div>
    );
};

export default AddRoom;