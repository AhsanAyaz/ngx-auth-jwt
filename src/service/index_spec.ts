import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('service should be created', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const config = {
      sourceDir: 'playground/test',
      name: 'auth-jwt'
    }
    const tree = runner.runSchematic('service', config, Tree.empty());

    expect(tree.files).toEqual([
      `/${config.sourceDir}/${config.name}.service.ts`
    ]);
  });
});
