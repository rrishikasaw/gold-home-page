<script setup>
let props = defineProps(['title', 'description','icon']);
</script>

<template>
  <v-card class="py-6 pl-3 flex ml-4 bg-black card">
    
    <div>

      <p class="font-bold fz-12"> <Icon :name="props.icon" class="fz-10 mr-4 text-theme"></Icon>{{ props.title }}</p>
      <p>
        {{ props.description }}
      </p>
    </div>
  </v-card>
</template>

<style scoped>
.card {
  border-radius: 10px;
}
</style>
