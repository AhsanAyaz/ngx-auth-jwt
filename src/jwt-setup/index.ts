import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  schematic
} from "@angular-devkit/schematics";

import { setUpOptions } from "../utils/setup-options";
import { dasherize } from "@angular-devkit/core/src/utils/strings";

/**
 * @author Ahsan Ayaz
 * @desc Generates the appropriate files. This schematic is meant for the overall setup
 * considering that the developer doesn't have the guard, service e.t.c.
 */
export function jwtSetup(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.log("info" ,'runing jwt setup');
    options = setUpOptions(options);

    const rule = chain([
      schematic('service', options),
      (tree: Tree) => {
        options.authService = options.name;
        options.authServicePath = `${dasherize(options.authService)}.service`;
        return tree;
      },
      schematic('interceptor', options),
      schematic('guard', options)
    ]);
    return rule(tree, _context);
  };
}
