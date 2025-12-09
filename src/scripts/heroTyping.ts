const SCROLL_THRESHOLD = 50;
const SLOW_TYPE_SPEED_MS = 150;
const FAST_TYPE_SPEED_MS = 50;

const originalText = "Design. Build. Scale.";

function initHeroTyping() {
    const titleElement = document.getElementById("heroTitle");
    if (!(titleElement instanceof HTMLElement)) return;

    titleElement.textContent = "";

    let isRevealed = false;
    let isAnimating = false;
    let animationTimeout: ReturnType<typeof setTimeout> | null = null;
    let initialAnimationDone = false;

    const stopAnimation = () => {
        if (animationTimeout !== null) clearTimeout(animationTimeout);
        isAnimating = false;
    };

    const animateTyping = (targetText: string, speed: number) => {
        if (!titleElement) return;
        stopAnimation();
        isAnimating = true;

        const textLength = originalText.length;
        let currentText = titleElement.textContent || "";
        const isTyping = targetText === originalText;

        const typeAnimation = () => {
            const currentLength = currentText.length;

            if (isTyping) {
                if (currentLength < textLength) {
                    currentText += originalText[currentLength];
                    titleElement.textContent = currentText;
                    animationTimeout = setTimeout(typeAnimation, speed);
                } else {
                    isAnimating = false;
                    isRevealed = true;
                    if (!initialAnimationDone) {
                        initialAnimationDone = true;
                    }
                }
            } else if (currentLength > 0) {
                currentText = currentText.substring(0, currentLength - 1);
                titleElement.textContent = currentText;
                animationTimeout = setTimeout(typeAnimation, speed);
            } else {
                isAnimating = false;
                isRevealed = false;
            }
        };

        typeAnimation();
    };

    const handleScroll = () => {
        const scroll = window.scrollY;

        if (scroll > SCROLL_THRESHOLD && isRevealed && initialAnimationDone) {
            animateTyping("", FAST_TYPE_SPEED_MS);
        } else if (scroll <= SCROLL_THRESHOLD && initialAnimationDone && !isRevealed) {
            animateTyping(originalText, SLOW_TYPE_SPEED_MS);
        }
    };

    animateTyping(originalText, SLOW_TYPE_SPEED_MS);
    window.addEventListener("scroll", handleScroll);
}

if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", initHeroTyping);
}
