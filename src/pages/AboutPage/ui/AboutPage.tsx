import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('Страница О нас')}
        </div>
    );
}

export default AboutPage;
