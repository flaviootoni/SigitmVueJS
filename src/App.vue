<template>
  <v-app style="-webkit-app-region: drag">
    <Menu/>
    <Content/>
  </v-app>
</template>

<script>

import Menu from './components/template/Menu';
import Content from './components/template/Content';

export default {
  name: 'App',
  components: {
    Menu, Content
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>
	* {
		font-family: "Quicksand", sans-serif;
	}

</style>
