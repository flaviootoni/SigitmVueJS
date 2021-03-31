import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Dominio from '@/components/admin/Dominio'
import Usuario from '@/components/admin/Usuario'
import Grupo from '@/components/admin/Grupo'
import AcionamentosTA from '@/components/admin/AcionamentosTA'
import AcionamentosTP from '@/components/admin/AcionamentosTP'
import ConfiguracoesTP from '@/components/admin/ConfiguracoesTP'
import ConvivenciaSasSigitm from '@/components/admin/ConvivenciaSasSigitm'
import Bior from '@/components/admin/Bior'
import CatalogoDeAlarmes from '@/components/admin/CatalogoDeAlarmes'
import ErrosQuartz from '@/components/admin/ErrosQuartz'
import Inventarios from '@/components/admin/Inventarios'
import CatalogoDeFacilidades from '@/components/admin/CatalogoDeFacilidades'
import Preferencias from '@/components/admin/Preferencias'
import Relatorios from '@/components/admin/Relatorios'
import TA from '@/components/ta/TA'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {path: '/admin/dominio', name: 'dominio', component: Dominio},
  {path: '/admin/usuario', name: 'usuario', component: Usuario},
  {path: '/admin/grupo', name: 'grupo', component: Grupo},
  {path: '/admin/acionamentosTA', name: 'acionamentosTA', component: AcionamentosTA},
  {path: '/admin/acionamentosTP', name: 'acionamentosTP', component: AcionamentosTP},
  {path: '/admin/configuracoesTP', name: 'configuracoesTP', component: ConfiguracoesTP},
  {path: '/admin/convivenciaSasSigitm', name: 'convivenciaSasSigitm', component: ConvivenciaSasSigitm},
  {path: '/admin/bior', name: 'bior', component: Bior},
  {path: '/admin/catalogoDeAlarmes', name: 'catalogoDeAlarmes', component: CatalogoDeAlarmes},
  {path: '/admin/errosQuartz', name: 'errosQuartz', component: ErrosQuartz},
  {path: '/admin/inventarios', name: 'inventarios', component: Inventarios},
  {path: '/admin/catalogoDeFacilidades', name: 'catalogoDeFacilidades', component: CatalogoDeFacilidades},
  {path: '/admin/preferencias', name: 'preferencias', component: Preferencias},
  {path: '/admin/relatorios', name: 'relatorios', component: Relatorios},

  {path: '/ta', name: 'TA', component: TA},
]

export default new VueRouter({
  mode: 'history',
  routes
})

