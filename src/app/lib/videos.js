import {YOUTUBE_API_KEY} from "../constants/youtubeApiKey";
import {BASE_URL} from "../constants/baseUrl";


export const getVideos = async (searchQuery) => {
    try {
        const response = await fetch(`${BASE_URL}/search?part=snippet&q=${searchQuery}&type=video&maxResults=30&key=${YOUTUBE_API_KEY}`);
        const data = await response.json();

        if (data?.error) {
            console.error("Youtube API error", data.error);
            return [];
        }

        return data.items.map((item) => {
            const id = item.id?.videoId || item.id;

            return {
                title: item.snippet.title,
                imgUrl: item.snippet.thumbnails.high.url,
                id,
            }
        });
    } catch (error) {
        console.error("Something went wrong with video library", error);
        return [];
    }
}