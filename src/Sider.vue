<template>
  <div>
    <div align="center" class="siderbar">
      <img class="logo" src="../public/images/header.png" alt="Logo" style="width: 100%;"/>
      <el-row>
        <el-col :span="span">
          <el-button disabled>首页</el-button>
        </el-col>
        <el-col :span="span">
          <el-button disabled>桌面</el-button>
        </el-col>
        <el-col :span="span">
          <el-button disabled>搜索</el-button>
        </el-col>
        <el-col :span="span">
          <el-button disabled>负一屏</el-button>
        </el-col>
        <el-col :span="span">
          <el-button disabled>QQ频道</el-button>
        </el-col>
        <el-col :span="span">
          <el-button disabled>求赞助</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import '../public/css/sider.css'
export default {
  name: 'app',
  data() {
    return {
      span: 4
    }
  },
  created() {
    if (screen.width >= 1080 ) {
      this.span = 24
    }
    else if ( screen.width <= 540) {
      this.span = 8
    }
  }
}
</script>

<style scoped>

</style>