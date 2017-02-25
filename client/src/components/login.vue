<template>
  <div class="loginBox" id="Login">
    <div class="login">
      <div class="maycms">
        <h1>MayCMS</h1>
        <p class="deta">轻量级CMS管理系统</p>
        <h3>登录</h3>
      </div>
      <form class="form-horizontal">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">邮箱</label>
          <div class="col-sm-9">
            <input type="email" class="form-control" id="inputEmail3" placeholder="邮箱">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-9">
            <input type="password" class="form-control" id="inputPassword3" placeholder="密码">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input type="checkbox"> 自动登录
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">登录</button>
          </div>
        </div>
      </form>

    </div>
    <div class="powered">Powered by <a href="http://www.niuyifei.com" title="轻量级CMS内容管理系统" target="_blank">MayCMS</a></div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  }
}
</script>


