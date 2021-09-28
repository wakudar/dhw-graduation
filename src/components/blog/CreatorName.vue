<template>
  <div class="creator-name">
    作成者: {{ crname }}
  </div>
</template>

<script>
export default {
  name: 'CreatorName',
  props: [ 'crname' ]
}
</script>