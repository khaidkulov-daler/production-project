import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTests';

export const i18nDecorator = (story: () => Story) => (
    <I18nextProvider i18n={i18n}>
        {story()}
    </I18nextProvider>
);
