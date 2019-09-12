import React from 'react'


class UploadVideo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            videoReceived: false,
            thumbReceived: false,
            videoFile: null,
            thumbFile: null,
            thumbUrl: null,
        }
        this.receiveVideo = this.receiveVideo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTextInput = this.updateTextInput.bind(this);
        this.receiveThumb = this.receiveThumb.bind(this);
    }

    updateTextInput(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    receiveVideo(e){
        e.preventDefault;
        const vidFile = e.currentTarget.files[0]
        this.setState({
            videoFile: vidFile,
            videoReceived: true,
        })

    }

    receiveThumb(e){
        e.preventDefault;
        const thumb = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {

            this.setState({
                thumbFile: thumb,
                thumbReceived: true,
                thumbUrl: fileReader.result
            })
        }
        if(thumb){
            fileReader.readAsDataURL(thumb);
        }
    }

    handleSubmit(e){
        e.preventDefault
        const formData = new FormData();
        formData.append('video[title]', this.state.title)
        formData.append('video[description]', this.state.description)
        formData.append('video[video]', this.state.videoFile)
        formData.append('video[thumbnail]', this.state.thumbFile)
        this.props.postVideo(formData).then(res => {
                return this.props.history.push(`/videos/${res.video.id}`)
        })
    }

    render(){
        let thumbPreview = this.state.thumbUrl ? <img src={this.state.thumbUrl} alt="thumb here"/> : null;
        let display = this.state.videoReceived ? (
            <div >
                <form className="upload-form" onSubmit={this.handleSubmit}>
                    <div className="thumb-section">
                        <h5>Thumbnail Preview</h5>
                        <label className="upload-thumb-label">
                            <div className="thumb-preview">{thumbPreview}</div>
                            <input className="thumb-file-input" type="file" accept="image/*" onChange={this.receiveThumb} required/>
                            <p>Select img file for thumbnail</p>
                        </label>
                    </div>
                    <div className="upload-page-2-middle-section">
                        {/* <div className="blue-bar-section">
                            { <div className="processing-bar">
                                100% of file uploaded
                            </div> }
                            <br />
                        </div> */}

                        <input className="upload-video-button" type="submit" value="Publish"/>
                        <br/>
                        <div className="upload-inputs">
                            <label>
                                <input className="upload-title-input" type="text" placeholder="Title" value={this.state.title} onChange={this.updateTextInput("title")} required/>
                            </label>
                            <br/>
                            <label>
                                <textarea className="upload-description-input" placeholder="Description" value={this.state.description} onChange={this.updateTextInput("description")}></textarea>
                            </label>
                        </div>
                    </div>
                </form>
            </div>

        ):(
            <div className="video-input-section">
                <label className="upload-video-label">
                    <input className="video-file-input" accept="video/*" type="file" onChange={this.receiveVideo} required/>
                        <p className="upload-icon">&#x2B06;</p>
                        <br/>
                        <p className="select-file-p">Select File to Upload</p> 
                </label>
            </div>
        )
        return(
            <div className="video-upload-div">
                <div className="video-upload-display">
                    {display}
                </div>
            </div>
        )

    }
}

export default UploadVideo


