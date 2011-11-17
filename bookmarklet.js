// javascript:(function(){var%20Profiler%20=%20Profiler%20||%20undefined;if(!Profiler)%20{var%20h=%20document.getElementsByTagName(%27head%27)[0],s%20=%20document.createElement(%27script%27);s.type=%20%27text/javascript%27;s.src=%20%27http://kaaes.github.com/timing/timing.js%27;h.appendChild(s);}%20else%20{Profiler();}})()
(function(){
	if(!document.getElementById('bmrklt')) {
		var h= document.getElementsByTagName('head')[0], 
			s = document.createElement('script');
			s.type= 'text/javascript';
		s.id='bmrklt';
		s.src= 'http://kaaes.github.com/timing/timing.js';
		h.appendChild(s);
	} else {
		Profiler();
	}
})()