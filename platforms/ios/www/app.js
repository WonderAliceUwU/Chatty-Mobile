document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova is ready, you can now use Cordova APIs
  // Connect to the WebSocket server
  window.addEventListener('keyboardWillShow', onKeyboardShow);
  window.addEventListener('keyboardWillHide', onKeyboardHide);

    const socket = io('http://' + localStorage.getItem('server'), {
      query: { username: localStorage.getItem('username') }
    });


  // Listen for incoming messages
  socket.on('message', ({ from, text, filename }) => {
    let location = window.location.href;
    let lastIndex = location.lastIndexOf('html')
    location = location.slice(lastIndex - 5, lastIndex -1)
    if (location === 'chat'){
      let today = new Date
      let time = today.getHours() + ":" + today.getMinutes()
      let friend = document.getElementById('visitedName').textContent
      if (friend === from) {
        if (filename !== undefined) {
          applyIncomingMessage(text, time, filename)

        } else {
          applyIncomingMessage(text, time, null)
        }
        fetch(`http://` + localStorage.getItem('server') + `/read-friend?token=${localStorage.getItem('token')}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({friend}),
        });
      }
    }
    else{
      //todo
    }
    console.log(`Received message from ${from}: ${text}`);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
    // Perform any necessary actions when disconnected
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
