import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';

const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onTrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button
            onClick={onTrow}
        >
            {t('trow Error')}
        </Button>
    );
};

export default BugButton;
