import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.scss';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');

        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    return isVisible ? (
        <div className={styles.cookieBanner}>
            <p>We use cookies to improve your experience on our website.</p>
            <button onClick={acceptCookies}>Accept</button>
        </div>
    ) : null;
};

export default CookieBanner;