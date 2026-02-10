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
            'pt-BR': () => import('./translations/catalog-pt.ts'),
        },
    }),
    createTranslationResource({
        ref: scaffolderTranslationRef,
        translations: {
            'pt-BR': () => import('./translations/scaffolder-pt.ts'),
        },
    }),
    createTranslationResource({
        ref: userSettingsTranslationRef,
        translations: {
            'pt-BR': () => import('./translations/user-settings-pt.ts'),
        },
    }),
    createTranslationResource({
        ref: orgTranslationRef,
        translations: {
            'pt-BR': () => import('./translations/org-pt.ts'),
        },
    }),
    createTranslationResource({
        ref: searchTranslationRef,
        translations: {
            'pt-BR': () => import('./translations/search-pt.ts'),
        },
    }),
];
