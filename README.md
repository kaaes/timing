Breaking Down onLoad
====================

This script has a form of bookmarklet and uses [Navigation Timing object](https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html) to present timing of different phases of loading the page by a browser. It measures everything from triggering the action (hitting enter on url bar, refreshing page or clicking a link/button) to the moment when site is fully loaded.

It is a visual presentation of the content of `performance.timing`  object.

Adding it to your bookmarks allows you to analyze performance of every request you'd like to check out.

So far Navigation Timing API works in Firefox 7+, Chrome and IE 9+

Check out how it works here - http://kaaes.github.com/timing/

More resources:

* [HTML5 Rocks - Measuring Page Load Speed with Navigation Timing](http://www.html5rocks.com/en/tutorials/webperformance/basics/)
* [MSDN - performanceTiming Object](http://msdn.microsoft.com/en-us/library/ff975075)
* [My description of performance.timing properties based on all of the above](info.html)