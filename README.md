# Simple staging

Simple module to define current staging level in project.

## Motivation

This is a simple module to parse current staging value from environment variables or your code like this to achieve [software release life cycle](https://en.wikipedia.org/wiki/Software_release_life_cycle) more easily.

## Usage

As default, it would read a staging value from `process.env.STAGE` value and give it as an enum value with some simple flags such as `inhouse` and `real` to check if it is `inhouse` stage.

```typescript
import { envDefault as currentStage } from 'simple-staging';

if (currentStage.isInhouse) {
  // Some codes for inhouse environment.
}

if (currentStage.isReal) {
  // Some codes for real environment.
}
```

### The case of React

In react, it doesn't use `process.env.STAGE` easily because there is no `env` in react environment. But [the useful plugin](https://github.com/tuchk4/react-app-env) captures environment variables that starts with `REACT_APP_` prefix so we can use `process.env.REACT_APP_STAGE` instead of `STAGE`.

### More flags

If you want to define more flags such as `verbose`, you can parse your staging flags with your custom attributes via `$stage` parser.

```typescript
import { $stage, StagingLevel } from 'simple-staging';

const currentStage = $stage(process.env.STAGE, {
  attributes: {
    isVerbose: [StagingLevel.LOCAL, StagingLevel.ALPHA],
  },
});

if (currentStage.isVerbose) {
  // Some codes for verbose environment.
}
```

## Staging level

It has simple 6 levels.

```
enum StagingLevel {
  Test = 'test',
  Local = 'local',
  Alpha = 'alpha',
  Beta = 'beta',
  RC = 'rc',
  Release = 'release',
}
```

## License

MIT
