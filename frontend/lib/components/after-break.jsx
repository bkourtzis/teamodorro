var React = require('react');
var Helper = require('../helpers/helper.js');

var AfterBreak = React.createClass({
	to_work: function(){
		this.props.onChangeMode("work");
	},
	render: function() {
		return (
			<div>
				<div className="flex-item sentence no-padding">
					<span className="animated bounceInDown information">break time's over!</span>
					<div className="slug">
						{'teamodorro.sealcode.org/#/'+this.props.session.body.slug}
					</div>
				</div>
				<div onClick={this.to_work} className="flex-item">
					<div className="press after_break animated pulse">
						yes!
					</div>
				</div>


			</div>
		);
	}
});

module.exports = AfterBreak;
