
# Yume

Yume is a very simple wrapper for HTML5 video.
![Yume default style.](https://raw.githubusercontent.com/jtpox/Yume/main/examples/screenshot.png)
  

  

# Quick Start

  

Include the essential files for Yume.

```

<link href="default.min.css" rel="stylesheet" />

<script src="yume.js"></script>

```

  

Use the video HTML tag with a unique attribute to call on Yume.

```

<video data-type="yume">

	<source src="video.mp4" type="video/mp4" />

</video>

```

  

# Extending Yume

  

### Adding Controls

  

Adding features to the control bar for Yume is easy

  

```

/*

* @videoContext: The <video> dom.

* @wrapperContext: The generated container dom that @videoContext is in.

*/

function newControl(videoContext, wrapperContext) {

	const content = document.createElement('button');

	content.setAttribute('class', 'timeContainer');

	content.innerHTML = 'Hello World!';

	return content; // Has to return an element!

}

  

Yume.registerControl(newControl); // Yume is a global variable.

```

  

  

### Adding Modules

  

Adding features that are not on the control bar.

```

/*

* @videoContext: The <video> dom.

* @wrapperContext: The generated container dom that @videoContext and @controlContext is in.

* @controlContext: The generated control bar dom.

*

* Does not have to return anything.

*/

function newModule(videoContext, wrapperContext, controlContext) {

	console.log(`Video duration: ${videoContext.duration}`);

}

  

Yume.registerModule(newModule);

```