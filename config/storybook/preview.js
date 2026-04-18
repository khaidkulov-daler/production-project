import { addDecorator } from "@storybook/react";
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import {i18nDecorator} from '../../src/shared/config/storybook/i18nDecorator/i18nDecorator'
import {Theme} from '../../src/app/providers/ThemeProvider'

export const parameters = {
    actions: { argTypeRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
};

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
addDecorator(i18nDecorator)