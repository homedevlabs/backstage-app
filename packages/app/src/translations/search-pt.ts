import { createTranslationMessages } from '@backstage/core-plugin-api/alpha';
import { searchTranslationRef } from '@backstage/plugin-search/alpha';

export default createTranslationMessages({
    ref: searchTranslationRef,
    messages: {
        'sidebarSearchModal.title': 'Busca',
        'searchModal.viewFullResults': 'Ver todos os resultados',
        'searchType.tabs.allTitle': 'Tudo',
    },
});
