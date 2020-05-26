import websocket from 'websocket'
import { KeepAlive } from './keepAlive';
import { wsIntercept } from '../basic';


export class WebSocketInstance {
  client: any;
  protected keepAlive: KeepAlive;
  url: any;
  constructor () {
    this.client = null
    this.keepAlive = new KeepAlive({ws: this});
  }
  isClosed () {
    return !this.client ||  this.client.readyState  === this.client.CLOSED
  }
  canReconnected () {
    var can = this.client && this.client.readyState == this.client.CLOSED
    if (can) {
      this.start(this.url);
    }
    return can
  }
  endClient () {
    if (this.client && this.client.readyState == this.client.OPEN) {
      this.client.close()
    }
  }
  start (url: any) {
    this.url = url
    this.client = new websocket.w3cwebsocket(url, 'echo-protocol');
    this.client.onerror = function(res: any) {
      console.log('Connection Error');
      wsIntercept.getIntercept({
        client: this.client,
        data: res
      }, 'ws-error')
    };
    this.client.onopen = function(res: any) {
      console.log('WebSocket Client Connected');
      wsIntercept.getIntercept({
        client: this.client,
        data: res
      }, 'ws-open')
      this.keepalive.init()
    };
    
    this.client.onclose = function(res: any) {
      console.log('echo-protocol Client Closed');
      wsIntercept.getIntercept({
        client: this.client,
        data: res
      }, 'ws-close')
    };
    
    this.client.onmessage = function(e: { data: string; }) {
      wsIntercept.getIntercept({
        client: this.client,
        data: e.data
      }, 'ws-message')
      this.keepAlive.setPong()
    };
  }
  setConnectLimit (data: number) {
    this.keepAlive.setConnectLimit(data)
  }
  send (msg: any) {
    this.client && this.client.send(msg);
  }
  end () {
    this.client.close()
  }
}
