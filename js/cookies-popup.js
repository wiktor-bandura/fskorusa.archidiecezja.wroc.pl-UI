const consentPopup = document.querySelector('.consent-popup');
const consentBtn = consentPopup.querySelector('.consent-btn');

const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value}), {});

        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'consent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

if(shouldShowPopup()) {
    consentPopup.classList.remove('hidden');
    consentBtn.addEventListener('click', () => {
        consentPopup.classList.add('hidden');
        saveToStorage();
    })
}