export class Debounce {
    timeout: any;
    constructor () {
        this.timeout = null
    }
    do (handle: (...args: any[]) => void, wait: number) {        
        if(this.timeout !== null) {
            clearTimeout(this.timeout);        
        }  
        this.timeout = setTimeout(() => {
            handle.apply(this, arguments as any)
            this.timeout = null
        }, wait); 
    }
}

export class Throttle {
    timeout: any;
    lastTriggerTime: number | null;
    lastExecutedTime: number | null;
    executeOncePerWait: boolean;
    immediate: boolean;
    constructor () {
        this.timeout = null; 
        this.lastTriggerTime = null
        this.lastExecutedTime = null
        this.executeOncePerWait = false
        this.immediate = false
    }
    do (handle: (...args: any[]) => void, wait: number) {  
        
        !this.executeOncePerWait && (this.lastTriggerTime = Date.now())
        const callNow = this.immediate && !this.timeout
        if(!this.timeout) {
            this.executeOncePerWait && (this.lastExecutedTime = Date.now())
            this.timeout = setTimeout(() => {
                this.later(handle, wait, arguments as any)
            }, wait)
        }
        if (callNow) {
            this.executeOncePerWait && (this.lastExecutedTime = Date.now())
            handle.apply(this, arguments as any)
        }
      
    }
    later (handle: (...args: any[]) => void, wait: number, args:  any[]) {
        const last = Date.now() - ((this.executeOncePerWait ? this.lastExecutedTime : this.lastTriggerTime) || 0)
        if(last < wait && last > 0) {
            setTimeout(() => {
                this.later(handle, wait, args)
            }, wait - last)
        } else {
            if (!this.immediate) {
                this.executeOncePerWait && (this.lastExecutedTime = Date.now())
                handle.apply(this, args)
            }
            this.timeout = null
        }
    }
}
