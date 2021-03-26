import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import minifyTheme from 'minify-css-string'

Vue.use(Vuetify);

export default new Vuetify({

      theme: {
        options: { minifyTheme },
      },    
      icons: {
        iconfont: 'mdiSvg' ||  'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      },
    
});
