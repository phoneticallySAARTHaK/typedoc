import type { DefaultThemeRenderContext } from "../DefaultThemeRenderContext.js";
import { JSX } from "../../../../utils/index.js";
import type { DeclarationReflection } from "../../../../models/index.js";
import { anchorIcon, anchorLink } from "./anchor-icon.js";
import { classNames } from "../../lib.js";

export const memberSignatures = (context: DefaultThemeRenderContext, props: DeclarationReflection) => (
    <>
        <ul class={classNames({ "tsd-signatures": true }, context.getReflectionClasses(props))}>
            {props.signatures?.map((item) => (
                <li class={context.getReflectionClasses(item)}>
                    <div class="tsd-signature tsd-anchor-link">
                        {anchorLink(context.getAnchor(item))}
                        {context.memberSignatureTitle(item)}
                        {anchorIcon(context, context.getAnchor(item))}
                    </div>
                    <div class="tsd-description">{context.memberSignatureBody(item)}</div>
                </li>
            ))}
        </ul>
    </>
);
