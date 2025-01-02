import type { Reflection } from "../../../../models/index.js";
import { JSX } from "../../../../utils/index.js";
import type { PageEvent } from "../../../events.js";
import { getDisplayName } from "../../lib.js";
import type { DefaultThemeRenderContext } from "../DefaultThemeRenderContext.js";

export const toolbar = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => (
    <header class="tsd-page-toolbar">
        <div class="tsd-toolbar-contents container">
            <a href={context.options.getValue("titleLink") || context.relativeURL("index.html")} id="tsd-toolbar-title">
                {getDisplayName(props.project)}
            </a>

            <div id="tsd-toolbar-links">
                {Object.entries(context.options.getValue("navigationLinks")).map(([label, url]) => (
                    <a href={url}>{label}</a>
                ))}
            </div>

            {/* <ul class="results"> 
                <li class="state loading">{context.i18n.theme_preparing_search_index()}</li>
                <li class="state failure">{context.i18n.theme_search_index_not_available()}</li>
            </ul> */}

            <button id="tsd-search-trigger" class="tsd-widget" aria-label={context.i18n.theme_search()}>
                {context.icons.search()}
            </button>

            <button
                id="tsd-toolbar-menu-trigger"
                class="tsd-widget menu"
                data-toggle="menu"
                aria-label={context.i18n.theme_menu()}
            >
                {context.icons.menu()}
            </button>
        </div>
    </header>
);
