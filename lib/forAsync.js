/*
  forAsync - True Asynchronous Loop Functions for Node.js

  Copyright (c) 2012 Jeong Woo Chang <inspired.jw@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var up = module.exports.up = function( start, end, step, work, callback ) {
	if( start > end) {
		console.log('Invalid parameters for forAsync!');
		return;
	}
	step = Math.abs( step ); 
	var loop = function(i) {
		if( i > end ) {
			if( typeof callback == 'function' ) {
				process.nextTick(function() {
					callback();
				});
			}
			return;
		}
		work(i);
		process.nextTick(function() {
			loop( i + step );
		});
	};
	loop( start );
};

var down = module.exports.down = function( start, end, step, work, callback ) {
	if( start < end) {
		console.log('Invalid parameters for forAsync!');
		return;
	}
	step = Math.abs( step ); 
	var loop = function(i) {
		if( i < end ) {
			if( typeof callback == 'function' ) {
				process.nextTick(function() {
					callback();
				});
			}
			return;
		}
		work(i);
		process.nextTick(function() {
			loop( i - step );
		});
	};
	loop( start );
};

var forEach = module.exports.forEach = function( object, work, callback ) {
	var keys = Object.keys( object );
	
	up( 0, keys.length - 1, 1, function(i) {
		work( keys[i], object[ keys[ i ] ] );
	}, function() {
		if( typeof callback == 'function' ) {
			process.nextTick(function() {
				callback();
			});
		}
	});
};
