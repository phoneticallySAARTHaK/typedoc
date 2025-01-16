/**
 * @module
 *
 * Browsers allow scrolling of page with native dialog, which is a UX issue.
 *
 *
 * @see
 * - https://github.com/whatwg/html/issues/7732
 * - https://github.com/whatwg/html/issues/7732#issuecomment-2437820350
 * - The "[right](https://frontendmasters.com/blog/animating-dialog/#what-about-popover-and-backdrop)" way animate modals
 */

/** Fills the gap that scrollbar occupies. Call when the modal is opened */
function hideScrollbar() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    // Should be computed *before* body overflow is set to hidden
    const width = Math.abs(
        window.innerWidth - document.documentElement.clientWidth,
    );

    document.body.style.overflow = "hidden";

    // Give padding to element to balance the hidden scrollbar width
    document.body.style.paddingRight = `${width}px`;
}

/** Resets style changes made by {@link hideScrollbar} */
function resetScrollbar() {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("padding-right");
}

const CLOSING_CLASS = "closing";

// Could be popover too
type Modal = HTMLDialogElement;

let overlayIdCounter = 0;

/**
 * Adds event listeners to the modal element, for the closing animation.
 * To alleviate issues caused by default browser behavior.
 */
export function setUpModal(
    modal: Modal,
    closingAnimation: string,
    options?: {
        closeOnEsc?: boolean;
        closeOnClick?: boolean;
    },
) {
    overlayIdCounter++;
    modal.dataset.overlayId = `tsd-ovl-${overlayIdCounter}`;

    // Event listener for closing animation
    modal.addEventListener("animationend", (e) => {
        if (e.animationName !== closingAnimation) return;
        modal.classList.remove(CLOSING_CLASS);
        modal.close();
        document.getElementById(modal.dataset.overlayId || "")?.remove();
        resetScrollbar();
    });

    // Override default closing behavior.
    modal.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") {
            return;
        }
        if (options?.closeOnEsc) {
            closeModal(modal);
        }
        e.preventDefault();
    });

    if (options?.closeOnClick) {
        document.addEventListener(
            "click",
            (e) => {
                if (modal.open && !modal.contains(e.target as HTMLElement)) {
                    closeModal(modal);
                }
            },
            true,
        );
    }
}

export function openModal(modal: Modal) {
    if (modal.open) {
        return;
    }
    const overlayId = modal.dataset.overlayId;
    if (overlayId) {
        const overlay = document.createElement("div");
        overlay.id = overlayId;
        overlay.classList.add("overlay");
        document.body.appendChild(overlay);
    }
    modal.showModal();
    hideScrollbar();
}

export function closeModal(modal: Modal) {
    if (!modal.open) return;
    modal.classList.add(CLOSING_CLASS);
    const overlay = document.getElementById(modal.dataset.overlayId || "");
    if (overlay) {
        overlay.classList.add(CLOSING_CLASS);
    }
}
