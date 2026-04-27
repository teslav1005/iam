// Page IDs Mapping (Simple and compatible with GitHub Pages)
const PAGE_IDS = {
    'login': 'auth_v1_login_secure_access_key_100',
    'main': 'app_v1_main_dashboard_secure_access_key_200',
    'privacy': 'legal_v1_privacy_policy_access_key_300',
    'terms': 'legal_v1_user_agreement_access_key_400'
};

// Function to check if current URL matches the correct ID
export function protectPage(pageName) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    // If ID is missing, redirect to index to start over properly
    if (!id || id !== PAGE_IDS[pageName]) {
        // For login and legal pages, we can auto-fix the URL if ID is missing
        if (pageName === 'login' || pageName === 'privacy' || pageName === 'terms') {
            const newUrl = window.location.pathname + '?id=' + PAGE_IDS[pageName];
            window.history.replaceState({}, '', newUrl);
            return true;
        }
        
        // For the main app page, redirect to index if ID is wrong
        if (pageName === 'main') {
            window.location.href = 'index.html';
            return false;
        }
    }
    return true;
}

// Function to navigate to a page with its ID
export function navigateTo(pageName) {
    const id = PAGE_IDS[pageName];
    // Ensure we use the .html extension for GitHub Pages compatibility
    window.location.href = `${pageName}.html?id=${id}`;
}
