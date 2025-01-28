import { storage } from "./utils/storage.js";

type SavedThemeChoice = "os" | "light" | "dark";

export function initTheme(choices: HTMLSelectElement) {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const mqlListener = (e: { matches: boolean }) => {
        const osTheme = e.matches ? "dark" : "light";
        setTheme(osTheme);
    };

    choices.addEventListener("change", () => {
        const themeChoice = choices.value;

        if (themeChoice === "os") {
            mql.addEventListener("change", mqlListener);
            setTheme(mql.matches ? "dark" : "light");
        } else {
            setTheme(themeChoice as "dark" | "light");
            mql.removeEventListener("change", mqlListener);
        }

        storage.setItem("tsd-theme", themeChoice);
    });

    const savedTheme = storage.getItem("tsd-theme") || "os";
    choices.value = savedTheme;
    if (savedTheme === "os") {
        mql.addEventListener("change", mqlListener);
    }
}

// Also see:
// - src/lib/output/themes/defaults/layouts/default.tsx
// - src/lib/utils/highlighter.tsx
function setTheme(theme: Exclude<SavedThemeChoice, "os">) {
    document.documentElement.dataset.theme = theme;
}
