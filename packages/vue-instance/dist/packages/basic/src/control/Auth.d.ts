/**
 *Judge
 * @param {name} string
 * @param {(res: any[]) => Promise<boolean> | boolean;} fun
 * @interface Judge
 */
interface Judge {
    name: string;
    fun: (res: any[]) => Promise<boolean> | boolean;
}
declare class Auth {
    judgeList: Judge[];
    constructor();
    /**
     *add
     *
     * @param {Judge} judge
     * @memberof Auth
     */
    add(judge: Judge): void;
    /**
     *add
     *
     * @param {string} name
     * @memberof Auth
     */
    remove(name: string): void;
    /**
     *match
     *
     * @param {any[]} res[]
     * @returns {Promise}
     * @memberof Auth
     */
    match(...res: any[]): Promise<unknown>;
}
export { Auth };
//# sourceMappingURL=Auth.d.ts.map