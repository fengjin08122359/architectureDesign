import { KeepAlive } from './keepAlive';
export declare class WebSocketInstance {
    client: any;
    protected keepAlive: KeepAlive;
    url: any;
    constructor();
    isClosed(): boolean;
    canReconnected(): boolean;
    endClient(): void;
    start(url: any): void;
    setConnectLimit(data: number): void;
    send(msg: any): void;
    end(): void;
}
//# sourceMappingURL=index.d.ts.map