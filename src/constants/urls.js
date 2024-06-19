export const urls = {
    allVideos: (searchQuery) => `search?part=snippet&q=${searchQuery}&type=video&maxResults=30`,
    popularVideos: () => `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=UA`
}