var app = require('appjs').init();

app.get('/',function(req,res,next){
  res.send(200,"Hello World!");
});

var window = app.createWindow("http://appjs/", {
  width: 640,
  height: 460,
  x: -1, // remove x and y if you want to put window at center, -1 means the same
  y: -1, // remove x and y if you want to put window at center, -1 means the same
  autoResize: false, // set to true if you want to change screen size dynamically using html elements
  resizable: false, // prevent users from changing screen width or height
  showChrome: true, // show border and title bar
  opacity: 1, // you can set opacity of window.
  fullscreen: false, // we don't need fullscreen window
  showResizeGrip: false, // resize grip is an annoying triangle at the right bottom corner of window
  disableSecurity: true, // allow cross origin requests
});

window.on("create",function(){
  console.log("Window Created");
  // Make window visible
  this.show();
  setTimeout(function() {
      this.setMinimize(true);
  }, 1000);
});

window.on("ready",function(){
  console.log("Page loaded.");
});

window.on('minimize',function(){
  console.log("minimized");
});

window.on('close',function(){
  console.log("closed");
});
