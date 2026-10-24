import { describe, it, expect } from 'vitest';
import packageJson from '../package.json';

describe('Stage 00 Genesis Scaffold Invariants', () => {
  it('asserts valid package identity and version v0.0.0.2', () => {
    expect(packageJson.name).toBe('shellguard-extension');
    expect(packageJson.version).toBe('0.0.0.2');
    expect(packageJson.type).toBe('module');
  });

  it('asserts required pre-flight scripts are defined', () => {
    expect(packageJson.scripts.lint).toBeDefined();
    expect(packageJson.scripts.typecheck).toBeDefined();
    expect(packageJson.scripts['audit:docs']).toBeDefined();
    expect(packageJson.scripts.build).toBeDefined();
    expect(packageJson.scripts.zip).toBeDefined();
  });
});
