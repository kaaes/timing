// javascript:(function(){if(window.__profiler__%20&&%20window.__profiler__.scriptLoaded%20===%20true)%20{window.__profiler__();}%20else%20{var%20h=%20document.getElementsByTagName(%27head%27)[0],s%20=%20document.createElement(%27script%27);s.type=%20%27text/javascript%27;s.id=%27bmrklt%27;s.src=%20%27http://kaaes.github.com/timing/timing.js%27;h.appendChild(s);}})()
(function(){
	if(window.__profiler__ && window.__profiler__.scriptLoaded === true) {
		window.__profiler__();
	} else {
		var h= document.getElementsByTagName('head')[0], 
			s = document.createElement('script');
			s.type= 'text/javascript';
		s.id='bmrklt';
		s.src= 'http://kaaes.github.com/timing/timing.js';
		h.appendChild(s);
	}
})()