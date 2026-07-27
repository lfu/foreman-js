const getProp = require('jsx-ast-utils/getProp');

module.exports = {
  create(context) {
    const patternflyImports = new Set();
    const defaults = [
      'Alert',
      'Breadcrumb',
      'Button',
      'Card',
      'Checkbox',
      'Chip',
      'ChipGroup',
      'Content',
      'ContextSelector',
      'Dropdown',
      'DropdownItem',
      'DropdownList',
      'DropdownSeparator',
      'DropdownToggle',
      'DropdownToggleCheckbox',
      'DualListSelector',
      'EmptyState',
      'EmptyStateActions',
      'EmptyStateBody',
      'EmptyStateFooter',
      'EmptyStateHeader',
      'FormSelect',
      'KebabToggle',
      'Masthead',
      'Menu',
      'MenuToggle',
      'Modal',
      'ModalBoxCloseButton',
      'ModalContent',
      'Nav',
      'NavExpandable',
      'NavItem',
      'OptionsMenu',
      'Page',
      'PageSidebar',
      'Pagination',
      'Radio',
      'RowWrapper',
      'SearchInput',
      'Select',
      'Switch',
      'Tab',
      'TabButton',
      'TabContent',
      'Table',
      'TableComposable',
      'Tabs',
      'Text',
      'TextInput',
      'TextInputGroup',
      'Title',
      'Toolbar',
      'Tr',
    ];

    const { additional } =
      (context.options.length === 1 && context.options[0]) || {};
    const { options: contextOptions } = context;

    let options = defaults;
    if (additional) {
      options = [...defaults, ...additional];
    } else if (contextOptions.length) {
      options = contextOptions;
    }

    function addPatternflyImport(node) {
      if (
        node.type === 'ImportDeclaration' &&
        node.source.value.startsWith('@patternfly/react')
      ) {
        node.specifiers.forEach((specifier) => {
          if (specifier.type === 'ImportSpecifier') {
            patternflyImports.add(specifier.local.name);
          }
        });
      }
    }

    function checkPatternflyComponent(node) {
      if (!options.includes(node.name.name)) {
        return;
      }
      if (
        node.type === 'JSXOpeningElement' &&
        patternflyImports.has(node.name.name)
      ) {
        const ouiaIdProp = getProp(node.attributes, 'ouiaId');
        if (!ouiaIdProp) {
          context.report({
            node,
            message: `ouiaId property is missing in PatternFly component '${node.name.name}'`,
          });
        }
      }
    }
    return {
      ImportDeclaration: addPatternflyImport,
      JSXOpeningElement: checkPatternflyComponent,
    };
  },
};
