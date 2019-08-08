// export const createVideoLike = (value, video_id) => (
//     $.ajax({
//         method: "POST",
//         url: `/api/videos/${video_id}/likes`,
//         data: {
//             like: {
//                 value: value,
//                 likeable_type: video,
//                 likeable_id: video_id
//             }
//         }
//     })
// )


// export const updateVideoLike = (id, value, video_id) => (
//     $.ajax({
//         method: "PATCH",
//         url: `/api/videos/${video_id}/likes/${id}`,
//         data: {
//             like: {
//                 value: value,
//                 likeable_type: video,
//                 likeable_id: video_id
//             }
//         }
//     })
// )


// export const deleteVideoLike = (id, video_id) => (
//     $.ajax({
//         method: "DELETE",
//         url: `/api/videos/${video_id}/likes/${id}`
//     })
// )