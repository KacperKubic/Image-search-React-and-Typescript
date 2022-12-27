import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vC__q-ZuV6je0GiUfc7KEQkse_HlhEl2kQLyCU2_OUE'
    }
});

