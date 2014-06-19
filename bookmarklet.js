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
		s.type='text/javascript';
		l.style.cssText='z-index:999;position:fixed;top:10px;left:10px;display:inline;width:auto;font-size:14px;line-height:1.5em;font-family:Helvetica,Calibri,Arial,sans-serif;text-shadow:none;padding:3px 10px 0;background:#FFFDF2;box-shadow:0 0 0 3px rgba(0,0,0,.25),0 0 5px 5px rgba(0,0,0,.25); border-radius:1px';
		l.innerHTML='Just a moment';
		s.src='//kaaes.github.io/timing/profiler.js';
		s.onload=c;
		s.onreadystatechange=function(){if(this.readyState=='loaded'){c()}};
		d.body.appendChild(l);
		h.appendChild(s);
	} else if(window.__profiler instanceof __Profiler){window.__profiler.init()}
})();