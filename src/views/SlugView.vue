<template>
  <div class="slug">
    <h1>This is an about page{{ $route.params.slugParam }}</h1>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>
