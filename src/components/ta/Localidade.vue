<template >
    <v-card class="mt-2">
        <v-card>
            <v-col>
                <v-row align="center" justify="space-around">
                    <v-col cols="6" >
                        <v-row dense>
                            <v-col><v-text-field dense label="Sequência"></v-text-field></v-col>
                            <v-col cols="1">
                                <v-btn elevation="2" fab icon x-small>
                                    <v-icon small>fa fa-usb</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col><v-text-field dense label="Ocorrência raiz"></v-text-field></v-col>
                            <v-col cols="1">
                                <v-btn elevation="2" fab icon x-small>
                                    <v-icon small >fa fa-search</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row dense class="mt-0">
                            <v-col ><v-text-field dense label="Trabalho Programado"></v-text-field></v-col>
                            <v-col cols="1">
                                <v-btn elevation="2" fab icon x-small>
                                    <v-icon small >fa fa-search</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-text-field dense label="Tíquete Referência"></v-text-field>
                        <v-text-field dense label="Total Derivados"></v-text-field>
                        <v-row dense>
                            <v-col>
                                <v-switch dense label="Pend. sobressalente" color="success" value="success" hide-details></v-switch>    
                            </v-col>
                            <v-col><v-text-field dense></v-text-field></v-col>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-text-field dense label="Status"></v-text-field>
                        <v-row dense>
                            <v-col><v-select dense :items="items" label="Severidade"></v-select></v-col>
                            <v-col><v-select dense :items="items" label="Máxima"></v-select></v-col>
                        </v-row>
                        <v-text-field dense label="Prioridade"></v-text-field>
                        <v-text-field dense label="Prioridade Dinamica"></v-text-field>
                        <v-select dense :items="items" label="Tipo de planta"></v-select>
                        <v-switch dense label="TM Sigitm" color="success" value="success" hide-details></v-switch>
                    </v-col>
                </v-row>
            </v-col>
        </v-card>
        <v-card class="mt-1">
            <v-col>
                <v-row dense>
                    <v-col><v-select dense :items="items" label="Estado"></v-select></v-col>
                    <v-col><v-select dense :items="items" ></v-select></v-col>
                </v-row>
                <v-row dense>
                    <v-col><v-select dense :items="items" label="Município"></v-select></v-col>
                    <v-col><v-select dense :items="items" label="Localidade"></v-select></v-col>
                    <v-col><v-select dense :items="items" ></v-select></v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="2" ><v-select dense :items="items" label="Site"></v-select></v-col>
                    <v-col><v-select dense :items="items" ></v-select></v-col>
                    <v-col cols="2"><v-text-field dense/></v-col>
                </v-row>
                <v-row dense>
                    <v-col><v-text-field dense label="CRO"/></v-col>
                    <v-col><v-text-field dense label="DDD"/></v-col>
                    <v-col><v-switch dense label="Área risco" color="success" value="success" hide-details></v-switch></v-col>
                    <v-col><v-switch dense label="Site Vip" color="success" value="success" hide-details></v-switch></v-col>
                </v-row>
                <v-row dense>
                    <v-col cols="2" ><v-text-field dense label="Gerência"/></v-col>
                    <v-col><v-text-field dense /></v-col>
                </v-row>
                <v-row dense>
                    <v-col><v-text-field dense label="Endereço"/></v-col>
                    <v-col cols="5"><v-text-field dense label="Bairro"/></v-col>
                </v-row>
            </v-col>           
        </v-card>
        <v-row >
            <v-col >
                <v-card class="mt-2" color="#26c6da" dark>
                    <v-card-title >Criado por</v-card-title>
                    <v-divider></v-divider>
                    <v-col>
                        <v-text-field dense label="Usuário"></v-text-field>
                        <v-text-field dense label="Grupo"></v-text-field>
                        <v-text-field dense label="Sistema"></v-text-field>
                    </v-col>
                </v-card>                
            </v-col>
            <v-col>
                <v-card class="mt-2" color="#26c6da" dark>
                    <v-card-title>Responsável</v-card-title>
                    <v-divider></v-divider>
                    <v-col>
                        <v-text-field dense label="Usuário"></v-text-field>
                        <v-text-field dense label="Grupo"></v-text-field>
                    </v-col> 
                </v-card>     
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-expansion-panels  :readonly="readonly" focusable popout>
                    <v-expansion-panel>
                        <v-expansion-panel-header>Interconectadas</v-expansion-panel-header>
                        <v-expansion-panel-content class="mt-3">
                            <v-row>
                                <v-col>
                                    <v-text-field dense label="Documento interconectada"></v-text-field>
                                    <v-select dense :items="items" label="Empresa"/>
                                    <v-text-field dense label="Designador"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field dense label="Nome"></v-text-field>
                                    <v-text-field dense label="Telefone"></v-text-field>
                                </v-col>
                            </v-row>

                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>

export default {
    nome: 'Localidade',
    components: {},
    
    data: () => ({
        panel: [0, 1],
        readonly: false,
    })
}
</script>

<style>

</style>