<template>
    <button :type="htmlType" :class="classes" :disabled="disabled">
        <!--<Icon class="ivu-load-loop" type="load-c" v-if="loading"></Icon>-->
        <!--<Icon :type="icon" v-if="icon && !loading"></Icon>-->
        <span><slot></slot></span>
    </button>
</template>
<script>
// import Icon from '../icon';
// import {oneOf} from '../../utils/assist';
const prefix = 'cc-';
const btnPrefix = prefix + 'btn';

export default {
    name: 'CcButton',
    // components: {Icon},
    props: {
        // type: {
        //     validator(value) {
        //         return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
        //     }
        // },
        // shape: {
        //     validator(value) {
        //         return oneOf(value, ['circle', 'circle-outline']);
        //     }
        // },
        // size: {
        //     validator(value) {
        //         return oneOf(value, ['small', 'large']);
        //     }
        // },
        // loading: Boolean,
        disabled: Boolean,
        htmlType: {
            default: 'button',
            validator(value) {
                console.log(value);
                return  Array.prototype.indexOf.call(['button', 'submit', 'reset'],value) >= 0? true : false;
                // return oneOf(value, ['button', 'submit', 'reset']);
            }
        }
        // icon: String,
        // block: {
        //     type: Boolean,
        //     default: false
        // }
    },
    data() {
        return {
            showSlot: true
        };
    },
    computed: {
        classes() {
            return [
                `${btnPrefix}`,
                {
                    [`${btnPrefix}-${this.type}`]: !!this.type,
                    [`${btnPrefix}-block`]: this.block,
                    [`${btnPrefix}-${this.shape}`]: !!this.shape,
                    [`${btnPrefix}-${this.size}`]: !!this.size,
                    [`${btnPrefix}-loading`]: this.loading != null && this.loading,
                    [`${btnPrefix}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
                }
            ];
        }
    }
};
</script>
