// javascript:(function(){var%20head=%20document.getElementsByTagName(%27head%27)[0],script=%20document.createElement(%27script%27);script.type=%20%27text/javascript%27;script.src=%20%27http://kaaes.github.com/timing/bookmarklet.js%27;head.appendChild(script);})()
(function(){
	var h= document.getElementsByTagName('head')[0], 
		s = document.createElement('script');
	
	s.type= 'text/javascript';
	s.src= 'http://kaaes.github.com/timing/bookmarklet.js';
	h.appendChild(s);
})()