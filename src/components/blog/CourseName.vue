<template>
  <div class="course-name">
    コース名: {{ coname }}
  </div>
</template>

<script>
export default {
  name: 'CourseName',
  props: [ 'coname' ]
}
</script>
