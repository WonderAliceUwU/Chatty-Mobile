document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova is ready, you can now use Cordova APIs
  // Connect to the WebSocket server
  var socket = new WebSocket('http://'+localStorage.getItem('server'));

  // WebSocket event handlers
  socket.onopen = function() {
    console.log('WebSocket connection established');
  };

  socket.onmessage = function(event) {
    console.log('Received message:', event.data);
    // Handle the received message here
  };

  socket.onclose = function(event) {
    console.log('WebSocket connection closed:', event.code, event.reason);
  };

  socket.onerror = function(error) {
    console.error('WebSocket error:', error);
  };
}
