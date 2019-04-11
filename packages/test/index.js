import CcTest from './src/test';
CcTest.install = Vue => {
    Vue.component(CcTest.name, CcTest);
};
export default CcTest;
