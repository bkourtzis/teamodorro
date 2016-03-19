var Howler = require("howler");
var pitches = ["G4"];

var pitch = pitches[Math.floor(Math.random()*pitches.length)];


var sound = new Howler.Howl({
  urls: ['sounds/without_delay/' + pitch + '.ogg']
})

var first_run = true;

module.exports = {
	getInitialState: function() {
	    return {
	        played_sound: false  
	    };
	},
	componentDidMount: function() {
		console.log("did mount");
		if(first_run){
			first_run = false;
		}else{
		  	sound.play();    
		  	this.setState({
		  		played_sound: true
		  	})			
		}
	}
}
