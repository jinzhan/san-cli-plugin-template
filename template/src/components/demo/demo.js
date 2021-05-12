/**
 * @file 容器组件
 * @author {{author}}
 */

{{#if_eq cssPreprocessor "less"}}
import './demo.less';
{{/if_eq}}
{{#if_eq cssPreprocessor "sass"}}
import './demo.scss';
{{/if_eq}}
{{#if_eq cssPreprocessor "stylus"}}
import './demo.styl';
{{/if_eq}}

export default class App extends SanComponent {

    static template = `
    <div class="main">
        <h1>Hello, \{{title}}</h1>
    </div>
    `;

    initData(){
        return {
            title: 'San CLI'
        }
    }
};
