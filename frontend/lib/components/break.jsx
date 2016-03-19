var React = require('react');
var Break = React.createClass({
	render: function() {
		return (
			<div>
				<div className="flex-item sentence no-padding">
					<span className="animated bounceInDown information">break mode</span>
					<div className="slug">
						{'teamodorro.sealcode.org/#/'+this.props.session.body.slug}
					</div>
				</div>
				<div className="flex-item">
					<div className="circle-block break animated fadeIn">
						{this.props.time}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Break;
