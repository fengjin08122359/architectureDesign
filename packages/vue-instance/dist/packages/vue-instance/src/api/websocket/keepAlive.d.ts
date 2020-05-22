import { WebSocketInstance } from '.';
export declare class KeepAlive {
    pong: number;
    checkTime: number;
    reconnectTime: number;
    connnectNumber: number;
    connectLimit: number;
    keepAliveModel: boolean;
    interval: any;
    ws: WebSocketInstance;
    constructor(opt: {
        ws: WebSocketInstance;
    });
    init(): void;
    setConnectLimit(data: number): void;
    setPong(): void;
    check(): void;
    endTimeout(): void;
    end(): void;
    reconnect(): boolean;
}
//# sourceMappingURL=keepAlive.d.ts.map