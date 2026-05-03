// Simplified Routing for GitHub Pages
export function protectPage(pageName) {
    // Basic protection logic can be added here if needed
    // For now, we allow direct access to simplify debugging and fix 404s
    return true;
}

export function navigateTo(pageName) {
    // Map 'main' to 'afnan.html'
    const target = pageName === 'main' ? 'afnan' : pageName;
    window.location.href = `${target}.html`;
}
