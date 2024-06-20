import {YOUTUBE_API_KEY} from "../constants/youtubeApiKey";
import {BASE_URL} from "../constants/baseUrl";
import {urls} from "../constants/urls";


export const getVideos = async (searchQuery) => {
    const URL = `${BASE_URL}/${urls.allVideos(searchQuery)}&key=${YOUTUBE_API_KEY}`;

    try {
        const response = await fetch(URL, {
            // cache: 'force-cache',
            next: {
                revalidate: 200
            }}
        );
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

export const getPopularVideos = async () => {
    const URL = `${BASE_URL}/${urls.popularVideos()}&key=${YOUTUBE_API_KEY}`;

    try {
        const response = await fetch(URL, {
            // cache: 'force-cache',
            next: {
                revalidate: 200
            }});
        const data = await response.json();

        if (data?.error) {
            console.error("Youtube API error", data.error);
            return [];
        }

        return data.items.map((item) => ({
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id: item.id
        }));
    } catch (error) {
        console.error("Something went wrong with video library", error);
        return [];
    }
};


export const getVideoById = async (id) => {
    const URL = `${BASE_URL}/${urls.videoById(id)}&key=${YOUTUBE_API_KEY}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data?.error) {
            console.error("Youtube API error", data.error);
            return [];
        }

        return data.items.map((item) => ({
            title: item.snippet.title,
            imgUrl: item.snippet.thumbnails.high.url,
            id: item.id,
            description: item.snippet.description,
            publishTime: item.snippet.publishedAt,
            channelTitle: item.snippet.channelTitle,
            statistics: item.statistics ? item.statistics : { viewCount: 0 },
        }));
    } catch (error) {
        console.error("Something went wrong with video library", error);
        return [];
    }
};