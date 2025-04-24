import pluginStylistic from '@stylistic/eslint-plugin';
import pluginVitest from '@vitest/eslint-plugin';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
// @ts-ignore: Package doesn't have a declaration file
import pluginImport from 'eslint-plugin-import';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginVue from 'eslint-plugin-vue';
// import tseslint from 'typescript-eslint';
// import jseslint from '@eslint/js';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

// type A = {
//   a: string;
// };

// type B = {
//   b: A;
// };

// type AB = A & B;

// Nicked from @typescript-eslint Condig.d.ts's namespace "SharedConfig"
// type Severity = 0 | 1 | 2;
// type SeverityString = 'error' | 'off' | 'warn';
// type RuleLevel = Severity | SeverityString;
// type RuleLevelAndOptions = [RuleLevel, ...unknown[]];
// type RuleEntry = RuleLevel | RuleLevelAndOptions;

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  pluginVue.configs['flat/essential'],
  pluginVue.configs['flat/recommended'],
  pluginVue.configs['flat/strongly-recommended'],
  vueTsConfigs.recommended,

  {
    files: [
      'src/**/__tests__/*'
      // 'src/components/__tests__/**'
    ],
    ...pluginVitest.configs.recommended,
    rules: {
      'vitest/consistent-test-it': ['error', {
        'fn': 'it'
      }],
      'vitest/prefer-spy-on': 'error',
      'vitest/prefer-to-be': 'error',
      'vitest/prefer-to-be-falsy': 'error',
      'vitest/prefer-to-be-object': 'error',
      'vitest/prefer-to-be-truthy': 'error',
      'vitest/prefer-to-contain': 'error',
      'vitest/prefer-to-have-length': 'error',
      'vitest/prefer-todo': 'error',
      'vitest/prefer-vi-mocked': 'error',
      'vitest/require-hook': 'error',
      'vitest/valid-expect-in-promise': 'error',
      'vitest/prefer-comparison-matcher': 'error',
      'vitest/prefer-hooks-in-order': 'error',
      'vitest/prefer-hooks-on-top': 'error',
      'vitest/consistent-test-filename': [
        'error',
        {
          pattern: String.raw`.*\.spec\.(ts|tsx)$`
        }
      ]
    }
  },
  {
    name: 'Vue rules',
    rules: {
      'vue/no-static-inline-styles': ['error', {
        'allowBinding': true
      }],
      'vue/max-attributes-per-line': ['error', {
        'singleline': {
          'max': 1
        },
        'multiline': {
          'max': 1
        }
      }],
      'vue/padding-line-between-tags': ['error', [
        {
          'blankLine': 'always',
          'prev': '*',
          'next': '*'
        }
      ]],
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/html-comment-content-spacing': ['error', 'always'],
      'vue/html-comment-indent': ['error', 2],
      'vue/html-comment-content-newline': ['error',
        {
          'singleline': 'never',
          'multiline': 'always'
        }
      ],
      'vue/component-api-style': ['error', [
        'script-setup',
        'composition'
      ]],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/enforce-style-attribute': ['error', {
        allow: ['scoped']
      }],
      // TODO: Check if this works properly everywhere
      'vue/multiline-html-element-content-newline': ['error', {
        'ignoreWhenEmpty': true,
        'ignores': ['pre', 'textarea', 'VueComponent'],
        'allowEmptyLines': true
      }]
    }
  },
  {
    name: 'Standalone rules',
    rules: {
      'eqeqeq': 'error',
      // Enforce the use of useLanguage since useLocale does NOT return a locale, but a language shortcode
      'no-restricted-syntax': ['error', {
        message: 'Use useLanguage() instead',
        selector: 'CallExpression[callee.name=\'useLocale\']'
      }],
      // 'prefer-template': 'error',
      'no-restricted-imports': ['error', {
        patterns: [
          './*',
          '../*'
        ]
      }],
      'no-empty-function': ['error', {
        allow: ['constructors']
      }],
      'no-else-return': 'error',
      'prefer-template': 'error',
      'no-useless-concat': 'error',
      'camelcase': 'off',
      'class-methods-use-this': 'off',
      'global-require': 'warn',
      'guard-for-in': 'error',
      'radix': 'off',
      'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-await-in-loop': 'warn',
      'no-continue': 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-param-reassign': ['warn', { props: false }],
      'no-return-assign': ['error', 'except-parens'],
      'no-underscore-dangle': 'error',
      'no-plusplus': 'off',
      // `no-useless-constructor` throws error for unknown reason.
      'prefer-destructuring': ['error', {
        array: false,
        object: true
      }]
    }
  },
  {
    name: 'Typescript rules',
    rules: {
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/no-unused-vars': ['error', {
        'args': 'all',
        'argsIgnorePattern': '^_',
        'caughtErrors': 'all',
        'caughtErrorsIgnorePattern': '^_',
        'destructuredArrayIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'ignoreRestSiblings': true
      }],
      '@typescript-eslint/ban-ts-comment': ['error', {
        'ts-ignore': 'allow-with-description'
      }],
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports'
      }],
      '@typescript-eslint/no-import-type-side-effects': 'error' // This relates to verbatimModuleSyntax in tsconfig but it's still extremely vague to me (https://typescript-eslint.io/rules/no-import-type-side-effects/)
    }
  },
  {
    name: 'Stylistic rules',
    plugins: {
      '@stylistic': pluginStylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1
      }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/jsx-newline': [2, {
        'prevent': false,
        'allowMultilines': false
      }],
      '@stylistic/jsx-max-props-per-line': ['error'],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
      '@stylistic/jsx-closing-bracket-location': [
        'error',
        'tag-aligned'
      ],
      '@stylistic/jsx-closing-tag-location': [
        'error',
        'tag-aligned'
      ],
      '@stylistic/jsx-tag-spacing': ['error'],
      '@stylistic/jsx-sort-props': 'error',
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/jsx-one-expression-per-line': ['error', {
        allow: 'single-child'
      }],
      '@stylistic/jsx-function-call-newline': 'error',
      '@stylistic/jsx-wrap-multilines': ['error', {
        'declaration': 'parens-new-line',
        'assignment': 'parens-new-line',
        'return': 'parens-new-line',
        'arrow': 'parens-new-line',
        'condition': 'parens-new-line',
        'logical': 'ignore',
        'prop': 'ignore'
      }],
      '@stylistic/jsx-props-no-multi-spaces': 'error',
      '@stylistic/type-annotation-spacing': ['error', {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true
          }
        }
      }],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/no-multi-spaces': ['error'],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi-spacing': ['error', {
        before: false,
        after: true
      }],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', {
        named: 'never',
        anonymous: 'never',
        asyncArrow: 'always'
      }],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/arrow-spacing': ['error', {
        before: true,
        after: true
      }],
      '@stylistic/func-call-spacing': ['error', 'never'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
      '@stylistic/no-whitespace-before-property': ['error'],
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/space-unary-ops': ['error'],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/comma-spacing': ['error', {
        'before': false,
        'after': true
      }],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/key-spacing': ['error', {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'strict'
      }],
      '@stylistic/eol-last': 'error',
      '@stylistic/generator-star-spacing': 'off',
      '@stylistic/no-tabs': 'error',
      '@stylistic/object-curly-newline': ['error', {
        ImportDeclaration: 'never'
      }],
      '@stylistic/curly-newline': ['error', {
        minElements: 1
      }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/type-generic-spacing': ['error'],
      '@stylistic/indent-binary-ops': ['error', 2],
      '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'return',
            'if',
            'block-like',
            'export'
          ]
        },
        // ! The order of the next 2 import rules matter, do NOT change this
        {
          blankLine: 'always',
          prev: 'import',
          next: [
            '*'
          ]
        },
        {
          blankLine: 'any',
          prev: 'import',
          next: [
            'import'
          ]
        },
        {
          blankLine: 'always',
          prev: ['singleline-const', 'let', 'var'],
          next: '*'
        },
        {
          blankLine: 'always',
          prev: ['multiline-const'],
          next: ['const']
        },
        {
          blankLine: 'always',
          prev: ['block-like'],
          next: '*'
        },
        {
          blankLine: 'any',
          prev: ['singleline-const', 'let', 'var'],
          next: ['singleline-const', 'let', 'var']
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['interface']
        }
      ],
      '@stylistic/lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: true
      }],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi', // 'none' or 'semi' or 'comma'
          requireLast: true
        },
        singleline: {
          delimiter: 'semi', // 'semi' or 'comma'
          requireLast: false
        }
      }]
    }
  },
  {
    plugins: {
      'import': pluginImport,
      'simple-import-sort': pluginSimpleImportSort
    },
    rules: {
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/named': 'off',
      'import/no-cycle': 'off',
      'import/no-dynamic-require': 'warn',
      'import/prefer-default-export': 'off',
      'import/first': 'error',
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      // Simple import sort
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
);
