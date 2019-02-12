<template>
  <aside class="siderbar">
    <div class="default-content">
      <ul>
        <li class="active">
          <a href="/"><img src="@/assets/img/home-active.png" alt="首页">首页</a>
        </li>
        <li>
          <a href="#"><img src="@/assets/img/popular.png" alt="时下流行">时下流行</a>
        </li>
        <li>
          <a href="#"><img src="@/assets/img/subscriptions.png" alt="订阅内容">订阅内容</a>
        </li>
      </ul>
    </div>
    <div class="media-library">
      <ul>
        <h3 class="section-title">媒体库</h3>
        <li>
          <a href="/"><img src="@/assets/img/history.png" alt="历史记录">历史记录</a>
        </li>
        <li>
          <a href="#"><img src="@/assets/img/watch-later.png" alt="稍后观看">稍后观看</a>
        </li>
        <li>
          <a href="#"><img src="@/assets/img/liked.png" alt="顶过的视频">顶过的视频</a>
        </li>
      </ul>
    </div>
    <div class="subscription-content">
      <ul>
        <h3 class="section-title">订阅内容</h3>
        <li>
          <a href="/">
            <div class="icon-subscription">
              <img src="@/assets/img/GitHubTraining.jpg" alt="GitHub Training & Guides">
            </div>
            <span class="subscription-title">GitHub Training & Guides</span>
            <span class="update-quantity">1</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="icon-subscription">
              <img src="@/assets/img/泛式FunShiki.jpg" alt="泛式FunShiki">
            </div>
            <span class="subscription-title">泛式FunShiki</span>
            <span class="update-quantity">1</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="icon-subscription">
              <img src="@/assets/img/GitHub.jpg" alt="GitHub">
            </div>
            <span class="subscription-title">GitHub</span>
            <span class="update-quantity">2</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="icon-subscription">
              <img src="@/assets/img/add.png" alt="浏览频道">
            </div>
            <span class="subscription-title">浏览频道</span>
          </a>
        </li>
      </ul>
      <sidebar-list title="订阅内容" :siderbarList="siderbar"></sidebar-list>
    </div>
    <div class="subscription-content">
      <ul>
        <li>
          <a href="/">
            <div class="icon-subscription">
              <img src="@/assets/img/setting.png" alt="设置">
            </div>
            <span class="subscription-title">设置</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="icon-subscription">
              <img src="@/assets/img/report.png" alt="举报记录">
            </div>
            <span class="subscription-title">举报记录</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="icon-subscription">
              <img src="@/assets/img/help.png" alt="帮助">
            </div>
            <span class="subscription-title">帮助</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="icon-subscription">
              <img src="@/assets/img/feedback.png" alt="发送反馈">
            </div>
            <span class="subscription-title">发送反馈</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="footer-links-primary">
        <a href="#">关于</a>
        <a href="#">新闻</a>
        <a href="#">版权</a>
        <a href="#">版权</a>
        <a href="#">广告</a>
        <a href="#">开发者：笨鸟先生</a>
      </div>
      <div class="footer-links-secondary">
        <a href="#">条款</a>
        <a href="#">隐私权</a>
        <a href="#">政策和安全</a>
        <a href="#">测试新功能</a>
      </div>
      <div class="copyright">© 2018 笨鸟先生</div>
      <div class="copyright">© 2018 笨鸟先生</div>
    </div>
  </aside>
</template>

<script>
import axios from 'axios'
import {ERR_OK} from 'assets/js/config'
import SidebarList from './sidebar-list'
export default {
  // created () {
  //   axios.get('/api/siderbar')
  //     .then(res => {
  //       res = res.data
  //       if (res.errno === ERR_OK) {
  //         this.siderbar = res.data
  //       }
  //     })
  //     .catch(err => {
  //       console.log('sidebar err:' + err)
  //     })
  // },
  data () {
    return {
      siderbar: []
    }
  },
  components: {
    SidebarList
  }
}
</script>

<style scoped>
.siderbar {
  position: fixed;
  top: 56px;
  bottom: -120px;
  z-index: 100;
  left: 0;
  width: 240px;
  background: #F5F5F5;
  transition-property: visibility;
  font-size: 10px;
  overflow-y: auto;
}
.default-content {
  border-bottom: 1px solid hsl(0, 0%, 93.3%);
  padding: 12px 0;
}
.media-library {
  padding: 8px 0;
  border-bottom: 1px solid hsl(0, 0%, 93.3%);
}
.subscription-content {
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid hsl(0, 0%, 93.3%);
}
li {
  /* padding: 0 24px; */
  min-height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
}
li.active {
  background: rgba(0, 0, 0, 0.1);
}
.section-title {
  padding: 8px 24px;
  color: hsla(0, 0%, 6.7%, .6);
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: .007px;
  text-transform: uppercase;
}
li a {
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0 24px;
  min-height: 40px;
  color:  hsl(0, 0%, 6.7%);
  display: inline-flex;
  align-items: center;
  width: 100%;
}
li a:hover {
  background: #EBEBEB
}
.subscription-title {
  width: 112px;
  margin-right: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  font-weight: 400;
  flex: 1;
  line-height: 2.1rem;
}
.update-quantity {
  opacity: .4;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
}
a img {
  margin-right: 24px;
  width: 24px;
  height: 24px;
  /* 图标未经过颜色 */
  /* color: hsl(0, 0%, 53.3%); */
}
.icon-subscription {
  height: 24px;
  width: 24px;
  margin-right: 24px;
  border-radius: 50%;
  overflow: hidden;
}
/* a img.active {
  color: #ff0000;
} */
.footer-links-primary {
  padding: 24px 27px 0;
  border-top: 1px solid hsl(0, 0%, 93.3%);
}
.footer-links-primary > a, .footer-links-secondary > a {
  display: inline-block !important;
  text-decoration: none;
  color: hsl(0, 0%, 53.3%);
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2.1rem;
  white-space: nowrap;
}
.footer-links-primary > a:not(:last-child), .footer-links-secondary > a:not(:last-child) {
  margin-right: 8px;
}
.footer-links-secondary {
  padding: 12px 27px 0;
}
.copyright {
  padding: 24px 27px;
  margin-top: 16px;
  color: hsla(0, 0%, 6.7%, .6);
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2.1rem;
}

</style>
