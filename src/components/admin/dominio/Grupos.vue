<template>
    <v-card class="mt-3">
        <v-row align="center" justify="space-around">
            <v-col cols="8">
                <v-card-title>
                    <v-text-field
                        v-model="search"
                        append-icon="fa fa-search"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
            </v-col>
            <v-col>
                <v-btn small color="secondary" dark class="mx-1">
                    <v-icon left> fa-plus </v-icon>
                    Adicionar
                </v-btn>
                <v-btn small color="warning" dark class="mx-1">
                    <v-icon left> fa-pencil </v-icon>
                    Editar
                </v-btn>
                <v-btn small color="error" dark class="mx-1">
                    <v-icon left> fa-trash </v-icon>
                    Apagar
                </v-btn>
            </v-col>
        </v-row>
        <v-data-table dense
        :headers="headers"
        :items="dados"
        :search="search"
        ></v-data-table>
    </v-card>
</template>

<script>

export default {
    nome: 'Grupos',
    components: {},
    
    data: () => ({
        search: '',
        headers: [
          {
            text: 'Código',
            align: 'start',
            filterable: false,
            value: 'codigo',
          },
          { text: 'Status', value: 'status' },
          { text: 'Tipo', value: 'tipo' },
          { text: 'Descrição', value: 'descricao' },
        ],
        dados: [
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 4'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 4'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          {codigo: '81078', status: 'Ativo', tipo: 'Operacional', descricao: 'Ressarcimento Perfil 3'},
          
        ],
    })
}
</script>

<style>

</style>