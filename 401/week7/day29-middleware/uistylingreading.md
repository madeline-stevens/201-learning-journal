Sass Basics:
http://sass-lang.com/guide


TOPICS:
Preprocessing - sass --watch app/sass:public/stylesheets

Variables -
```
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;
```

Nesting -
```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
```

Partials - To help modularize your css.
```
_partial.scss.
```

Import -
```
// _reset.scss

html,
body,
ul,
ol {
  margin:  0;
  padding: 0;
}
```
```
// base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

Mixins - groups of CSS declarations that you want to reuse throughout your site.
```
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

Inheritance -
```
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

Operators - 
```
.container { width: 100%; }


article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}
```
