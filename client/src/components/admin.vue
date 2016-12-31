<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 mainpage-left">
        <page-nav></page-nav>
      </div>
      <div class="col-md-10 mainpage-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  import pageNav from './pageNav'
export default {
  name: 'admin',
  components: {
    pageNav
  },
  data () {
    return {

    }
  }
}
</script>
