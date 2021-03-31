<template >
    <v-card class="mt-2">
        <v-card>
            <v-col>
                <v-row align="center" justify="space-around">
                    <v-col>
                        <v-text-field dense label="Sequência alarme"/>
                        <v-select dense :items="items" label="Tipo de alarme"/>
                    </v-col>
                    <v-col>
                        <v-select dense :items="items" label="Empresa Manutenção"/>
                        <v-select dense :items="items" label="Classificação"/>
                    </v-col>
                </v-row>
                <v-textarea outlined name="input-7-4" label="Alarme" value=""/>
                <v-select dense :items="items" label="Tipo de falha"/>
                <v-select dense :items="items" label="Tipo de Afetação"/>
                <v-switch dense label="Múltiplos Elementos" color="success" value="success" hide-details/>
            </v-col>
        </v-card>
        <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab" >
                <v-card  flat>
                    <component :is="item.content"/>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>

export default {
    nome: 'Localidade',
    components: {},
    
    data: () => ({
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
    })
}
</script>

<style>

</style>