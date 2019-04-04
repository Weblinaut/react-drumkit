import React, { Component } from 'react'
import DrumKitKey from './DrumKitKey'

class DrumKit extends Component {

    render() { 
        return ( <div>
                    <div className="keys">
                        <DrumKitKey keyboardShortcut="A" media="/sounds/clap.wav">clap</DrumKitKey>
                        <DrumKitKey keyboardShortcut="S" media="/sounds/hihat.wav">hihat</DrumKitKey>
                        <DrumKitKey keyboardShortcut="D" media="/sounds/kick.wav">kick</DrumKitKey>
                        <DrumKitKey keyboardShortcut="F" media="/sounds/openhat.wav">openhat</DrumKitKey>
                        <DrumKitKey keyboardShortcut="G" media="/sounds/boom.wav">boom</DrumKitKey>
                        <DrumKitKey keyboardShortcut="H" media="/sounds/ride.wav">ride</DrumKitKey>
                        <DrumKitKey keyboardShortcut="J" media="/sounds/snare.wav">snare</DrumKitKey>
                        <DrumKitKey keyboardShortcut="K" media="/sounds/tom.wav">tom</DrumKitKey>
                        <DrumKitKey keyboardShortcut="L" media="/sounds/tink.wav">tink</DrumKitKey>
                     </div>
                  </div>                
    
        )}
}
 
export default DrumKit;