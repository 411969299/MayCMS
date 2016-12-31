<template>
  <!-- 增加文章 -->
          <div class="row">
            <div class="addArticle">
              <div class="pbhead"></div>
              <div class="pbhead_dec">
                <ol class="breadcrumb">
                  <li><a href="#">文章列表</a></li>
                  <li><a href="#">增加文章</a></li>
                </ol>
              </div>
              <div class="addArticle_tap">
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" ><a href="#">常规选项</a></li>
                  <li role="presentation" class="active"><a href="#">高级选项</a></li>
                </ul>
              </div>
              <div class="addArticle_tap_con">
                <div class="addArticle_tap_0" style="display: none">
                  <div class="row">
                    <div class="col-md-1">文章标题</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                    <div class="col-md-1">简略标题</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">自定义属性</div>
                    <div class="col-md-10">
                      <label for="">
                        <input type="checkbox">头条
                      </label>
                      <label for="">
                        <input type="checkbox">头条
                      </label>
                      <label for="">
                        <input type="checkbox">头条
                      </label>
                      <label for="">
                        <input type="checkbox">头条
                      </label>
                      <label for="">
                        <input type="checkbox">头条
                      </label>
                      <label for="">
                        <input type="checkbox">头条
                      </label>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-1">TAG标签</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">权重</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">缩略图</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章来源</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                    <div class="col-md-1">作者：</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章主栏目</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章内容</div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                  </div>


                </div>
                <div class="addArticle_tap_1" style="display: none">
                  <div class="row">
                    <div class="col-md-1">评论选项</div>
                    <div class="col-md-2">
                      <label for="">
                        <input type="radio" name="pl">允许评论
                      </label>
                      <label for="">
                        <input type="radio" name="pl">禁止评论
                      </label>
                    </div>
                    <div class="col-md-1">浏览次数</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章排序</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">阅读权限</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">关键字</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">文章摘要</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-1">自定义文件名</div>
                    <div class="col-md-2">
                      <input type="text">
                    </div>
                  </div>
                </div>
                <div class="addArticle_con_btn">
                  <div class="btn btn-default">确定</div>
                  <div class="btn btn-default">返回</div>
                </div>
              </div>
            </div>
          </div>

</template>

<script>

export default {
  name: 'articleAdd',
  data () {
    return {

    }
  }
}
</script>
