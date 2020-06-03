export const addToMyList = (videoId) => {
    return $.ajax({
        method: "post",
        url: "/api/my_list_items",
        data: { video_id: videoId }
    })
};

export const removeFromMyList = (videoId) => {
    return $.ajax({
        method: "delete",
        url: `api/my_list_items/${videoId}`
    })
};