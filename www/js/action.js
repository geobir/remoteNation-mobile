var curImg = 0;

//$("#cover-img").attr('src', userData['movies'][curImg]['covers'][0]['uri']);

function actionPlay(current)
{
    if (current.className == 'btn-play')
        currentMac.play(userData['movies'][curImg]['content_ids'][0]);
    else
        currentMac.pause();
    changeState(current);
}

function actionLog()
{
    var postData = {identity: document.getElementById('log-identity').value, password: document.getElementById('log-password').value};

    $.ajax({
        type: "POST",
        url: "https://api.streamnation.com/api/v1/auth",
        data: postData,
        //headers: {'X-Milestone-Auth-Token' : '', 'X-API-Version' : '1.1'},
        success: function(data)
        {
            userData = data;
            //console.log(data);
            document.location.href = "#player";
            currentMac.refresh();
            getMoviesList(userData['auth_token'], function(data){
            	$("#cover-img").attr('src', userData['movies'][curImg]['covers'][2]['uri']);
            	$("#movieTitle").text(userData['movies'][curImg]['title']);
            })
        },
        error: function(data)
        {
            alert("ID Error");
            console.log(JSON.stringify(data));
        }
    });
}

function progSeek(cur)
{
    var _progressBar = document.getElementById("video-bar-progress");
    var x = event.x - cur.offsetLeft;

    _progressBar.style.width = (x / cur.offsetWidth * 100) + "%";
    currentMac.seek(x / cur.offsetWidth * 100);
}

function actionRight()
{
	if (curImg < userData['movies'].length - 1)
	{
		++curImg;
		$("#movieTitle").text(userData['movies'][curImg]['title']);
		$("#cover-img").attr('src', userData['movies'][curImg]['covers'][0]['uri']);
		currentMac.moveRight();
	}
}

function actionLeft()
{
	if (curImg > 0)
	{
		--curImg;
		$("#movieTitle").text(userData['movies'][curImg]['title']);
		$("#cover-img").attr('src', userData['movies'][curImg]['covers'][0]['uri']);
		currentMac.moveLeft();
	}
}

function getMoviesList(auth_token, callback)
{
	$.ajax({
        type: "GET",
        url: "https://api.streamnation.com/api/v1/movies?auth_token=" + auth_token,
        //headers: {'X-Milestone-Auth-Token' : '', 'X-API-Version' : '1.1'},
        success: function(data)
        {
            userData = data;
            //console.log(data);
            document.location.href = "#player";
            callback(data);
        },
        error: function(data)
        {
            alert("Error: cant get list of film");
            console.log(JSON.stringify(data));
        }
    });
}

function actionRefresh()
{
	currentMac.refresh();
}