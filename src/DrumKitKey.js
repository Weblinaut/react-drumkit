import React, { Component } from 'react'

class DrumKitKey extends Component {
    state = { isPlaying: false }
    
    playSound = e => {
        if (this.props.keyboardShortcut.charCodeAt(0) === e.keyCode) {
            const audio = new Audio(this.props.media)
            this.setState({isPlaying: true}) 
            audio.currentTime = 0
            audio.play()
        }
    }

    componentDidMount() {
        window.addEventListener("keydown", this.playSound)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.playSound)
    }

    removeTransition = (e) => {
        if (e.propertyName !== "transform") return;
        this.setState({isPlaying: false}) 
    }

    render() { 
        return (
            <div onTransitionEnd={this.removeTransition} className={this.state.isPlaying ? 'key playing' : 'key'}>
                <kbd>{this.props.keyboardShortcut}</kbd>
                <span className="sound">{this.props.children}</span>
            </div>
        )
    }
}
 
export default DrumKitKey