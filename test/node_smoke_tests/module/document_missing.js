import assert from "node:assert";

import { ensureGlobalNotCreated } from "./lib/ensure_global_not_created.js";
import { getJQueryModuleSpecifier } from "./lib/jquery-module-specifier.js";

const jQueryModuleSpecifier = getJQueryModuleSpecifier();
const { default: jQueryFactory } = await import( jQueryModuleSpecifier );

assert.throws( () => {
	jQueryFactory( {} );
}, /jQuery requires a window with a document/ );

ensureGlobalNotCreated();
