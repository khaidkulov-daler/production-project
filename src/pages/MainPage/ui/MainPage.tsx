import { BugButton } from 'app/providers/ErorBoundary';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Страница Главная')}
        </div>
    );
}

export default MainPage;
