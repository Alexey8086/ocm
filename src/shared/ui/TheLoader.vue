<template>
  <div v-if="isLoading" class="loading">
    Загрузка данных ...
  </div>
</template>

<script setup>

const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped lang='scss'>
.loading {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.534);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: whitesmoke;
}

</style> 