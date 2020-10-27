<template>
  <div class="q-pa-md column">
    <div class="q-pa-md" >
      <div class="q-gutter-md">
        <form v-on:submit="adicionarPreco">
          <q-input
            filled
            v-model="preco"
            id="preco"
            label="Preço com 2 decimais:"
            mask="#.##"
            fill-mask="0"
            reverse-fill-mask
            hint="Exemplo: #.##"
            input-class="text-right"
            :dense="true"
          />
          <q-btn label="Adicionar" class="bg-purple-6 glossy float-right" v-on:click="adicionarPreco"></q-btn>
        </form>
      </div>
    </div>
    <q-table
      :dense="$q.screen.lt.md"
      title="Ganhos do dia"
      :data="data"
      :columns="columns"
      no-data-label="Você ainda não realizou nenhuma venda!!"
      row-key="name"
    />
    <q-btn v-on:click="finalizar" label="Finalizar dia" class="bg-purple-6 glossy"></q-btn>
    <template v-if="finalizarr == 1">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">Seus lucros de hoje foram:</div>
        </q-card-section>
          {{soma}}
        <q-card-section class="q-pt-none">

        </q-card-section>
      </q-card>
    </template>
  </div>

</template>


<script>
export default {
  data () {
    return {
      preco: '',
      finalizarr: 0,
      soma: 0,
      columns: [
        {
          name: 'preco',
          required: true,
          label: 'Preço (R$)',
          align: 'left',
          field: row => row.preco,
          sortable: true,
          headerClasses: 'bg-purple-6'
        },
        // { name: 'Status:', align: 'left', label: 'Status', field: 'status', sortable: true, headerClasses: 'bg-purple-6' }
      ],
      data: [
        {
          preco: 22.10,
        },
        {
          preco: 2.30,
        },
        {
          preco: 5.60,
        },
      ],
      tab: 'one'
    }
  },
  methods:{
    adicionarPreco: function () {
      this.data.push({
        preco: +(this.preco)
      })
      this.preco = ''
    },
    finalizar: function (){
      this.soma = 0
      this.data.map(item => {
        this.soma += item.preco
        this.finalizarr = !this.finalizarr
      })
    }

  }
}
</script>

