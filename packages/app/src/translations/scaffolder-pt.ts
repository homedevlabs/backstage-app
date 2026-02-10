import { createTranslationMessages } from '@backstage/core-plugin-api/alpha';
import { scaffolderTranslationRef } from '@backstage/plugin-scaffolder/alpha';

export default createTranslationMessages({
    ref: scaffolderTranslationRef,
    messages: {
        'templateListPage.title': 'Criar um novo componente',
        'templateListPage.subtitle': 'Crie novos componentes de software usando templates padrão na sua organização',
        'templateListPage.pageTitle': 'Criar um novo componente',
        'templateListPage.templateGroups.defaultTitle': 'Templates',
        'ongoingTask.title': 'Execução de',
        'ongoingTask.subtitle': 'Tarefa {{taskId}}',
        'fields.entityNamePicker.title': 'Nome',
        'fields.ownerPicker.title': 'Proprietário',
    },
});
