/**
 * @fileoverview Validates M-Files coding conventions
 * @author Mikko Rantanen
 */
"use strict";

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

var requireIndex = require("requireindex");

// -----------------------------------------------------------------------------
// Plugin Definition
// -----------------------------------------------------------------------------

module.exports = {
    // import all rules in lib/rules
    rules: requireIndex(__dirname + "/rules"),
    // allow users to extend the recommended configurations
    configs: {
        recommended: {
            plugins: ["ctxss"],
            rules: {
                "ctxss/no-mixed-html": "error",
                "ctxss/no-location-href-assign": "error",
            },
        },
    },
};
