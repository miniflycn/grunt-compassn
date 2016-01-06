# grunt-compassn

[![Build Status](https://travis-ci.org/miniflycn/grunt-compassn.svg?branch=master)](https://travis-ci.org/miniflycn/grunt-compassn)

> Compile Compass to CSS using compass-node.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-compassn --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-compassn');
```

## Compass task
_Run this task with the `grunt compass` command._

[compass-node](https://github.com/miniflycn/node-compass/) is an open-source framework which is a subset of [Compass](http://compass-style.org/).

### Options

You can use all compass-node options. 

### files

you can see more informations in http://gruntjs.com/configuring-tasks#files

#### includePaths

`includePaths` is an `Array` of path Strings to look for any @imported files. 

#### httpImagesPath

`httpImagesPath` is a `String` that represents the public image path. When using the image-url() function in a stylesheet, this path will be prepended to the path you supply. eg. Given an httpImagesPath of /path/to/images, background-image: image-url('image.png') will compile to background-image: url("/path/to/images/image.png")

#### outputStyle

`outputStyle` is a `String` to determine how the final CSS should be rendered. Its value should be one of `'nested'` or `'compressed'`. [`'expanded'` and `'compact'` are not currently supported by libsass]

#### precision
`precision` is a `Number` that will be used to determine how many digits after the decimal will be allowed. For instance, if you had a decimal number of 1.23456789 and a precision of 5, the result will be 1.23457 in the final CSS.

#### css

`css` is a `String` that represents the public stylesheet path. When using the stylesheet-url() function in a stylesheet, this path will be prepended to the path you supply.

#### font

`font` is a `String` that represents the public font path. When using the font-files() or font-url() function in a stylesheet, this path will be prepended to the path you supply.

#### spriteDist

`spriteDist` is a `String` that represents the image sprites' path.


### Usage Examples

#### Example config

```javascript
grunt.initConfig({
  // Task
  compass: {
    // Task options
    options: {
      precision: 5,
      css: '.temp/<%= yeoman.styles %>',
      font: '<%= yeoman.app %>/<%= yeoman.styles %>/fonts',
      includePaths: ['<%= yeoman.app %>/bower_components'],
      httpImagesPath: '/<%= yeoman.images %>',
    },
    // Target
    dist: {                   
      // Target options
      outputStyle: 'compressed'
      files: {
        '.temp/<%= yeoman.styles %>/style.css': [
          '<%= yeoman.app %>/<%= yeoman.styles %>/main.scss'
        ]
      },
    },
    // Another target
    dev: {                    
      // Another target options
      outputStyle: 'nested',
      files: {
        '.temp/<%= yeoman.styles %>/style.css': [
          '<%= yeoman.app %>/<%= yeoman.styles %>/main.scss'
        ]
      },
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-compass');

grunt.registerTask('default', ['jshint', 'compass']);
```


License
---------
(The MIT License)

Copyright (c) 2013 Daniel Yang <miniflycn@justany.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
