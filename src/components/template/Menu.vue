<template>
    <nav>
        <v-app-bar flat app color="#2C3A47" dark dense>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Sigitm</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" color="#2C3A47" dark>
            <div class="pa-2 mt-2 overline">SIGITM</div>
            <v-list shaped dense>
                <template v-for="item in items">
                    <v-list-group v-if="item.children" :key="item.text" v-model="item.model"
                    :append-icon-small="item.model ? item.icon : item['icon-alt']" active-class="orange--text"
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
                        <v-list-item dense v-for="(child, i) in item.children" :key="i" route :to="child.route" active-class="orange--text">
                            <v-list-item-action>
                                <v-icon x-small>fa-ul fa fa-circle</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title> {{ child.text }} </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item dense v-else :key="item.text" active-class="orange-text" route :to="item.route">
                        <v-list-item-action>
                            <v-icon small> {{ item.icon }} </v-icon>
                        </v-list-item-action>
                        <v-list-item-title> {{ item.text }} </v-list-item-title>
                    </v-list-item>
                </template>
            </v-list>

            <v-list shaped dense>
                <template v-for="item in itemsAdmin">
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
                                <v-list-item-title> {{ item.text }} </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item dense v-for="(child, i) in item.children" :key="i" route :to="child.route" active-class="orange--text">
                            <v-list-item-action>
                                <v-icon x-small>fa-ul fa fa-circle</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title> {{ child.text }} </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item dense v-else :key="item.text" active-class="orange-text" route :to="item.route" >
                        <v-list-item-action>
                            <v-icon small> {{ item.icon }} </v-icon>
                        </v-list-item-action>
                        <v-list-item-title> {{ item.text }} </v-list-item-title>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data: () => ({
        name: "Menu",
        drawer: false,
        props: {
            source: String,
        },
        items: [
            {icon: 'fa fa-dashboard', text: 'Dashboard', route:'/'},
            {
                icon: 'fa fa-sort-asc',
                'icon-alt': 'fa fa-sort-desc',
                'icon-ctr': 'fa fa-gg',
                text: 'Tiquete Anomalidade',
                model: false,
                children: [
                    {text:'Novo tiquete', route:'/TA'},
                    {text: 'Localizar', route:'/LocalizarTA'},
                    {text: 'Localizar por Sigla', route:'/LocalizarTASigra'},
                    {text: 'Informes', route:'/Informes'},
                    {text: 'BIOR', route:'/TABIOR'},
                    {text: 'Abertura Manual Sigres', route:'/TAAberturaManual'}
                ],
            },
            {
                icon: 'fa fa-sort-asc',
                'icon-alt': 'fa fa-sort-desc',
                'icon-ctr': 'fa fa-clock-o fa-lg',
                text: 'Tíquete Programado',
                model: false,
                children: [
                    {text:'Novo tiquete', route:'/TP'},
                    {text: 'Localizar', route:'/Localizar'},
                    {text: 'Localizar por Sigla', route:'/TPLocalizarSigra'},
                    {text: 'Informes', route:'/TPInformes'},
                    {text: 'BIOR', route:'/TPBior'},
                    {text: 'Abertura Manual Sigres', route:'/TPAberturaManual'}
                ],
            }
        ],
        itemsAdmin: [
            {
                icon: 'fa fa-sort-asc',
                'icon-alt': 'fa fa-sort-desc',
                'icon-ctr': 'fa fa-cogs',
                text: 'Administração',
                model: false,
                children: [
                    {text:'Domínio', route:'/admin/dominio'},
                    {text: 'Grupo', route:'/admin/grupo'},
                    {text: 'Usuário', route:'/admin/usuario'},
                    {text: 'Acionamentos TA', route:'/admin/acionamentosTA'},
                    {text: 'Acionamentos TP', route:'/admin/acionamentosTP'},
                    {text: 'Configurações TP', route:'/admin/configuracoesTP'},
                    {text: 'Convivência SAS/Sigitm', route:'/admin/convivenciaSasSigitm'},
                    {text: 'BIOR', route:'/admin/bior'},
                    {text: 'Catálogo de Alarmes', route:'/admin/catalogoDeAlarmes'},
                    {text: 'Erros Quartz', route:'/admin/errosQuartz'},
                    {text: 'Inventários', route:'/admin/inventarios'},
                    {text: 'Catálogo de Facilidades', route:'/admin/catalogoDeFacilidades'},
                    {text: 'Preferências', route:'/admin/preferencias'},
                    {text: 'Relatorios', route:'/admin/relatorios'},
                ],
            }
        ]
    })
}
</script>

<style>

</style>