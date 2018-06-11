import { normalize } from "@angular-devkit/core";
import { dasherize } from "@angular-devkit/core/src/utils/strings";

export function setUpOptions(options: any) {
    options = options || {};
    options.name = options.name ? options.name : 'auth';
    options.authService = options.authService ? options.authService : 'Auth';
    options.authServicePath = options.authServicePath ? normalize(options.authServicePath) : `${dasherize(options.authService)}.service`;
    return options;
}
