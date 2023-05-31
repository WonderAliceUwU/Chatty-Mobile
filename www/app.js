
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova is ready, you can now use Cordova APIs
  // Connect to the WebSocket server
  window.addEventListener('keyboardWillShow', onKeyboardShow);
  window.addEventListener('keyboardWillHide', onKeyboardHide);


  // Obtain a reference to the Socket.IO plugin
  var socket = io.connect('http://' + localStorage.getItem('server'), {
    query: {
      username: localStorage.getItem('username')
    }
  });

  // Listen for incoming messages
  socket.on('message', function(data) {
    // Process the incoming message based on the location
    var location = window.location.href;
    var lastIndex = location.lastIndexOf('html');
    location = location.slice(lastIndex - 5, lastIndex - 1);
    if (location === 'chat') {
      // Send the message to the chat page
      cordova.plugins.notification.local.schedule({
        title: 'New Message',
        text: data.text,
        foreground: true
      });
    } else {
      // Send the message to the other page
      cordova.plugins.notification.local.schedule({
        title: 'New Message',
        text: 'You have a new message from ' + data.from,
        foreground: true
      });
    }
    console.log('Received message from ' + data.from + ': ' + data.text);
  });
}

function onKeyboardShow(e) {
  document.getElementById('lobby-body').style.paddingBottom = '0%'
}

// Keyboard hide event handler
function onKeyboardHide() {
  window.scrollTo(0, 0);
  document.getElementById('lobby-body').style.paddingBottom = '28%'
}
