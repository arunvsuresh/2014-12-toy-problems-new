$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  
	var para1 = $('p').text();
	var para1Split = (para1.split(' '));
	for (var i = 0; i < para1Split.length; i++) {
		para1Split[i] = '<span>' + para1Split[i] + '</span>';
	}

	$('p').html(para1Split.join(' '));

	// --------------STEP 2--------------
	// Next, change spans to random colors, once per second

	// TODO: your code here!

	// var colors = ['red', 'blue', 'green'];
	// var colorChange = function() {

	// }


	  // have a setTimeout with an anonymous fn, changing colors at 1000
	  
	setInterval(function(){
		$('span').css({color: "red"});
	}, 1000);
   

});