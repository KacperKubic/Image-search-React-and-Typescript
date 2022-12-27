import {FC, useState, ChangeEvent} from 'react';
import api from './api';
import './App.css';
import ImageCard from './ImageCard';

//Defining types
type URLS = {
  regular: string;
}

type Image = {
  id: string;
  description: string;
  urls: URLS;
}

const App: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [imageList, setImageList] = useState<Image[]>([])
  
  //On form submit make API request to Unsplash.com
  const handleFormSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    api.get('/search/photos', {
      params: {query: searchTerm},
    }).then((res) => {
      setImageList(res.data.results);
    }).catch((err) => {
      console.log(err);
    })
  }

  //On change of input set state
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  }

  //Map through imageList that is recieved from API request
  const images = imageList.map((image) => {
    return <ImageCard key={image.id} url={image.urls.regular} description={image.description}/>
    })

  return(
    <div className='app'>
      <div className='imageSearch'>
        <form onSubmit={handleFormSubmit} className='form'>
          <label>Search Images:</label>
          <input type='text' placeholder='Enter image theme...' onChange={handleChange}/>
        </form>
      </div>
      <div className='imageList'>
        {images}
      </div>
    </div>
  )
}

export default App;
