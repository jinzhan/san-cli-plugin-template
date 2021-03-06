module.exports = {
    complete(data, {chalk, logger}) {
        console.log(
            logger.boxen(
                `        San CLI

Start with ${chalk.bold('yarn/npm start')}`,
                {padding: 1, borderStyle: 'round'}
            )
        );
    },
    helpers: {
        /* eslint-disable fecs-camelcase */
        if_or: (v1, v2, options) => {
            /* eslint-enable fecs-camelcase */
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    filters: {
        '_eslintrc.js': '!lint',
        'src/components/demo/*.less': 'cssPreprocessor!=="less"',
        'src/components/demo/*.scss': 'cssPreprocessor!=="sass"',
        'src/components/demo/*.styl': 'cssPreprocessor!=="stylus"'
    },
    prompts: {
        name: {
            type: 'string',
            required: true,
            label: '项目名称',
            default: '{{name}}'
        },
        description: {
            type: 'string',
            required: true,
            label: '项目描述',
            default: 'A San project'
        },
        author: {
            type: 'string',
            label: '作者',
            default: '{{author}}'
        },
        lint: {
            type: 'confirm',
            message: '是否安装 ESLint？'
        },
        lintConfig: {
            when: 'lint',
            type: 'list',
            message: '选择 ESLint 配置',
            choices: [
                {
                    name: '@ecomfe/eslint-config (https://github.com/ecomfe/eslint-config)',
                    value: 'ecomfe',
                    short: 'ecomfe'
                },
                {
                    name: 'Standard (https://github.com/standard/standard)',
                    value: 'standard',
                    short: 'Standard'
                },
                {
                    name: 'Airbnb (https://github.com/airbnb/javascript)',
                    value: 'airbnb',
                    short: 'Airbnb'
                }
            ]
        },
        lintHook: {
            when: 'lint',
            type: 'confirm',
            message: '是否安装ESLint的 lint-staged？'
        },
        cssPreprocessor: {
            type: 'list',
            message: '选择 CSS 预处理器',
            choices: [
                {
                    name: 'less（推荐）',
                    value: 'less',
                    short: 'Less'
                },
                {
                    name: 'Sass',
                    value: 'sass',
                    short: 'Sass'
                },
                {
                    name: 'stylus',
                    value: 'stylus',
                    short: 'Stylus'
                }
            ]
        }
    }
};
