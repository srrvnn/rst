var React = require('react');

var Footer = React.createClass({

	footerList: [
		// { name: 'Help', href: '/help' },
		{ name: 'Issues', href: 'http://github.com/srrvnn/rst/issues' },
		{ name: 'Built with Love in California', href: null }
	],

	render: function() {

		var footerListItems = this.footerList.map(function(item) {
			return typeof item.href === 'string'
				? (<li><a href={item.href}>{item.name}</a></li>)
				: (<li><span>{item.name}</span></li>);
		});

		return (
			<footer className="footer">
				<ul className="footer-list">
					{footerListItems}
				</ul>
			</footer>
		);
	}
});

module.exports = Footer;
