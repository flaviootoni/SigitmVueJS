<template>
    <v-navigation-drawer 
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    color="#2C3A47"
    dark
    app
    width="230"
    >
        <v-list-item class="px-2 pt-1" dense>
            <i class="fa fa-bars fa-fw px-3" @click.stop="mini = !mini"></i>
            <vlist-item-title class="ml-4 text-capitalize">Sigitm</vlist-item-title>  
        </v-list-item>
        <v-list shaped class="clickable" dense>
            <template v-for="item in items">
                <v-list-group 
                v-if="item.children"
                :key="item.text"
                v-model="item.model"
                :append-icon-small="item.model ? item.icon : item['icon-alt']"
                active-class="orange--text"
                >
                <template #prependIcon>
                    <v-icon small >{{ item['icon-ctr'] }}</v-icon>
                </template>
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item  
                    dense
                    v-for="(child, i) in item.children"
                    :key="i"
                    route :to="child.route"
                    active-class="orange--text"
                    >
                        <v-list-item-action v-if="child.icon">
                            <v-icon small>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title> {{ child.text }} </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item 
                dense
                v-else
                :key="item.text"
                active-class="orange-text"
                route
                :to="item.route"
                >
                    <v-list-item-action>
                        <v-icon small> {{ item.icon }} </v-icon>
                    </v-list-item-action>
                    <v-list-item-title>
                        {{ item.text }}
                    </v-list-item-title>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Menu",
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
        mini:false,
        fab: false,
        items: [
            {icon: 'fa fa-home', text: 'Meu menu', route:'/'},
            {
                icon: 'fa fa-sort-asc',
                'icon-alt': 'fa fa-sort-desc',
                'icon-ctr': 'fa fa-clock-o fa-lg',
                text: 'Tíquete Programado',
                model: false,
                children: [
                    {icon: 'fa fa-plus-square-o fa-lg', text:'Novo tiquete', route:'/TP'},
                    {icon:'fa fa-search', text: 'Localizar', route:'/Localizar'},
                    {icon:'fa fa-search', text: 'Localizar por Sigla', route:'/TPLocalizarSigra'},
                    {icon:'fa fa-address-book-o', text: 'Informes', route:'/TPInformes'},
                    {icon:'fa fa-folder-open-o', text: 'BIOR', route:'/TPBior'},
                    {icon:'fa fa-hand-paper-o', text: 'Abertura Manual Sigres', route:'/TPAberturaManual'}
                ],
            },
            {
                icon: 'fa fa-sort-asc',
                'icon-alt': 'fa fa-sort-desc',
                'icon-ctr': 'fa fa-gg',
                text: 'Tiquete Anomalidade',
                model: false,
                children: [
                    {icon: 'fa fa-plus-square-o fa-lg', text:'Novo tiquete', route:'/TA'},
                    {icon:'fa fa-search', text: 'Localizar', route:'/LocalizarTA'},
                    {icon:'fa fa-search fa-lg', text: 'Localizar por Sigla', route:'/LocalizarTASigra'},
                    {icon:'fa fa-address-book-o', text: 'Informes', route:'/Informes'},
                    {icon:'fa fa-folder-open-o', text: 'BIOR', route:'/TABIOR'},
                    {icon:'fa fa-hand-paper-o', text: 'Abertura Manual Sigres', route:'/TAAberturaManual'}
                ],
            },
            {
                icon: 'fa fa-sort-asc',
                'icon-alt': 'fa fa-sort-desc',
                'icon-ctr': 'fa fa-cogs',
                text: 'Administração',
                model: false,
                children: [
                    {icon: 'fa fa-building-o fa-lg', text:'Domínio', route:'/admin/dominio'},
                    {icon:'fa fa-users fa-lg', text: 'Grupo', route:'/admin/grupo'},
                    {icon:'fa fa-user fa-lg', text: 'Usuário', route:'/admin/usuario'},
                    {icon:'fa fa-bell-o', text: 'Acionamentos TA', route:'/admin/acionamentosTA'},
                    {icon:'fa fa-bell', text: 'Acionamentos TP', route:'/admin/acionamentosTP'},
                    {icon:'fa fa-cog', text: 'Configurações TP', route:'/admin/configuracoesTP'},
                    {icon:'fa fa-map-signs', text: 'Convivência SAS/Sigitm', route:'/admin/convivenciaSasSigitm'},
                    {icon:'fa fa-microchip', text: 'BIOR', route:'/admin/bior'},
                    {icon:'fa fa-file-audio-o', text: 'Catálogo de Alarmes', route:'/admin/catalogoDeAlarmes'},
                    {icon:'fa fa-rss', text: 'Erros Quartz', route:'/admin/errosQuartz'},
                    {icon:'fa fa-sitemap', text: 'Inventários', route:'/admin/inventarios'},
                    {icon:'fa fa-window-restore', text: 'Catálogo de Facilidades', route:'/admin/catalogoDeFacilidades'},
                    {icon:'fa fa-sliders', text: 'Preferências', route:'/admin/preferencias'},
                    {icon:'fa fa-newspaper-o', text: 'Relatorios', route:'/admin/relatorios'},
                ],
            }
        ]
    })
}
</script>

<style>
/*.clickable {
    -webkit-app-region: no-drag;
    font-size: 14px;
}
.v-list-item-title{
        font-size: 10px;
}*/

.v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 0px;
}

</style>