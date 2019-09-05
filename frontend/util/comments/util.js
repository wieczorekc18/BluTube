
export const getComments = (video_id) => {
  //debugger
    return(
        $.ajax({
            method: "GET",
            url: `/api/videos/${video_id}/comments`,
        })
    )
}


export const createComment = (body, video_id, parent_comment_id) => {
    // debugger
    return(
        $.ajax({
            method: "POST",
            url: `/api/videos/${video_id}/comments`,
            data: {
                comment: {
                    body: body,
                    video_id: video_id,
                    parent_comment_id: parent_comment_id
                }
            }
        })
    )
}

