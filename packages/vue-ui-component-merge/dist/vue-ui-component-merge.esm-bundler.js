import { VueUI } from '@mikefeng110808/vue-ui';
import { Prop, Watch, Component, Vue } from 'vue-property-decorator';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let NormalVue = class NormalVue extends Vue {
    constructor() {
        super(...arguments);
        this.template = "<div></div>";
    }
    mounted() {
        if (this.target.lifeCycle) {
            this.target.lifeCycle.mounted();
        }
        this.resetProps();
        this.template = this.target.renderTemplate;
    }
    resetProps(props = this.target.props) {
    }
    resetRenderTemplate(renderTemplate = this.target.renderTemplate) {
        if (this.needRender) {
            if (renderTemplate) {
                this.template = renderTemplate || '';
            }
            else {
                this.template = '';
            }
        }
    }
    render(h) {
        return Vue.compile(this.template).render.apply(this, h);
    }
    watchTab(val) {
        this.resetProps(val);
    }
    watchRenderTemplate(val) {
        this.resetRenderTemplate(val);
    }
};
__decorate([
    Prop()
], NormalVue.prototype, "target", void 0);
__decorate([
    Prop()
], NormalVue.prototype, "needRender", void 0);
__decorate([
    Watch('target.props')
], NormalVue.prototype, "watchTab", null);
__decorate([
    Watch('target.renderTemplate')
], NormalVue.prototype, "watchRenderTemplate", null);
NormalVue = __decorate([
    Component
], NormalVue);
var NormalVue$1 = NormalVue;

let DoubleTitleComponent = class DoubleTitleComponent extends NormalVue$1 {
    constructor() {
        super(...arguments);
        this.title1 = '';
        this.title2 = '';
        this.template = "";
    }
    resetProps(props = this.target.props) {
        this.title1 = props.title1;
        this.title2 = props.title2;
    }
};
DoubleTitleComponent = __decorate([
    Component({ template: `` })
], DoubleTitleComponent);
var DoubleTitleComp = DoubleTitleComponent;

class MergeVueUI extends VueUI {
    constructor(params) {
        super(params);
        this.renderTemplate = params.props ? params.props.renderTemplate : '<div></div>';
    }
    staticRender(renderTarget) {
        return this.render(renderTarget, {
            needRender: false
        });
    }
    normalRender(renderTarget) {
        return this.render(renderTarget, {
            needRender: true
        });
    }
}
class DoubleTitle extends MergeVueUI {
    constructor(params) {
        super(params);
        this.renderComponent = DoubleTitleComp;
        this.props.title1 = params.props ? params.props.title1 : '';
        this.props.title2 = params.props ? params.props.title2 : '';
    }
}

let DoubleTitleExample = {
    key: 'example',
    props: {
        title1: '11',
        title2: '1222',
        renderTemplate: "<div class='DoubleTitle'><div>{{title1}}</div><div>{{title2}}</div></div>"
    },
    valid: [],
    type: 'example',
};

class CompMergeInstance {
    constructor() {
        this.view = '';
        this.logic = DoubleTitle;
        this.db = DoubleTitleExample;
        this.getInstance();
    }
    getInstance() {
        this.instance = new this.logic(this.db);
    }
    renderInstance(render) {
        this.renderResult = this.instance ? this.instance.normalRender(render) : render.createElement('div', // 标签名称
        {
            ...render.context,
            props: {
                target: this
            },
        }, [render.vueRoot.$slots.default]);
        return this.renderResult;
    }
    renderStaticInstance(render) {
        console.log('renderStaticInstance');
        this.renderResult = this.instance ? this.instance.staticRender(render) : render.createElement('div', // 标签名称
        {
            ...render.context,
            props: {
                target: this
            }
        }, [render.vueRoot.$slots.default]);
        return this.renderResult;
    }
}

export { CompMergeInstance };
