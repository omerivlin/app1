function getStoryById(id, category)
{
	
	$.ajax(
	{
		type : 'POST',
		url: 'http://www.kidnet.co.il/books/server/server.php',
		dataType: 'json',
		data: {request: 30, id: id, cat: category},
		success: function(data) 
		{
			storyData = data;
			//alert(data.time[2][1]);
			setStory(data);
		}
	});
}
