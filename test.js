var test = require('tape');
var friendlyPseudosPlugin = require('./index');

test('converts onHover to :hover', function(t) {
  t.plan(1);

	var result = friendlyPseudosPlugin({
		style: {
			onHover: {color: 'red'}
		}
	});

	t.deepEqual(result, {
		style: {
			':hover': {color: 'red'}
		}
	});
});
