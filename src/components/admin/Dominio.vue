<template>
  <v-sheet>
    <v-tabs
      v-model="tab"
      background-color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <component :is="item.content"/>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>

<script>

import Grupos from './dominio/Grupos'
import Subgrupos from './dominio/Subgrupos'
import Usuarios from './dominio/Usuarios'

export default {
    nome: 'Dominio',
    components: {Grupos, Subgrupos, Usuarios},
    data: () => ({
        tab:null,
        items: [
            {tab: 'Grupos', content: 'Grupos'},
            {tab: 'Subgrupos', content: 'Subgrupos'},
            {tab: 'Usuários', content: 'Usuarios'},
            {tab: 'Árvores de baixa', content: 'Usuarios'},
            {tab: 'Árvores de criação', content: 'Usuarios'},
            {tab: 'Árvores de encerramento', content: 'Usuarios'},
            {tab: 'Árvores de tramitação', content: 'Usuarios'},
            {tab: 'Feriados', content: 'Usuarios'},
        ]
    })
}
</script>

<style>

</style>