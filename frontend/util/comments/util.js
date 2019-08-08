export const createComment = (body, video_id, parent_comment_id) => {
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

