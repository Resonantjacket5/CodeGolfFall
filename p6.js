var req = require("request");
req({
  uri:"https://en.wikipedia.org/wiki/List_of_World_Series_champions",
}, (e,r,b)=>{
  console.log(b);
});
