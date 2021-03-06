import {
  Rule,
  SchematicContext,
  Tree,
  mergeWith,
  url,
  chain,
  template,
  branchAndMerge,
  apply,
  move
} from "@angular-devkit/schematics";
import { dasherize, classify } from "@angular-devkit/core/src/utils/strings";
import { GuardOptions } from "./guard-options";
import { setUpOptions } from "../utils/setup-options";

const stringUtils = { dasherize, classify };

export function guard(options: GuardOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.log("info", 'generating guard');
    options = setUpOptions(options);
    const templateSource = apply(url('./files'), [
      template({
        ...stringUtils,
        ...options
      }),
      move(options.sourceDir)
    ]);

    const rule = chain([
      branchAndMerge(chain([
        mergeWith(templateSource)
      ]))
    ]);
    return rule(tree, _context);
  };
}
