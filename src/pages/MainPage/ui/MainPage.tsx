import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Новый пеевод')}
            {t('Страница Главная')}
        </div>
    );
}

export default MainPage;
