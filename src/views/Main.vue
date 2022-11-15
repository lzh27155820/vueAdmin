<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <ComponentsAside/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import ComponentsAside from '@/components/ComponentsAside'
export default {
  
  components:{
    ComponentsAside
  }
};
</script>

<style>
</style>