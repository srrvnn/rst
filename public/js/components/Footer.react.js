require('../../css/footer.scss');

var React = require('react');
var Footer = React.createClass({

	footerItems: [
		{ name: 'Help', href: '/help' },
		{ name: 'Issues', href: 'http://github.com/srrvnn/rst/issues' },
		{ name: 'Built with Love in Mountain View, California', href: null }
	],

	render: function() {

		var footerElements = this.footerItems.map(function(item) {
			return typeof item.href === 'string'
				? (<li key={item.name}><a href={item.href}>{item.name}</a></li>)
				: (<li key={item.name}><span>{item.name}</span></li>);
		});

		return (
			<footer className="footer">
				<ul className="footer-items"> {footerElements} </ul>
			</footer>
		);
	}
});

module.exports = Footer;
