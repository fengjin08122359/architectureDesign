import { Vue } from "vue-property-decorator";
import { MergeVueUI } from '../render/logic';
export default class NormalVue extends Vue {
    protected target: MergeVueUI;
    needRender: boolean;
    template: string;
    mounted(): void;
    resetProps(props?: import("../../../logic/src/ui/SingleUI").SingleUIProps): void;
    resetRenderTemplate(renderTemplate?: string): void;
    render(h: any): import("vue").VNode;
    watchTab(val: any): void;
    watchRenderTemplate(val: any): void;
}
//# sourceMappingURL=NormalVue.d.ts.map