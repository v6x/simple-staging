import { $enum } from 'ts-enum-util';
export var StagingLevel;
(function (StagingLevel) {
    StagingLevel["Test"] = "test";
    StagingLevel["Local"] = "local";
    StagingLevel["Alpha"] = "alpha";
    StagingLevel["Experimental"] = "experimental";
    StagingLevel["UserTest"] = "usertest";
    StagingLevel["Beta"] = "beta";
    StagingLevel["Demo1"] = "demo1";
    StagingLevel["Demo2"] = "demo2";
    StagingLevel["Demo3"] = "demo3";
    StagingLevel["Demo4"] = "demo4";
    StagingLevel["Demo5"] = "demo5";
    StagingLevel["Demo6"] = "demo6";
    StagingLevel["Demo7"] = "demo7";
    StagingLevel["Demo8"] = "demo8";
    StagingLevel["Demo9"] = "demo9";
    StagingLevel["Demo10"] = "demo10";
    StagingLevel["Demo11"] = "demo11";
    StagingLevel["Demo12"] = "demo12";
    StagingLevel["Demo13"] = "demo13";
    StagingLevel["Demo14"] = "demo14";
    StagingLevel["Demo15"] = "demo15";
    StagingLevel["Demo16"] = "demo16";
    StagingLevel["Demo17"] = "demo17";
    StagingLevel["Demo18"] = "demo18";
    StagingLevel["Demo19"] = "demo19";
    StagingLevel["Demo20"] = "demo20";
    StagingLevel["Demo21"] = "demo21";
    StagingLevel["Demo22"] = "demo22";
    StagingLevel["Demo23"] = "demo23";
    StagingLevel["Demo24"] = "demo24";
    StagingLevel["Demo25"] = "demo25";
    StagingLevel["Demo26"] = "demo26";
    StagingLevel["Demo27"] = "demo27";
    StagingLevel["Demo28"] = "demo28";
    StagingLevel["Demo29"] = "demo29";
    StagingLevel["Demo30"] = "demo30";
    StagingLevel["RC"] = "rc";
    StagingLevel["Release"] = "release";
    StagingLevel["Hotfix"] = "hotfix";
    StagingLevel["vStory_Dev"] = "vstory-dev";
    StagingLevel["vStory_Dev2"] = "vstory-dev2";
    StagingLevel["vStory_Dev3"] = "vstory-dev3";
    StagingLevel["vStory_Prod"] = "vstory-prod";
})(StagingLevel || (StagingLevel = {}));
const stagingLevelEnum = $enum(StagingLevel);
export const $stage = (options, defaultLevel = StagingLevel.Local) => {
    if (!options) {
        return { level: defaultLevel, flags: {} };
    }
    const level = stagingLevelEnum.asValueOrDefault(options.value, defaultLevel);
    const flags = options.attributes
        ? Object.entries(options.attributes).reduce((map, [key, levels]) => ({ ...map, [key]: levels.includes(level) }), {})
        : undefined;
    return {
        level,
        flags: flags,
    };
};
const asLevels = (input) => input
    .split(',')
    .map(each => stagingLevelEnum.getValueOrDefault(each.trim()))
    .filter(each => each);
const defaultAttributes = {
    inhouse: [StagingLevel.Test, StagingLevel.Local, StagingLevel.Alpha],
    real: [
        StagingLevel.Experimental,
        StagingLevel.UserTest,
        StagingLevel.Beta,
        StagingLevel.Demo1,
        StagingLevel.Demo2,
        StagingLevel.Demo3,
        StagingLevel.Demo4,
        StagingLevel.Demo5,
        StagingLevel.Demo6,
        StagingLevel.Demo7,
        StagingLevel.Demo8,
        StagingLevel.Demo9,
        StagingLevel.Demo10,
        StagingLevel.Demo11,
        StagingLevel.Demo12,
        StagingLevel.Demo13,
        StagingLevel.Demo14,
        StagingLevel.Demo15,
        StagingLevel.Demo16,
        StagingLevel.Demo17,
        StagingLevel.Demo18,
        StagingLevel.Demo19,
        StagingLevel.Demo20,
        StagingLevel.Demo21,
        StagingLevel.Demo22,
        StagingLevel.Demo23,
        StagingLevel.Demo24,
        StagingLevel.Demo25,
        StagingLevel.Demo26,
        StagingLevel.Demo27,
        StagingLevel.Demo28,
        StagingLevel.Demo29,
        StagingLevel.Demo30,
        StagingLevel.RC,
        StagingLevel.Release,
        StagingLevel.Hotfix,
        StagingLevel.vStory_Dev,
        StagingLevel.vStory_Dev2,
        StagingLevel.vStory_Dev3,
        StagingLevel.vStory_Prod,
    ],
    debug: [
        StagingLevel.Test,
        StagingLevel.Local,
        StagingLevel.Alpha,
        StagingLevel.Beta,
        StagingLevel.Demo1,
        StagingLevel.Demo2,
        StagingLevel.Demo3,
        StagingLevel.Demo4,
        StagingLevel.Demo5,
        StagingLevel.Demo6,
        StagingLevel.Demo7,
        StagingLevel.Demo8,
        StagingLevel.Demo9,
        StagingLevel.Demo10,
        StagingLevel.Demo11,
        StagingLevel.Demo12,
        StagingLevel.Demo13,
        StagingLevel.Demo14,
        StagingLevel.Demo15,
        StagingLevel.Demo16,
        StagingLevel.Demo17,
        StagingLevel.Demo18,
        StagingLevel.Demo19,
        StagingLevel.Demo20,
        StagingLevel.Demo21,
        StagingLevel.Demo22,
        StagingLevel.Demo23,
        StagingLevel.Demo24,
        StagingLevel.Demo25,
        StagingLevel.Demo26,
        StagingLevel.Demo27,
        StagingLevel.Demo28,
        StagingLevel.Demo29,
        StagingLevel.Demo30,
        StagingLevel.vStory_Dev,
        StagingLevel.vStory_Dev2,
        StagingLevel.vStory_Dev3,
    ],
    demo: [
        StagingLevel.Demo1,
        StagingLevel.Demo2,
        StagingLevel.Demo3,
        StagingLevel.Demo4,
        StagingLevel.Demo5,
        StagingLevel.Demo6,
        StagingLevel.Demo7,
        StagingLevel.Demo8,
        StagingLevel.Demo9,
        StagingLevel.Demo10,
        StagingLevel.Demo11,
        StagingLevel.Demo12,
        StagingLevel.Demo13,
        StagingLevel.Demo14,
        StagingLevel.Demo15,
        StagingLevel.Demo16,
        StagingLevel.Demo17,
        StagingLevel.Demo18,
        StagingLevel.Demo19,
        StagingLevel.Demo20,
        StagingLevel.Demo21,
        StagingLevel.Demo22,
        StagingLevel.Demo23,
        StagingLevel.Demo24,
        StagingLevel.Demo25,
        StagingLevel.Demo26,
        StagingLevel.Demo27,
        StagingLevel.Demo28,
        StagingLevel.Demo29,
        StagingLevel.Demo30,
    ],
    vStory: [
        StagingLevel.vStory_Dev,
        StagingLevel.vStory_Dev2,
        StagingLevel.vStory_Dev3,
        StagingLevel.vStory_Prod,
    ],
};
const envOrDefaultLevels = (envName, defaultLevels) => process.env[envName]
    ? asLevels(process.env[envName])
    : import.meta.env?.[envName]
        ? asLevels(import.meta.env[envName])
        : defaultLevels;
/**
 * Prepare StagingStatus from environment variables
 * such as STAGE, STAGE_INHOUSE_LEVELS, STAGE_REAL_LEVELS and STAGE_DEBUG_LEVELS.
 */
export const envDefault = $stage({
    value: process.env.STAGE,
    attributes: {
        inhouse: envOrDefaultLevels('STAGE_INHOUSE_LEVELS', defaultAttributes.inhouse),
        real: envOrDefaultLevels('STAGE_REAL_LEVELS', defaultAttributes.real),
        debug: envOrDefaultLevels('STAGE_DEBUG_LEVELS', defaultAttributes.debug),
        demo: envOrDefaultLevels('STAGE_DEMO_LEVELS', defaultAttributes.demo),
    },
});
/**
 * Prepare StagingStatus from react-prefix environment variables
 * such as REACT_APP_STAGE, REACT_APP_STAGE_INHOUSE_LEVELS,
 * REACT_APP_STAGE_REAL_LEVELS and REACT_APP_STAGE_DEBUG_LEVELS.
 */
export const reactDefault = $stage({
    value: process.env.REACT_APP_STAGE,
    attributes: {
        inhouse: envOrDefaultLevels('REACT_APP_STAGE_INHOUSE_LEVELS', defaultAttributes.inhouse),
        real: envOrDefaultLevels('REACT_APP_STAGE_REAL_LEVELS', defaultAttributes.real),
        debug: envOrDefaultLevels('REACT_APP_STAGE_DEBUG_LEVELS', defaultAttributes.debug),
        demo: envOrDefaultLevels('REACT_APP_STAGE_DEMO_LEVELS', defaultAttributes.demo),
    },
});
/**
 * Prepare StagingStatus from vite-prefix environment variables
 * such as VITE_APP_STAGE, VITE_APP_STAGE_INHOUSE_LEVELS,
 * VITE_APP_STAGE_REAL_LEVELS and VITE_APP_STAGE_DEBUG_LEVELS.
 */
export const viteDefault = $stage({
    value: import.meta.env?.VITE_APP_STAGE,
    attributes: {
        inhouse: envOrDefaultLevels('VITE_APP_STAGE_INHOUSE_LEVELS', defaultAttributes.inhouse),
        real: envOrDefaultLevels('VITE_APP_STAGE_REAL_LEVELS', defaultAttributes.real),
        debug: envOrDefaultLevels('VITE_APP_STAGE_DEBUG_LEVELS', defaultAttributes.debug),
        demo: envOrDefaultLevels('VITE_APP_STAGE_DEMO_LEVELS', defaultAttributes.demo),
    },
});
/**
 * Prepare StagingStatus from electron-webpack-prefix environment variables
 * such as ELECTRON_WEBPACK_APP_STAGE, ELECTRON_WEBPACK_APP_STAGE_INHOUSE_LEVELS,
 * ELECTRON_WEBPACK_APP_STAGE_REAL_LEVELS and ELECTRON_WEBPACK_APP_STAGE_DEBUG_LEVELS.
 */
export const electronWebpackDefault = $stage({
    value: process.env.ELECTRON_WEBPACK_APP_STAGE,
    attributes: {
        inhouse: envOrDefaultLevels('ELECTRON_WEBPACK_APP_STAGE_INHOUSE_LEVELS', defaultAttributes.inhouse),
        real: envOrDefaultLevels('ELECTRON_WEBPACK_APP_STAGE_REAL_LEVELS', defaultAttributes.real),
        debug: envOrDefaultLevels('ELECTRON_WEBPACK_APP_STAGE_DEBUG_LEVELS', defaultAttributes.debug),
        demo: envOrDefaultLevels('ELECTRON_WEBPACK_APP_STAGE_DEMO_LEVELS', defaultAttributes.demo),
    },
});
