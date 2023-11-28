import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


const AddNewNews = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const {addNews} = useContext(GlobalContext);

    const handleImage = (e) => {
        const files = e.target.files
        const selectedImages = []
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
              selectedImages.push(reader.result);
              if (selectedImages.length === files.length) {
                setImage(selectedImages);
              }
            };
            reader.readAsDataURL(files[i]);
          }
    }

    const onSubmit = e => {
        e.preventDefault();
        const newNews = {
            id: Math.floor(Math.random() * 100000000),
            title,
            image,
            description,
            date
        }
        addNews(newNews);
    }

  return (
    <div className='add-form-container'>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='title'>Title</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter title...' />
            </div>
            <div className='form-control'>
                <label htmlFor='image'>Image</label>
               <input type='file' 
                accept='image/*'
               onChange={handleImage}
                multiple
                />

               {image.length > 0 && image.map((img, index) => (
                   <img key={index} src={img} alt='news' />
               ))}
            </div>
            <div className='form-control'>
                <label htmlFor='description'>Description</label>
                <textarea type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter description...' />
            </div>
            <div className='form-control'>
                <label htmlFor='date'>Date</label>
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Enter date...' />
            </div>
            <button className='btn'>Add News</button>
        </form>
    </div>
  )
}

export default AddNewNews