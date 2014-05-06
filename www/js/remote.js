
function Remote(url)
{
	this.pause = function() {
		$.get(url + '/pause', function(data) {
			alert(data);
		});
	};

	this.play = function() {
		$.get(url + '/play', function(data) {
			alert(data);
		});
	}

	this.seek = function(percent) {
		$.get(url + '/seek/' + percent, function(data) {
			alert(data);
		});
	}
}

module.exports = Remote;
