import { createTranslationMessages } from '@backstage/core-plugin-api/alpha';
import { orgTranslationRef } from '@backstage/plugin-org/alpha';

export default createTranslationMessages({
    ref: orgTranslationRef,
    messages: {
        'groupProfileCard.groupNotFound': 'Grupo não encontrado',
        'membersListCard.title': 'Membros',
        'ownershipCard.title': 'Propriedade',
        'userProfileCard.userNotFound': 'Usuário não encontrado',
    },
});
