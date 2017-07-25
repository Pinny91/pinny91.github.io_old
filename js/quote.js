var quote = '';
var author = '';

$(document).ready(function() {
	getQuote();	
	$("#getQuote").on("click", function(){
		getQuote();
		var quoteBlock = $('#quote-block');
		quoteBlock.html('');
		quoteBlock.append(
			'<div class="text-bubble"><p id="quote">'+quote+'</p>' + '<p id="author">' + author + '</p></div>'
		);
	});
});	


function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var json = JSON.parse(response);
      quote = json.quote;
      author = json.author;
    }
  });
}