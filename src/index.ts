import { $enum } from 'ts-enum-util';

declare global {
  interface ImportMeta {
    env?: Record<string, string>;
  }
}

export enum StagingLevel {
  Test = 'test',
  Local = 'local',
  Alpha = 'alpha',
  Experimental = 'experimental',
  UserTest = 'usertest',
  Beta = 'beta',
  Demo1 = 'demo1',
  Demo2 = 'demo2',
  Demo3 = 'demo3',
  Demo4 = 'demo4',
  Demo5 = 'demo5',
  Demo6 = 'demo6',
  Demo7 = 'demo7',
  Demo8 = 'demo8',
  Demo9 = 'demo9',
  Demo10 = 'demo10',
  Demo11 = 'demo11',
  Demo12 = 'demo12',
  Demo13 = 'demo13',
  Demo14 = 'demo14',
  Demo15 = 'demo15',
  Demo16 = 'demo16',
  Demo17 = 'demo17',
  Demo18 = 'demo18',
  Demo19 = 'demo19',
  Demo20 = 'demo20',
  Demo21 = 'demo21',
  Demo22 = 'demo22',
  Demo23 = 'demo23',
  Demo24 = 'demo24',
  Demo25 = 'demo25',
  Demo26 = 'demo26',
  Demo27 = 'demo27',
  Demo28 = 'demo28',
  Demo29 = 'demo29',
  Demo30 = 'demo30',
  RC = 'rc',
  Release = 'release',
  Hotfix = 'hotfix',
}

const stagingLevelEnum = $enum(StagingLevel);

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

export const $stage = <T extends StagingAttributes>(
  options?: StagingOptions<T>,
  defaultLevel: StagingLevel = StagingLevel.Local,
): StagingStatus<{ [P in keyof T]: boolean }> => {
  type Flags = { [P in keyof T]: boolean };
  if (!options) {
    return { level: defaultLevel, flags: ({} as any) as Flags };
  }

  const level = stagingLevelEnum.asValueOrDefault(options.value, defaultLevel);
  const flags = options.attributes
    ? Object.entries(options.attributes).reduce(
        (map, [key, levels]) => ({ ...map, [key]: levels.includes(level) }),
        {},
      )
    : undefined;
  return {
    level,
    flags: flags as Flags,
  };
};

const asLevels = (input: string) =>
  input
    .split(',')
    .map(each => stagingLevelEnum.getValueOrDefault(each.trim())!)
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
    StagingLevel.Experimental,
    StagingLevel.UserTest,
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
};

const envOrDefaultLevels = (envName: string, defaultLevels: StagingLevel[]) =>
  process.env[envName]
    ? asLevels(process.env[envName]!)
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
    inhouse: envOrDefaultLevels(
      'STAGE_INHOUSE_LEVELS',
      defaultAttributes.inhouse,
    ),
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
    inhouse: envOrDefaultLevels(
      'REACT_APP_STAGE_INHOUSE_LEVELS',
      defaultAttributes.inhouse,
    ),
    real: envOrDefaultLevels(
      'REACT_APP_STAGE_REAL_LEVELS',
      defaultAttributes.real,
    ),
    debug: envOrDefaultLevels(
      'REACT_APP_STAGE_DEBUG_LEVELS',
      defaultAttributes.debug,
    ),
    demo: envOrDefaultLevels(
      'REACT_APP_STAGE_DEMO_LEVELS',
      defaultAttributes.demo,
    ),
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
    inhouse: envOrDefaultLevels(
      'VITE_APP_STAGE_INHOUSE_LEVELS',
      defaultAttributes.inhouse,
    ),
    real: envOrDefaultLevels(
      'VITE_APP_STAGE_REAL_LEVELS',
      defaultAttributes.real,
    ),
    debug: envOrDefaultLevels(
      'VITE_APP_STAGE_DEBUG_LEVELS',
      defaultAttributes.debug,
    ),
    demo: envOrDefaultLevels(
      'VITE_APP_STAGE_DEMO_LEVELS',
      defaultAttributes.demo,
    ),
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
    inhouse: envOrDefaultLevels(
      'ELECTRON_WEBPACK_APP_STAGE_INHOUSE_LEVELS',
      defaultAttributes.inhouse,
    ),
    real: envOrDefaultLevels(
      'ELECTRON_WEBPACK_APP_STAGE_REAL_LEVELS',
      defaultAttributes.real,
    ),
    debug: envOrDefaultLevels(
      'ELECTRON_WEBPACK_APP_STAGE_DEBUG_LEVELS',
      defaultAttributes.debug,
    ),
    demo: envOrDefaultLevels(
      'ELECTRON_WEBPACK_APP_STAGE_DEMO_LEVELS',
      defaultAttributes.demo,
    ),
  },
});
