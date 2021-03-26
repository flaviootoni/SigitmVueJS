<template>
  <v-app style="-webkit-app-region: drag">
    <Header/>
    <Menu/>
    <Content/>
  </v-app>
</template>

<script>


import Menu from './components/template/Menu';
import Header from './components/template/Header';
import Content from './components/template/Content';

export default {
  name: 'App',

  components: {
    Menu, Header, Content
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}

	body {
		margin: 0;
	}

</style>
