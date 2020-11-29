import NotifHelper from './notif-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log(message.data);
    NotifHelper.sendNotification({
      title: 'Notif from WebSocket',
      options: {
        body: message.data,
        icon: 'images/icon/android-icon-192x192-dunplab-manifest-21129.png',
        vibrate: [200, 100, 200],
      },
    });
  },
};

export default WebSocketInitiator;
