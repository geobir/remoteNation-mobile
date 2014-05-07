
function Remote(url)
{
	this.pause = function() {
		$.get(url + '/pause', function(data)
		{
			//alert(data);
		});
	};

	this.play = function(id) {
		console.log(id);
		$.get(url + '/play?id=' + id, function(data)
		{
			//alert(data);
		});
	}

	this.seek = function(percent) {
		$.get(url + '/seek?s=+' + percent, function(data)
		{
			//alert(data);
		});
	}

	this.moveRight = function() {
		$.get(url + '/right', function(data)
		{
			//alert(data);
		});
	}

	this.moveLeft = function() {
		$.get(url + '/left', function(data)
		{
			//alert(data);
		});
	}

	this.refresh = function()
	{
		var self = this;

		$.ajax({
			url: url + '/refresh',
			timeout: 40000,
			success: function(data) {
				console.log(data);
				if (play && document.getElementById('btn-play').className == 'btn-play') {
					actionPlay(document.getElementById('btn-play'))
				};
				if (pause && document.getElementById('btn-play').className == 'btn-pause') {
					actionPlay(document.getElementById('btn-play'))
				};
	        	self.refresh();
			},
			error: function(data) {
	            console.log("No event");
	        	self.refresh();
	        }
		});
	}
}

function takeIp(servip)
{
	;
}