const youtubeVideos = {
    title: "js in one shot",
    channel: "alpha intern",
    likes: 1000 
};

function getVideosViews(videos) {
    return videos.likes;  // use the function parameter correctly
}

console.log(getVideosViews(youtubeVideos));  // Output: 1000

