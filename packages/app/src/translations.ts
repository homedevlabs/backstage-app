import { createTranslationResource } from '@backstage/core-plugin-api/alpha';
import { catalogTranslationRef } from '@backstage/plugin-catalog/alpha';
import { scaffolderTranslationRef } from '@backstage/plugin-scaffolder/alpha';
import { userSettingsTranslationRef } from '@backstage/plugin-user-settings/alpha';
import { orgTranslationRef } from '@backstage/plugin-org/alpha';
import { searchTranslationRef } from '@backstage/plugin-search/alpha';

export const ptBrTranslations = [
    createTranslationResource({
        ref: catalogTranslationRef,
        translations: {
            'pt': () => import('./translations/catalog-pt'),
            'pt-BR': () => import('./translations/catalog-pt'),
        },
    }),
    createTranslationResource({
        ref: scaffolderTranslationRef,
        translations: {
            'pt': () => import('./translations/scaffolder-pt'),
            'pt-BR': () => import('./translations/scaffolder-pt'),
        },
    }),
    createTranslationResource({
        ref: userSettingsTranslationRef,
        translations: {
            'pt': () => import('./translations/user-settings-pt'),
            'pt-BR': () => import('./translations/user-settings-pt'),
        },
    }),
    createTranslationResource({
        ref: orgTranslationRef,
        translations: {
            'pt': () => import('./translations/org-pt'),
            'pt-BR': () => import('./translations/org-pt'),
        },
    }),
    createTranslationResource({
        ref: searchTranslationRef,
        translations: {
            'pt': () => import('./translations/search-pt'),
            'pt-BR': () => import('./translations/search-pt'),
        },
    }),
];
