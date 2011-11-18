// javascript:(function(){if(!window.__profiler__%20||%20window.__profiler__.scriptLoaded%20!==%20true)%20{var%20h=%20document.getElementsByTagName(%27head%27)[0],s%20=%20document.createElement(%27script%27),l%20=%20document.createElement(%27div%27),d%20=%20new%20Date();s.type=%20%27text/javascript%27;l.style.cssText=%27z-index:999;position:fixed;top:10px;left:10px;display:inline;width:auto;font-size:14px;line-height:1.5em;font-family:Helvetica,Calibri,Arial,sans-serif;text-shadow:none;padding:3px%2010px%200;background:#FFFDF2;box-shadow:0%200%203px%2010px%20rgba(0,0,0,.5),0%200%200%205px%20rgba(0,0,0,.5);%20border-radius:1px%27;l.innerHTML%20=%20%27Just%20a%20moment%27;s.src=%20%27http://chrisheilmann.s3.amazonaws.com/timing.js?%27+d.getTime();s.onload%20=%20function(){document.body.removeChild(l)};document.body.appendChild(l);h.appendChild(s);}%20else%20if(typeof%20window.__profiler__%20===%20%27function%27)%20{window.__profiler__();}})()
(function(){
	if(!window.__profiler__ || window.__profiler__.scriptLoaded !== true) {
		var d=document,
			h=d.getElementsByTagName('head')[0], 
			s=d.createElement('script'),
			l=d.createElement('div'),
			c=function(){d.body.removeChild(l)},
			t=new Date();
		s.type='text/javascript';
		l.style.cssText='z-index:999;position:fixed;top:10px;left:10px;display:inline;width:auto;font-size:14px;line-height:1.5em;font-family:Helvetica,Calibri,Arial,sans-serif;text-shadow:none;padding:3px 10px 0;background:#FFFDF2;box-shadow:0 0 3px 10px rgba(0,0,0,.5),0 0 0 5px rgba(0,0,0,.5); border-radius:1px';
		l.innerHTML='Just a moment';
		s.src='http://chrisheilmann.s3.amazonaws.com/timing.js?'+t.getTime();
		s.onload=c;
		s.onreadystatechange=function(){if(this.readyState=='complete'){hc);}};
		d.body.appendChild(l);
		h.appendChild(s);
	} else if(typeof window.__profiler__ === 'function') {window.__profiler__();}
})()