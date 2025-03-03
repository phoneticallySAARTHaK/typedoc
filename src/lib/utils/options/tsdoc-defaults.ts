// If updating these lists, also update tsdoc.json

export const tsdocBlockTags = [
    "@defaultValue",
    "@deprecated",
    "@example",
    "@param",
    "@privateRemarks",
    "@remarks",
    "@returns",
    "@see",
    "@throws",
    "@typeParam",
] as const;

export const blockTags = [
    ...tsdocBlockTags,
    "@author",
    "@callback",
    "@category",
    "@categoryDescription",
    "@default",
    "@document",
    "@extends",
    "@augments", // Alias for @extends
    "@yields",
    "@group",
    "@groupDescription",
    "@import",
    "@inheritDoc",
    "@jsx",
    "@license",
    "@module",
    "@mergeModuleWith",
    "@prop",
    "@property",
    "@return",
    "@satisfies",
    "@since",
    "@template", // Alias for @typeParam
    "@type",
    "@typedef",
    "@summary",
] as const;

export const tsdocInlineTags = ["@link", "@inheritDoc", "@label"] as const;
export const inlineTags = [
    ...tsdocInlineTags,
    "@linkcode",
    "@linkplain",
    "@include",
    "@includeCode",
] as const;

export const tsdocModifierTags = [
    "@alpha",
    "@beta",
    "@eventProperty",
    "@experimental",
    "@internal",
    "@override",
    "@packageDocumentation",
    "@public",
    "@readonly",
    "@sealed",
    "@virtual",
] as const;

export const modifierTags = [
    ...tsdocModifierTags,
    "@abstract",
    "@class",
    "@enum",
    "@event",
    "@expand",
    "@hidden",
    "@hideCategories",
    "@hideconstructor",
    "@hideGroups",
    "@ignore",
    "@inline",
    "@interface",
    "@namespace",
    "@function",
    "@overload",
    "@private",
    "@protected",
    "@showCategories",
    "@showGroups",
    "@useDeclaredType",
    "@primaryExport",
] as const;
