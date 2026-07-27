# Eslint Plugin Rules

## About

Place for eslint custom rules for Foreman and plugins

## Usage

### Create an eslintrc file
```js
{
  "plugins": ["@theforeman/rules"],
  "rules": {
    "@theforeman/rules/require-ouiaid": "warn",
  }
}
```
`ouiaId` prop is used in automation tests. An example can be found [here](https://github.com/SatelliteQE/airgun/blob/master/airgun/views/cloud_insights.py).

If not specified in the eslintrc file, these components will be checked for an `ouiaId` prop:
```
  "Alert",
  "Breadcrumb",
  "Button",
  "Card",
  "Checkbox",
  "Chip",
  "ChipGroup",
  "Content",
  "ContextSelector",
  "Dropdown",
  "DropdownItem",
  "DropdownList",
  "DropdownSeparator",
  "DropdownToggle",
  "DropdownToggleCheckbox",
  "DualListSelector",
  "EmptyState",
  "EmptyStateActions",
  "EmptyStateBody",
  "EmptyStateFooter",
  "EmptyStateHeader",
  "FormSelect",
  "KebabToggle",
  "Masthead",
  "Menu",
  "MenuToggle",
  "Modal",
  "ModalBoxCloseButton",
  "ModalContent",
  "Nav",
  "NavExpandable",
  "NavItem",
  "OptionsMenu",
  "Page",
  "PageSidebar",
  "Pagination",
  "Radio",
  "RowWrapper",
  "SearchInput",
  "Select",
  "Switch",
  "Tab",
  "TabButton",
  "TabContent",
  "Table",
  "TableComposable",
  "Tabs",
  "Text",
  "TextInput",
  "TextInputGroup",
  "Title",
  "Toolbar",
  "Tr"
```

You can specify what components you want to check against. This replaces the default list entirely.
```js
{
  "plugins": ["@theforeman/rules"],
  "rules": {
    "@theforeman/rules/require-ouiaid": [
      "warn",
      "Button",
      "Table",
    ]
  }
```

You can also extend the default list with additional components without replacing it:
```js
{
  "plugins": ["@theforeman/rules"],
  "rules": {
    "@theforeman/rules/require-ouiaid": [
      "warn",
      { "additional": ["CustomComponent", "AnotherComponent"] }
    ]
  }
```

Here is the list of OUIA-compliant PatternFly components:
- [PatternFly 5](https://v5-archive.patternfly.org/developer-resources/open-ui-automation/)
- [PatternFly 4](https://v4-archive.patternfly.org/v4/developer-resources/open-ui-automation)
