declare global {
    interface ImportMeta {
        env?: Record<string, string>;
    }
}
export declare enum StagingLevel {
    Test = "test",
    Local = "local",
    Alpha = "alpha",
    Experimental = "experimental",
    UserTest = "usertest",
    Beta = "beta",
    Demo1 = "demo1",
    Demo2 = "demo2",
    Demo3 = "demo3",
    Demo4 = "demo4",
    Demo5 = "demo5",
    Demo6 = "demo6",
    Demo7 = "demo7",
    Demo8 = "demo8",
    Demo9 = "demo9",
    Demo10 = "demo10",
    Demo11 = "demo11",
    Demo12 = "demo12",
    Demo13 = "demo13",
    Demo14 = "demo14",
    Demo15 = "demo15",
    Demo16 = "demo16",
    Demo17 = "demo17",
    Demo18 = "demo18",
    Demo19 = "demo19",
    Demo20 = "demo20",
    Demo21 = "demo21",
    Demo22 = "demo22",
    Demo23 = "demo23",
    Demo24 = "demo24",
    Demo25 = "demo25",
    Demo26 = "demo26",
    Demo27 = "demo27",
    Demo28 = "demo28",
    Demo29 = "demo29",
    Demo30 = "demo30",
    RC = "rc",
    Release = "release",
    Hotfix = "hotfix",
    vStory_Dev = "vstory-dev",
    vStory_Dev2 = "vstory-dev2",
    vStory_Dev3 = "vstory-dev3",
    vStory_Prod = "vstory-prod"
}
export interface StagingAttributes {
    [each: string]: StagingLevel[];
}
export interface StagingOptions<T extends StagingAttributes> {
    value?: string;
    attributes?: T;
}
export interface StagingStatus<T> {
    level: StagingLevel;
    flags: T;
}
export declare const $stage: <T extends StagingAttributes>(options?: StagingOptions<T>, defaultLevel?: StagingLevel) => StagingStatus<{ [P in keyof T]: boolean; }>;
/**
 * Prepare StagingStatus from environment variables
 * such as STAGE, STAGE_INHOUSE_LEVELS, STAGE_REAL_LEVELS and STAGE_DEBUG_LEVELS.
 */
export declare const envDefault: StagingStatus<{
    inhouse: boolean;
    real: boolean;
    debug: boolean;
    demo: boolean;
}>;
/**
 * Prepare StagingStatus from react-prefix environment variables
 * such as REACT_APP_STAGE, REACT_APP_STAGE_INHOUSE_LEVELS,
 * REACT_APP_STAGE_REAL_LEVELS and REACT_APP_STAGE_DEBUG_LEVELS.
 */
export declare const reactDefault: StagingStatus<{
    inhouse: boolean;
    real: boolean;
    debug: boolean;
    demo: boolean;
}>;
/**
 * Prepare StagingStatus from vite-prefix environment variables
 * such as VITE_APP_STAGE, VITE_APP_STAGE_INHOUSE_LEVELS,
 * VITE_APP_STAGE_REAL_LEVELS and VITE_APP_STAGE_DEBUG_LEVELS.
 */
export declare const viteDefault: StagingStatus<{
    inhouse: boolean;
    real: boolean;
    debug: boolean;
    demo: boolean;
}>;
/**
 * Prepare StagingStatus from electron-webpack-prefix environment variables
 * such as ELECTRON_WEBPACK_APP_STAGE, ELECTRON_WEBPACK_APP_STAGE_INHOUSE_LEVELS,
 * ELECTRON_WEBPACK_APP_STAGE_REAL_LEVELS and ELECTRON_WEBPACK_APP_STAGE_DEBUG_LEVELS.
 */
export declare const electronWebpackDefault: StagingStatus<{
    inhouse: boolean;
    real: boolean;
    debug: boolean;
    demo: boolean;
}>;
