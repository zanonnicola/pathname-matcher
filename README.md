# pathname-matcher

Match a given path name against a URL

## :package: Installation

```bash
npm install pathname-matcher --save
```

## :rocket: Load

```js
// using es modules
import pathnameMatcher from 'pathname-matcher'

// common.js
const pathnameMatcher = require('pathname-matcher')

// AMD

```

Or use script tags and globals.

```html
<script src="https://unpkg.com/pathnameMatcher"></script>
```

And then grab it off the global like so:

```js
const isPath = pathnameMatcher
```

## :bulb: Usage

Let's assume you want to run a function if a user navigate to a specific path

```javascript
if (pathnameMatcher(document.location.pathname, 'search')) {
	console.log('Hello!!');
}
```

> You can provide any path or url as long as it is provided as a string

## API

#### `pathnameMatcher(URL: **String**, pathname: **String**)` [required]

Returns `true` if pathname matches the given URL (no trailing slash)

OR `false` when no match.

## Legal

Released under MIT license.