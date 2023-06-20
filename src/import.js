//Understanding the differences between import and require.
//in the past, people would use the required function to import functions and code from other files.
//but now we have import and export, allowing you to export code in one file and then import it in another.
//also allows you to only import certain functions from a file or certain variables.

import { capitalizeString } from "./importstringfunction.js";
const cap = capitalizeString("hello!");

console.log(cap);