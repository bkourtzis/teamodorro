var Howler = require("howler");
var pitches = ["C4", "E4", "G4", "C5"];

var pitch = pitches[Math.floor(Math.random()*pitches.length)];


var sound = new Howler.Howl({
  urls: ['sounds/delayed/' + pitch + '.ogg']
})

module.exports = {
	getInitialState: function() {
	    return {
	        played_sound: false  
	    };
	},
	componentDidMount: function() {
	  	sound.play();    
	  	this.setState({
	  		played_sound: true
	  	})
	}
}
