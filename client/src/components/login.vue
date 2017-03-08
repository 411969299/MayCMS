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
          <label for="email" class="col-sm-2 control-label">邮箱</label>
          <div class="col-sm-9">
            <input type="email" v-model="email" class="form-control" id="email" placeholder="邮箱">
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-9">
            <input type="password" v-model="password" class="form-control" id="password" placeholder="密码">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <input id="autoSignIn" v-model="autoSignIn" type="checkbox"> 自动登录
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" @click="signIn" class="btn btn-default">登录</button>
          </div>
        </div>
      </form>

    </div>
    <div class="powered">Powered by <a href="http://www.niuyifei.com" title="轻量级CMS内容管理系统" target="_blank">MayCMS</a></div>
  </div>
</template>

<script>
  import root from '../setting';
  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
        autoSignIn: true
      }
    },
    methods: {
      signIn: function (e) {
        //console.log(e)
        var me = this
        this.$http.put(root.baseurl +'api/account/sign-in', {
          email: me.email,
          password: me.password,
          //captcha: $scope.captcha.toLowerCase(),
          autoSignIn: me.autoSignIn
        }).then(function () {
          me.$router.push({name:'manage'})
        }, function (res) {
          //$scope.getCaptcha();

          var data = res.data;
          console.log(data)
//      switch (_.get(data, 'error.code')) {
//        case 'WRONG_EMAIL_OR_PASSWORD':
//          $scope.wrongEmailOrPassword = true;
//          break;
//        case 'WRONG_CAPTCHA':
//          $scope.wrongCaptcha = true;
//      }

        });
      }
    }
  }
</script>


