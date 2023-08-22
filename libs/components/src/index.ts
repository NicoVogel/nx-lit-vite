import '@myorg/types';
export * from './lib/my-component.ts';

console.log(
  `Components running version ${import.meta.env.VERSION} from commit ${
    import.meta.env.COMMIT
  }`,
  {version: import.meta.env.VERSION, commit: import.meta.env.COMMIT}
);
