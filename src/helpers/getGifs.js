import axios from 'axios';

const apiKey = "RSpwN3tWUXkQ9GUH0WBUVPpSSllEPiXY";

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=9`;

    const response = await axios.get(url);
    const { data } = response.data;
    // console.log(data);
    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs;
}