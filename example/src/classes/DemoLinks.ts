/**
 * Links example
 */
export class DemoLinks {
    /**
     * {@link T} (#templatet) link to template
     * https://github.com/TypeStrong/typedoc/blob/27597d39c85c82e38082102999de5c24d6a6f2dc/src/lib/output/themes/default/partials/typeParameters.tsx#L14-L33
     */
    template<T>(arg: T) {
        return arg;
    }

    properties = {
        /**
         * Docs here to make it render, not currently assigned a URL by the default router {@link callable} (#properties).
         * https://github.com/TypeStrong/typedoc/blob/beta/src/lib/output/themes/default/partials/typeDetails.tsx#L223
         */
        callable() {},

        /**
         * Same here {@link prop} (#properties)
         * https://github.com/TypeStrong/typedoc/blob/beta/src/lib/output/themes/default/partials/typeDetails.tsx#L253
         */
        prop: "",

        /**
         * Same thing here {@link bar:getter} (#properties)
         * https://github.com/TypeStrong/typedoc/blob/beta/src/lib/output/themes/default/partials/typeDetails.tsx#L279
         */
        get bar() {
            return "";
        },

        /**
         * And here {@link bar:setter} (#properties)
         * https://github.com/TypeStrong/typedoc/blob/beta/src/lib/output/themes/default/partials/typeDetails.tsx#L293
         */
        set bar(value: string) {
            const t = value;
            console.log(t);
        },
    };
}
