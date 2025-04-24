export default {
  extends: [
    'stylelint-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recommended',
    'stylelint-config-twbs-bootstrap'
    // "stylelint-magic-numbers"
  ],
  files: [
    '**/*.scss',
    '**/*.vue'
  ],
  // 'overrides': [
  //   {
  //     'files': ['**/*.scss'],
  //     'customSyntax': 'postcss-scss',
  //     'rules': {
  //       'at-rule-no-unknown': null
  //     }
  //   }
  // ],
  'ignoreFiles': [
    '**/_variables.scss',
    '**/*.tsx',
    '**/*.jsx',
    '**/*.ts',
    '**/*.json',
    '**/*.html'
  ],
  'rules': {
    '@stylistic/indentation': 2,
    'color-named': 'never',
    'at-rule-no-unknown': null,
    'rule-empty-line-before': ['always', {
      except: [
        'after-single-line-comment',
        'first-nested'
      ]
    }],
    'declaration-empty-line-before': ['always', {
      except: [
        'after-declaration',
        'after-comment',
        'first-nested'
      ]
    }],
    'alpha-value-notation': ['number', { // This rule also allows for specifying the property on which to allow it, but we rarely use it, so I'll apply it globally, to every property
      // https://webkit.org/blog/9672/release-notes-for-safari-technology-preview-97
      // This is technically fixed now, but to keep the notation consistent across the whole project, we'll enforce it anyway
      message: 'Older versions of Safari had trouble understanding percentage values for opacity'
    }],
    '@stylistic/declaration-colon-space-after': 'always-single-line',
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/string-quotes': 'single',
    '@stylistic/value-list-comma-newline-after': null,
    '@stylistic/value-list-comma-space-after': 'always-single-line',
    'shorthand-property-no-redundant-values': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'selector-max-compound-selectors': 6
    // "stylistic/indentation": null,
    // "stylistic/string-quotes": null,
  }
};
