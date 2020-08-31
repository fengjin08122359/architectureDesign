import { GeneratePiece } from "../sdk";
import { Vue } from "vue-property-decorator";
export declare class InstanceSlot extends Vue {
    private instance;
    private Generate;
    private generator;
    generate: GeneratePiece;
    created(): void;
    mounted(): void;
    get value(): any[];
    reset(): void;
    render(createElement: any, context: any): any;
    watchValue(val: any): void;
    watchOpt(val: any, oldVal: any): void;
}
//# sourceMappingURL=InstanceSlot.d.ts.map