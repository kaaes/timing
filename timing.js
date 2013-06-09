(function() {
  var d = document;
  var h = d.getElementsByTagName('head')[0];
  var s = d.createElement('script');
  var t = new Date();
  
  s.type='text/javascript';
  s.src='http://localhost:8888/timing/profiler.js?'+t.getTime();
  
  s.onload = c;
  s.onreadystatechange = function(){
    if(this.readyState == 'loaded'){
      c();
    }
  };
  
  h.appendChild(s);

  function c() {
    window.__profiler = window.__profiler || function() {
      var p = new __Profiler();
      p.init();
    }
  
    window.__profiler();
      __profiler.scriptLoaded = true;
    }
})();
