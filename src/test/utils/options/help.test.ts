import { ok } from "assert";

import { Options, ParameterHint, ParameterType } from "../../../lib/utils/index.js";
import { getOptionsHelp } from "../../../lib/utils/options/help.js";

describe("Options - help", () => {
    const options = new Options();
    for (
        const decl of [
            { name: "td-option", help: "help", type: ParameterType.String },
            { name: "td-option2", help: "help" },
            { name: "not displayed", help: "" },
            {
                name: "td",
                help: "help",
                hint: ParameterHint.File,
            },
        ]
    ) {
        options.addDeclaration(decl as never);
    }

    it("Describes TypeDoc options", () => {
        const help = getOptionsHelp(options);
        ok(help.includes("td-option"));
    });

    it("Does not list options without help", () => {
        const help = getOptionsHelp(options);
        ok(!help.includes("not displayed"));
    });
});
