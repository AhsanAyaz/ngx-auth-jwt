# Schematics for including JWT Authentication to Angular Apps

### Testing

To test locally, install `@angular-devkit/schematics` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Generate the whole jwt auth setup

To just see what the schematic does, run the command below from project root
```bash
schematics .:jwt-setup
```
This would generate the following files

```bash
CREATE /playground/name.service.ts (386 bytes)
CREATE /playground/name.interceptor.ts (1085 bytes)
CREATE /playground/name.guard.ts (801 bytes)
```
#### Parameters
| Name | Description | Default |
|---|---|---|
**name** | Name of the interceptor, guard, service |  'name'
**sourceDir** | path to `src` folder where the files would be generated |  'playground' (for testing only, will change it to `src` for angular apps)

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 