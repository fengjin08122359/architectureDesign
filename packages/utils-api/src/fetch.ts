import 'isomorphic-fetch';

export class Request {
    header: {};
    needEncode: boolean;
    loadingInstance: null;
    constructor () {
        this.header = {}
        this.needEncode = false
        this.loadingInstance = null
    }
    fetch({url='', method = 'GET', params={}, headers={}, backError = 'oneString', signal ={}}) {
        let options = { method, headers, signal };
        let data = this.changeUrl(options, url, params)
        return fetch(data.url, data.options).then((res) => {
            return this.solveFetch(res, backError)
        });
    }
    solveFetch(res: Response, backError: string) {
        if (!res.ok) {
            if (backError === 'oneString') {
                return res.json().then((e) => {
                  return Promise.reject({ code: e.Code, message: e.Message });
                });
            } else {
                return res.json().then((e) => Promise.reject({ message: e.message }));
            }
        }
        const contentType = res.headers.get('content-type') || '';
        //对返回体进行处理
        if (/json/.test(contentType)) {
        return res.json();
        }
        if (/text/.test(contentType)) {
        return res.text();
        }
        if (/image\/png/.test(contentType)) {
        return res.blob().then((blob) => URL.createObjectURL(blob));
        }
        return null;
    }
    changeUrl (options: any, url: string, params: any) {
        if (options.method === 'GET') {
            const queryString = `${Object.keys(params)
          .map((k) => [k, params[k]].map(encodeURIComponent).join('='))
          .join('&')}`;
            if (this.needEncode) {
                url += '?' + encodeURIComponent(params);
            } else {
                url = url + '?' + queryString;
            }
        } else if (options.method === 'POST' || options.method === 'PUT' || options.method === 'DELETE') {
            if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
                options.body = `${Object.keys(params)
            .map((k) => [k, params[k]].join('='))
            .join('&')}`;
            } else if (options.headers['Content-Type'] === 'multipart/form-data') {
                delete options.headers['Content-Type'];
                const formData = new FormData();
                Object.keys(params).forEach((key) => formData.append(key, params[key]));
                options.body = formData;
            } else {
                options.body = JSON.stringify(params);
            }
        }
        return { options, url }
    }
}
