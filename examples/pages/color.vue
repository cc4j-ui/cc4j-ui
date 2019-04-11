<template>
    <div>
        <h2>颜色</h2>
        <p></p>
        <h3>主要颜色</h3>

        <div class="demo-box cc-text-body" v-for="(item,i) in primarys" :class="[cssPrefix+'bg-'+item]">
            <p>{{item}} color</p>
        </div>
        <h3>辅助颜色</h3>
        <p>辅助色是具有代表性的颜色，常用于信息提示，比如成功、消息、提示、警告和危险</p>
        <div class="demo-box cc-text-body" v-for="(item,i) in subsidiary" :class="[cssPrefix+'bg-'+item]">
            <p>{{item}} color</p>
        </div>
        <h3>中性色</h3>
        <p>中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</p>
        <div class="demo-box cc-text-body" v-for="(item,i) in neutrals" :class="[cssPrefix+'bg-'+item]">
            <p>{{item}} color</p>
            <p>{{cssPrefix+'bg-'+item}}</p>
            <p>{{cssPrefix+'bd-'+item}}</p>
            <p>{{cssPrefix+'text-'+item}}</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data:function () {
        return {
            cssPrefix: this.config.cssPrefix,
            primarys: ['primary','primary-shade','primary-selected','primary-tint','primary-fade'],
            subsidiary: ['success','info','notes','warning','danger'],
            neutrals:['title','text','subsidiary','border','background','normal','disabled']
        };
    }
};
</script>

<style lang="css" rel="stylesheet/css">
    .demo-box{
        display: inline-block;
        width: 140px;
        height: 80px;
        padding: 10px;
        margin: 10px;
        vertical-align: top;

    }
</style>
