import { createTranslationMessages } from '@backstage/core-plugin-api/alpha';
import { userSettingsTranslationRef } from '@backstage/plugin-user-settings/alpha';

export default createTranslationMessages({
    ref: userSettingsTranslationRef,
    messages: {
        'settingsLayout.title': 'Configurações',
        'sidebarTitle': 'Configurações',
        'profileCard.title': 'Perfil',
        'appearanceCard.title': 'Aparência',
        'themeToggle.title': 'Tema',
        'languageToggle.title': 'Idioma',
        'signOutMenu.title': 'Sair',
    },
});
