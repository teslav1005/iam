// Page IDs Mapping (100 characters unique IDs)
const PAGE_IDS = {
    'login': 'L1n8v9X2z5Q8w3E1r4T7y0U9i2O5p8A1s4D7f0G3h6J9k2L5z8X1c4V7b0N3m6Q9w2E5r8T1y4U7i0O3p6A9s2D5f8G1h4J7k0L3z6X9c2V5b8N1m4',
    'main': 'M7n2v5X8z1Q4w7E0r3T6y9U2i5O8p1A4s7D0f3G6h9J2k5L8z1X4c7V0b3N6m9Q2w5E8r1T4y7U0i3O6p9A2s5D8f1G4h7J0k3L6z9X2c5V8b1N4m7',
    'privacy': 'P3n6v9X2z5Q8w1E4r7T0y3U6i9O2p5A8s1D4f7G0h3J6k9L2z5X8c1V4b7N0m3Q6w9E2r5T8y1U4i7O0p3A6s9D2f5G8h1J4k7L0z3X6c9V2b5N8m1',
    'terms': 'T9n2v5X8z1Q4w7E0r3T6y9U2i5O8p1A4s7D0f3G6h9J2k5L8z1X4c7V0b3N6m9Q2w5E8r1T4y7U0i3O6p9A2s5D8f1G4h7J0k3L6z9X2c5V8b1N4m7T'
};

// Function to get ID by page name
export function getPageId(pageName) {
    return PAGE_IDS[pageName];
}

// Function to check if current URL matches the correct ID
export function protectPage(pageName) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    // السماح بالوصول لصفحة تسجيل الدخول والسياسات حتى بدون ID لتسهيل الاستخدام الأولي
    if (pageName === 'login' || pageName === 'privacy' || pageName === 'terms') {
        if (!id) {
            // إذا لم يوجد ID، نقوم بإضافته للرابط دون منع المستخدم
            const newUrl = window.location.pathname + '?id=' + PAGE_IDS[pageName];
            window.history.replaceState({}, '', newUrl);
            return true;
        }
    }

    if (id !== PAGE_IDS[pageName]) {
        // إذا كان الـ ID خاطئاً في الصفحات الحساسة مثل main، نعيد التوجيه
        if (pageName === 'main') {
            document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;direction:rtl;text-align:center;padding:20px;"><div><h1>عذراً، الرابط غير صالح.</h1><p>سيتم توجيهك لصفحة البداية...</p></div></div>';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
            return false;
        }
    }
    return true;
}

// Function to navigate to a page with its ID
export function navigateTo(pageName) {
    const id = PAGE_IDS[pageName];
    window.location.href = `${pageName}.html?id=${id}`;
}
