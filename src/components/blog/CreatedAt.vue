<template>
  <div class="created-at">
    作成日: {{ created }}
  </div>
</template>

<script>
export default {
  name: 'CreatedAt',
  props: [ 'created' ]
}
</script>