[![build status](https://secure.travis-ci.org/InspiredJW/forAsync.png)](http://travis-ci.org/InspiredJW/forAsync)
## Installation

##### using NPM
    npm install forAsync

##### using git
    git clone git@github.com:InspiredJW/forAsync.git

======================================================

## After Installation

##### import it to your .js file
    var forAsync = require('forAsync');

## Usage

##### Upward Loop Function

    up( 0, 10, 1, function(i) {
        // Do something
    }, function() {
        // callback
    });

##### Downward Loop Function

    down( 10, 1, 2, function(i) {
        // Do something
    }, function() {
        // callback
    });

##### forEach Loop Function
 
    forEach( Array, function(k, v) {
        // Do something
    }, function() {
        // callback
    });