//javascript:(function()%20{if(!window.__profiler||window.__profiler.scriptLoaded!==true){var%20d=document,h=d.getElementsByTagName(%27head%27)[0],s=d.createElement(%27script%27),l=d.createElement(%27div%27),c=function(){if(l){d.body.removeChild(l);};window.__profiler=window.__profiler||new%20__Profiler();window.__profiler.init();__profiler.scriptLoaded=true;},t=new%20Date();s.type=%27text/javascript%27;l.style.cssText=%27z-index:999;position:fixed;top:10px;left:10px;display:inline;width:auto;font-size:14px;line-height:1.5em;font-family:Helvetica,Calibri,Arial,sans-serif;text-shadow:none;padding:3px%2010px%200;background:#FFFDF2;box-shadow:0%200%200%203px%20rgba(0,0,0,.25),0%200%205px%205px%20rgba(0,0,0,.25);%20border-radius:1px%27;l.innerHTML=%27Just%20a%20moment%27;s.src=%27http://kaaes.github.com/timing/profiler.js?%27+t.getTime();s.onload=c;s.onreadystatechange=function(){if(this.readyState==%27loaded%27){c()}};d.body.appendChild(l);h.appendChild(s);}%20else%20if(window.__profiler%20instanceof%20__Profiler){window.__profiler.init()}})();
(function() {
	if(!window.__profiler||window.__profiler.scriptLoaded!==true){
		var d=document,
				h=d.getElementsByTagName('head')[0],
				s=d.createElement('script'),
				l=d.createElement('div'),
				c=function(){
					if(l){
						d.body.removeChild(l);
					};
					window.__profiler=window.__profiler||new __Profiler();
					window.__profiler.init();
					__profiler.scriptLoaded=true;
				},
				t=new Date();
		s.type='text/javascript';
		l.style.cssText='z-index:999;position:fixed;top:10px;left:10px;display:inline;width:auto;font-size:14px;line-height:1.5em;font-family:Helvetica,Calibri,Arial,sans-serif;text-shadow:none;padding:3px 10px 0;background:#FFFDF2;box-shadow:0 0 0 3px rgba(0,0,0,.25),0 0 5px 5px rgba(0,0,0,.25); border-radius:1px';
		l.innerHTML='Just a moment';
		s.src='http://kaaes.github.com/timing/profiler.js?'+t.getTime();
		s.onload=c;
		s.onreadystatechange=function(){if(this.readyState=='loaded'){c()}};
		d.body.appendChild(l);
		h.appendChild(s);
	} else if(window.__profiler instanceof __Profiler){window.__profiler.init()}
})();