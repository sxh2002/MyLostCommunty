<template>
  <div>
    <van-tabs>
      <van-tab title="标签 1">
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
          <van-list v-model="loading" finished="finished" finished-text="到底了">
            <van-card v-for="item in count" :key="item" :title="item"> </van-card>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useRoute } from "vue-router";
  let route = useRoute();
  const loading = ref(false);
  const count = ref(0);
  const onRefresh = () => {

    setTimeout(() => {
      loading.value = false;
      count.value++;
    }, 1000);}
</script>

