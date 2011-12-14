var __profiler = window.__profiler || function() {
	var order = ['navigationStart', 'redirectStart', 'redirectStart', 'redirectEnd', 'fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'secureConnectionStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'unloadEventStart', 'unloadEventEnd', 'domLoading', 'domInteractive', 'msFirstPaint', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domContentLoaded', 'domComplete', 'loadEventStart', 'loadEventEnd'],
		cssReset = 'font-size:14px;line-height:1em;z-index:999;text-align:left;font-family:Helvetica,Calibri,Arial,sans-serif;text-shadow:none;box-shadow:none;display:inline-block;color:#222;font-weight:normal;border:none;margin:0;padding:0;background:none;',
		maxTime = 0,
		barHeight = 20,
		timeLabelWidth = 50,
		nameLabelWidth = 150,
		textSpace = timeLabelWidth + nameLabelWidth,
		spacing = 1.25,
		unit = 1,
		times = {};
	
	function getPerfObjKeys(obj) {
		var keys = Object.keys(obj);
		return keys.length ? keys : Object.keys(Object.getPrototypeOf(obj));
	}
	
	function setUnit(canvas) {
		return (canvas.width - textSpace) / maxTime;
	}
	
	function setSections() {
		return Array.prototype.indexOf ? [{
			name: 'network',
			color: [224, 84, 63],
			start: order.indexOf('navigationStart'),
			end: order.indexOf('connectEnd')
		}, {
			name: 'server',
			color: [255, 188, 0],
			start: order.indexOf('requestStart'),
			end: order.indexOf('responseEnd')
		}, {
			name: 'browser',
			color: [16, 173, 171],
			start: order.indexOf('unloadEventStart'),
			end: order.indexOf('loadEventEnd')
		}] : [];
	}
	
	function createContainer() {
		var container = document.createElement('div');
		document.body.appendChild(container);
		container.style.cssText = cssReset + 'width:95%;position:fixed;margin:0 auto;top:20px;left:20px;background:#FFFDF2;background:rgba(255,253,242,.95);padding:10px;box-shadow:0 0 10px 5px rgba(0,0,0,.5),0 0 0 10px rgba(0,0,0,.5); border-radius:1px';
		return container;
	}
	
	function createHeader(container, sections) {
		var c = document.createElement('div'),
			h = document.createElement('h1'),
			b = document.createElement('button'),
			sectionStr = '/ ';
		
		for(var i = 0, l = sections.length; i < l; i++) {
			sectionStr += '<span style="color:rgb('+sections[i].color.join(',')+')">'+sections[i].name+'</span> / ';
		}				
				
		h.innerHTML = 'Page Load Time Breakdown ' + sectionStr;
		h.style.cssText = cssReset + 'font-size:24px;margin:10px 0;width:auto';
		
		b.innerHTML = 'close';
		b.style.cssText = cssReset + 'float:right;background:#333;color:#fff;border-radius:10px;padding:3px 10px;font-size:12px;line-height:130%;width:auto';
		b.onclick = function(e){
			b.onclick = null;
			container.parentNode.removeChild(container);
		}; // DOM level 0 used to avoid implementing this twice for IE & the rest 
		
		c.appendChild(h);
		c.appendChild(b);
		
		return c;
	}
	
	function createInfoLink() {
		var a = document.createElement('a');
		a.href = 'http://kaaes.github.com/timing/info.html';
		a.target = '_blank';
		a.innerHTML = 'What does it all mean?';
		a.style.cssText = cssReset + 'color:#1D85B8';
		return a;
	}

	function notSupportedInfo() {
		var p = document.createElement('p');
		p.innerHTML = 'Navigation Timing API is not supported by your browser';
		return p;
	}

	function createChart(container, data, sections) {
		var time, blockStart, blockEnd, item, eventName, options,
			omit = [], drawFns = [], preDraw,
			fontString = "12px Arial",
			canvas, context,
			canvasCont = document.createElement('div'),
			infoLink = createInfoLink(),
			dataObj = findSectionEdges(data, sections);
		
		canvas = document.createElement('canvas');
		canvas.width = parseInt(window.getComputedStyle(container).width, 10) - 20;
		context = canvas.getContext('2d');
		context.font = fontString; // needs to be set here for proper text measurement...
		
		unit = setUnit(canvas);
		
		preDraw = prepareDraw.bind(this, canvas, dataObj, canvas.width);
		
		for (var name in dataObj) {
			item = dataObj[name];
			blockStart = name.indexOf('Start');
			blockEnd = -1;
			if (blockStart > -1) {
				eventName = name.substr(0, blockStart);
				blockEnd = order.indexOf(eventName + 'End');
			}
			if (blockStart > -1 && blockEnd > -1) {
				item.label = eventName;
				drawFns.push(preDraw('block', [eventName + 'Start', eventName + 'End', eventName], item));
				omit.push(eventName + 'End');
			}
			else if (omit.indexOf(name) < 0) {
				item.label = name;
				drawFns.push(preDraw('point', [name], item));
			}
		}
		
		canvas.height = spacing * barHeight * drawFns.length; 
		context.font = fontString; // setting canvas height resets font, has to be re-set
		
		drawFns.forEach(function(draw) {
			draw(context);
			context.translate(0, Math.round(barHeight * spacing));
		})
		
		canvasCont.appendChild(canvas);
		canvasCont.appendChild(infoLink);
		
		return canvasCont;
	}
	
	function findSectionEdges(dataArr, sections) {
		var data = {}, start, end, i, j, len, flen, sectionOrder, filtered;
		dataArr.forEach(function(el) {
			data[el[0]] = { time : el[1] };
		});
		for (i = 0, len = sections.length; i < len; i++) {
			start = sections[i].start;
			end = sections[i].end;
			
			sectionOrder = order.slice(start, end + 1);
			filtered = sectionOrder.filter(function(el){
				return data.hasOwnProperty(el);
			});
			filtered.sort(function(a, b){
				return data[a].time - data[b].time;
			})
			start = filtered[0];
			end = filtered[filtered.length-1];			
			
			for(j = 0, flen = filtered.length; j < flen; j++) {
				var item = filtered[j];
				if(data[item]) {					
					data[item].color = sections[i].color;
					data[item].barStart = data[start].time;
					data[item].barEnd = data[end].time;
				}
			}
		}
		return data;
	}
	
	function prepareDraw(canvas, data, barWidth, mode, eventName, options) {
		var opts = {
			color : options.color,
			sectionData : [options.barStart,  options.barEnd],
			eventData : eventName.map(function(el){ return data[el] && typeof data[el].time !== 'undefined' ? data[el].time : el; }),
			label : options.label
		}
		return drawBar(mode, canvas, barWidth, opts);
	}

	function drawBar(mode, canvas, barWidth, options) {
		var start, stop, width, timeLabel, metrics,		
			color = options.color,
			sectionStart = options.sectionData[0],
			sectionStop = options.sectionData[1],
			nameLabel = options.label,
			context = canvas.getContext('2d');
		
		if (mode === 'block') {
			start = options.eventData[0];
			stop = options.eventData[1];
			timeLabel = start + '-' + stop;
		} else {
			start = options.eventData[0];
			timeLabel = start;
		}
		timeLabel += 'ms';
		
		metrics = context.measureText(timeLabel);
		if(metrics.width > timeLabelWidth) {
			timeLabelWidth = metrics.width + 10;
			textSpace = timeLabelWidth + nameLabelWidth;
			unit = setUnit(canvas);
		}
		
		return function(context) {
			if(mode === 'block') {
				width = Math.round((stop - start) * unit);
				width = width === 0 ? 1 : width;
			} else {
				width = 1;
			}
			
			// row background
			context.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',.3)';
			context.lineWidth = 1;
			context.fillStyle = 'rgba(255,255,255,.99)';
			context.fillRect(0, 0, barWidth - textSpace, barHeight);
			context.fillStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',.1)';
			context.fillRect(0, 0, barWidth - textSpace, barHeight);
			context.strokeRect(.5, .5, Math.round(barWidth - textSpace -1), Math.round(barHeight));
			
			// section bar
			context.shadowColor = 'white';
			context.fillStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',.3)';
			context.fillRect(Math.round(unit * sectionStart), 0, Math.round(unit * (sectionStop - sectionStart)), barHeight);
			
			// event marker
			context.fillStyle = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
			context.fillRect(Math.round(unit * start), 0, width, barHeight);
			
			// label
			context.fillText(timeLabel, barWidth - textSpace + 10, 2 * barHeight / 3);
			context.fillText(nameLabel, barWidth - textSpace + timeLabelWidth + 10, 2 * barHeight / 3);
		}
	}
	
	function getData() {
		if (!window.performance) {
			return;
		}
		var data = window.performance,
			timeData = data.timing,
			times = {},
			start = timeData.navigationStart || 0,
			events = getPerfObjKeys(timeData),
			sortable = [];
			duration = 0;
		
		events.forEach(function(e) {
			if (timeData[e] && timeData[e] > 0) {
				duration = timeData[e] - start;
				sortable.push([e, duration]);
				if (duration > maxTime) {
					maxTime = duration;
				}
			}
		});
		
		sortable.sort(function(a, b) {
			return a[1] !== b[1] ? a[1] - b[1] : order.indexOf(a[0]) - order.indexOf(b[0]);
		});
		
		sortable.forEach(function(el) {
			times[el[0]] = el[1];
		});
		
		return sortable;
	}
	
	(function show() {
		var container = createContainer(),
			data = getData(),
			sections = setSections();			
		container.appendChild(createHeader(container, sections));		
		container.appendChild(data && sections.length ? createChart(container, data, sections) : notSupportedInfo());
	})();
};
if(typeof __profiler === 'function') { __profiler(); }
__profiler.scriptLoaded = true;
