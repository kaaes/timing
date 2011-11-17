// javascript:(function(){var%20h=%20document.getElementsByTagName(%27head%27)[0],s%20=%20document.createElement(%27script%27);s.type=%20%27text/javascript%27;s.src=%20%27http://kaaes.github.com/timing/bookmarklet.js%27;h.appendChild(s);})()
(function(){
	if(!Profiler) {
		var h= document.getElementsByTagName('head')[0], 
			s = document.createElement('script');
			s.type= 'text/javascript';
		s.src= 'http://kaaes.github.com/timing/timing.js';
		h.appendChild(s);
	} else {
		Profiler();
	}
})()