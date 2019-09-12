export const createVideoLike = (value, video_id) => {
    return(
        $.ajax({
            method: "POST",
            url: `/api/videos/${video_id}/likes`,
            data: {
                like: {
                    value: value,
                    likeable_type: 'Video',
                    likeable_id: video_id
                }
            }
        })
    )
}


export const updateVideoLike = (id, video_id) => {
    return(
        $.ajax({
            method: "PATCH",
            url: `/api/videos/${video_id}/likes/${id}`,
            data: {
                like: {
                    likeable_type: 'Video',
                    likeable_id: video_id
                }
            }
        })
    )
}


export const deleteVideoLike = (id, video_id) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/videos/${video_id}/likes/${id}`
        })
    )
}

export const getVideoLikes = (video_id) => {
    return(
        $.ajax({
            method: "GET",
            url: `/api/videos/${video_id}/likes`,
            data: {
                likeable_type: 'Video',
                likeable_id: video_id
            }
        })
    )
}