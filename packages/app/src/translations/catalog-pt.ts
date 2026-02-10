import { createTranslationMessages } from '@backstage/core-plugin-api/alpha';
import { catalogTranslationRef } from '@backstage/plugin-catalog/alpha';

export default createTranslationMessages({
    ref: catalogTranslationRef,
    messages: {
        'indexPage.title': 'Catálogo de {{orgName}}',
        'indexPage.createButtonTitle': 'Criar',
        'indexPage.supportButtonContent': 'Todas as suas entidades do catálogo de software',
        'aboutCard.title': 'Sobre',
        'aboutCard.descriptionField.label': 'Descrição',
        'aboutCard.ownerField.label': 'Proprietário',
        'aboutCard.domainField.label': 'Domínio',
        'aboutCard.systemField.label': 'Sistema',
        'aboutCard.typeField.label': 'Tipo',
        'aboutCard.lifecycleField.label': 'Ciclo de Vida',
        'aboutCard.tagsField.label': 'Tags',
        'catalogTable.starActionTitle': 'Adicionar aos favoritos',
        'catalogTable.unStarActionTitle': 'Remover dos favoritos',
        'entityContextMenu.inspectMenuTitle': 'Inspecionar entidade',
        'entityContextMenu.copyURLMenuTitle': 'Copiar URL da entidade',
        'entityContextMenu.unregisterMenuTitle': 'Desregistrar entidade',
        'entityLabelsCard.title': 'Labels',
        'entityLinksCard.title': 'Links',
    },
});
