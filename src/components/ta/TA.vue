<template>
    <div class="ta">
        <v-container >
           
            <div>
                <v-row dense class="mt-0" >
                    <v-chip dense class="ma-2" color="success">
                        <v-icon small left>fa-plus</v-icon>
                        Salvar
                    </v-chip>
                    <v-chip dense class="ma-2" color="warning">
                        <v-icon small left>fa-edit</v-icon>
                        Modificar
                    </v-chip>
                    <v-chip dense class="ma-2" color="error">
                        <v-icon small left>fa-trash</v-icon>
                        Modificar
                    </v-chip>
                </v-row>
                <v-divider class="mt-5"></v-divider>
            </div>
            <v-row dense class="mt-3">                
                <v-col cols="2"><v-switch dense label="Interconectadas" color="success" value="success" hide-details/></v-col>
                <v-col><v-select dense :items="items" label="Tipo de bilhete:" /></v-col>
                <v-col><v-select dense :items="tiposTA" label="Tipo TA" item-text="nome"></v-select></v-col>
                <v-col><v-select dense :items="items" label="Tipo Rede" ></v-select></v-col>
            </v-row>
            
            <v-sheet>
                <v-tabs v-model="tab" background-color="cyan" dark slider-color="yellow">
                    <v-tab v-for="item in items" :key="item.tab">
                        {{ item.tab }}
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item.tab" >
                        <v-card  flat>
                            <component :is="item.content"/>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-sheet>
            
        </v-container>
    </div>
</template>

<script>

import axios from 'axios/dist/axios'

import Localidade from './Localidade'
import Definicao from './Definicao'

export default {
    nome: 'ta',
    components: {Localidade, Definicao},
    data: () => ({
        tab:null,
        tiposTA: [],
        items: [
            {tab: 'Local', content: 'Localidade'},
            {tab: 'Defin.', content: 'Definicao'},
            {tab: 'Datas', content: 'Usuarios'},
            {tab: 'Baixa', content: 'Usuarios'},
            {tab: 'Afet.', content: 'Usuarios'},
            {tab: 'BIOR', content: 'Usuarios'},
            {tab: 'Hist.', content: 'Usuarios'},
            {tab: 'Interc.', content: 'Usuarios'},
            {tab: 'Serv.', content: 'Usuarios'},
            {tab: 'Inf.', content: 'Usuarios'},
            {tab: 'Anexo.', content: 'Usuarios'},
            {tab: 'Proced.', content: 'Usuarios'},
            {tab: 'Vida.', content: 'Usuarios'},
            {tab: 'Sobres.', content: 'Usuarios'},
        ]
    }),

    created() {
        axios.get('http://localhost:9081/s3-server/ta/tipoTa', {
            headers: {
                'x-auth-token': '56fea101-6ecb-43a1-a987-f8ce584d6a8e'
            },
            params: {
                
            },
        }).then((res) => {
            this.tiposTA = res.data
        }).catch((error) => {
            console.error(error)
        })
    }

}
</script>

<style>

</style>