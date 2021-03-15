# Geothmetic Meandian
![XKCD 2435](https://imgs.xkcd.com/comics/geothmetic_meandian.png)

A package to calculate the geothmetic meandian for you.

## Usage

```js
import {geothmeticMeandian} from "geothmetic-meandian";

console.log(geothmeticMeandian([1, 1, 2, 3, 5])) // 2.089...

// You can also specify the convergence accuracy (default is 0.001):
console.log(geothmeticMeandian([1, 1, 2, 3, 5], 0.000001)) // 2.089058...
```