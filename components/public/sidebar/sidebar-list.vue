<template>
  <ul>
    <h3 class="section-title" v-show="title">{{title}}</h3>
    <li v-for="(item, index) in siderbarList" :key="index">
      <router-link tag="a" :to="item.link">
        <div class="icon-subscription">
          <img :src="item.icon" :alt="item.content">
        </div>
        <span class="subscription-title">{{item.content}}</span>
        <span class="update-quantity">{{item.count}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    siderbarList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.sider-list {
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
