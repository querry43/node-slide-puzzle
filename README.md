Slide Puzzle
============

Tools
-----
* https://code.visualstudio.com/
* https://nodejs.org/en/download/
* https://www.npmjs.com/package/npx
* https://desktop.github.com/

Dev Tools
---------
**Chrome**: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

**Firefox**: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/

References
----------
* https://facebook.github.io/create-react-app/docs/getting-started
* https://code.visualstudio.com/docs/nodejs/reactjs-tutorial

Getting Started
---------------
1. Install tools, update npm if nxp isn't available
2. Create app

```
npx create-react-app my-app
```

3. Start app

```
npm start
```

Writing Some Code
-----------------
Lay out the play area on paper and think about leaf elements vs containers.
Implement these elements as DIVs to create the basic layout without any
functionality.

Generating the board programatically
-------------------------------------
Use an array to specify thge board layout.  Use additional parameters to set
the height and width.

Lets pull in an additional module.

```
npm install --save styled-components
npm install --save babel-plugin-styled-components
```

This will let us specify the styling as properties of the component which lets
us set them programatically.  Move all size constants into App.js and pass them
as properties to the components.  This lets you play around with the board size
and contents in a single place.

If you want, you can use the URL query string to specify these values.

```
npm install --save query-string
```

This module lets you pull out the query string components.  You can then use a
URL like the following to specify board properties:
    http://localhost:3000/?width=4&height=3&tiles=1,2,3,4,5,6,7,8,9,10,11,0