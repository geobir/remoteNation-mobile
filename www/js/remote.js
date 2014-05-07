
function Remote(url)
{
	this.pause = function() {
		$.get(url + '/pause', function(data)
		{
			//alert(data);
		});
	};

	this.play = function(id) {
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

		console.log('refresh');
		$.ajax({
			url: url + '/refresh',
			timeout: 4000,
			success: function(data) {
				self.refresh();
				console.log('Refresh: ' + data);
				//console.log(document.getElementById('btnPlay'));
				if (data == 'play') {
					document.getElementById('btnPlay').className = "btn-pause";
				}
				else if (data == 'pause') {
					document.getElementById('btnPlay').className = "btn-play";
				}
				else
				{
					curImg = data;
					document.getElementById('btnPlay').className = "btn-pause";
					$("#movieTitle").text(userData['movies'][curImg]['title']);
					$("#cover-img").attr('src', userData['movies'][curImg]['covers'][0]['uri']);
				}
			},
			error: function(data) {
	            console.log("No event");
	        	self.refresh();
	        }
		});
	}
}

function takeIp(servip, servv)
{

	$.get('http://10.12.4.2:1337/get', function(data)
	{
		console.log(data);
		servv[0] = data;
		//alert(data);
	});
}