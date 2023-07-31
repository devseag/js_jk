'use strict';

// yourScript.js
// import { tns } from "./node_modules/tiny-slider/src/tiny-slider"
import { tns } from "tiny-slider";

tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });