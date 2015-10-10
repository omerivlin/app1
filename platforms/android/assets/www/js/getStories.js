function getStories (category)
{
	$.ajax(
	{
		type : 'POST',
		url: 'http://www.kidnet.co.il/books/server/server.php',
		dataType: 'json',
		data: {request: 15, cat: category},
		success: function(data) 
		{
			setFirstStory(data);
		}
	});
}