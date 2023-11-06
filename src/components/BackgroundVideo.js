

import React, { Component } from 'react';

import './BackgroundVideo.css';

import src_video from './../assets/video.mp4';

export default class BackgroundVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVideoPlaying: true // false oldugunda video oynatilarak basliyor neden?? CUNKU RENDER EDILIR EDILMEZ startStopVideo() cagiriliyor ve orada setState ile baslangic durumunun tersine cevrilmesi yazilmis
        };
        this.backgroundVideo = React.createRef();
    }
    
    componentDidMount() {
        this.startStopVideo();
    }
   
    startStopVideo = () => {
        if(this.state.isVideoPlaying === false){
            this.backgroundVideo.current.play();
        }else{
            this.backgroundVideo.current.pause();
        }
        this.setState({
            isVideoPlaying: !this.state.isVideoPlaying
        })
    }

    render() {
        return (
            <div className="BackgroundVideo" >
                <video className="background-video" loop muted ref={this.backgroundVideo} onClick= { () => this.startStopVideo() } >
                    <source src={src_video} type="video/mp4" />
                </video>
            </div>
        );
    }
}