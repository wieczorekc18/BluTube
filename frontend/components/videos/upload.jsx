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
        const vidFile = e.currentTarget.file[0]
        this.setState({
            videoFile: vidFile,
            videoReceived: true,
        })

    }

    receiveThumb(e){
        e.preventDefault;
        const thumb = e.currentTarget.file[0];
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
        this.props.postVideo(formData)
            .then(
                // (response) => console.log(response.message),
                // (response) => console.log(response.responseJSON)
            )
    }

    render(){
        // debugger
        let thumbPreview = this.state.thumbUrl ? <img src={this.state.thumbUrl} alt="thumb here"/> : null;
        let display = this.state.videoReceived ? (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="thumb-section">
                        <h5>Thumbnail Preview</h5>
                        {thumbPreview}
                        <label className="upload-thumb-label">
                            <input className="thumb-file-input" type="file" onChange={this.receiveThumb} />
                            
                            Select img file for thumbnail
                        </label>

                    </div>

                    <label>Title 
                        <input type="text" value={this.state.title} onChange={this.updateTextInput("title")} />
                    </label>

                    <label>Video Description
                        <textarea value={this.state.description} onChange={this.updateTextInput("description")}></textarea>
                    </label>
                    <input className="upload-video-button" type="submit" value="Upload Video"/>
                </form>
            </div>

        ):(
            <div className="video-input-section">
                <label className="upload-video-label">
                    <input className="video-file-input" type="file" onChange={this.receiveVideo} />
                        <p className="upload-icon">&#x2B06;</p>
                    Select File to Upload
                </label>
            </div>
        )
        return(
            <div className="video-upload-div">
                {display}
            </div>
        )

    }
}

export default UploadVideo


