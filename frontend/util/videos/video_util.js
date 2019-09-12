
export const getVideos = () => {
    return(
        $.ajax({
            method: "GET",
            url: "/api/videos"
        })
    )
}

export const getVideo = (id) => {
    return(
        $.ajax({
            method: "Get",
            url: `/api/videos/${id}`
        })
    )
}

export const postVideo = (formData) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/videos",
            data: formData,
            contentType: false,
            processData: false
        })
    )
}
