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
            {tab: 'Datas', content: 'Datas'},
            {tab: 'Baixa', content: 'Baixa'},
            {tab: 'Afetacao', content: 'Afetacao'},
            {tab: 'Bior', content: 'Bior'},
            {tab: 'Historico', content: 'Historico'},
            {tab: 'Interconexao', content: 'Interconexao'},
            {tab: 'Servico', content: 'Servico'},
            {tab: 'Informacao', content: 'Informacao'},
            {tab: 'Anexo', content: 'Anexo'},
            {tab: 'Procedimento', content: 'Procedimento'},
            {tab: 'Vida', content: 'Vida'},
            {tab: 'Sobres', content: 'Sobre'},
        ]
    })
}
</script>

<style>

</style>