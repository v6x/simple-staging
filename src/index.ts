import { $enum } from 'ts-enum-util';

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
  RC = 'rc',
  Release = 'release',
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
    StagingLevel.RC,
    StagingLevel.Release,
  ],
  debug: [
    StagingLevel.Test,
    StagingLevel.Local,
    StagingLevel.Alpha,
    StagingLevel.Beta,
    StagingLevel.Demo1,
    StagingLevel.Demo2,
    StagingLevel.Demo3,
    StagingLevel.Experimental,
    StagingLevel.UserTest,
  ],
  demo: [StagingLevel.Demo1, StagingLevel.Demo2, StagingLevel.Demo3],
};

const envOrDefaultLevels = (envName: string, defaultLevels: StagingLevel[]) =>
  process.env[envName] ? asLevels(process.env[envName]!) : defaultLevels;

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
