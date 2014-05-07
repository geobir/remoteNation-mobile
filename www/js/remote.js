
function Remote(url)
{
	this.pause = function() {
		$.get(url + '/pause', function(data)
		{
			alert(data);
		});
	};

	this.play = function() {
		$.get(url + '/play', function(data)
		{
			alert(data);
		});
	}

	this.seek = function(percent) {
		$.get(url + '/seek?s=+' + percent, function(data)
		{
			alert(data);
		});
	}

	this.moveRight = function() {
		$.get(url + '/right', function(data)
		{
			alert(data);
		});
	}

	this.moveLeft = function() {
		$.get(url + '/left', function(data)
		{
			alert(data);
		});
	}

	this.refresh = function()
	{
		var self = this;

		console.log("refresh");
		$.ajax({
			url: url + '/refresh',
			timeout: 40000,
			success: function(data) {
				console.log(data);
	        	self.refresh();
			},
			error: function(data) {
	            console.log("No event");
	            console.log(JSON.stringify(data));
	        	self.refresh();
	        }
		});
	}
}
