<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="glossy bg-purple-6">


        <q-toolbar-title>
          Vendas
        </q-toolbar-title>

        <div>Senhor(a): Fulano</div>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import EssentialLink from 'components/EssentialLink.vue'

const linksData = [

];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {

    }
  }
}
</script>
