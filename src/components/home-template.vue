<template>
    <div class="homeTemplate">
        <div class="header clear">
            <div class="logo">LOGO</div>
            <div class="login">注册/登录</div>
        </div>
        <div class="main clear">
            <div class="leftMenu">
                <left-menu></left-menu>
            </div>
            <div class="rightCon">
                <router-view></router-view>
            </div>
        </div>
        <div class="footer"> Welcome to 我的第一个ant-design 项目页面</div>
    </div>
</template>
<script>
import LeftMenu from '@/views/leftMenu.vue'
export default {
    components: {
        LeftMenu
    }
}
</script>
<style>
.clear::after {
    content: '';
    display: block;
    clear: both;
}
.homeTemplate {
    /* width: 1024px; */
    height: 100%;
    box-sizing: border-box;
}
.homeTemplate .header {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #000;
    color: #fff; 
    box-sizing: border-box;
}
.homeTemplate .header .logo {
    float: left;
    width: 200px;
    text-align: center
}
.homeTemplate .header .login {
    float: right;
    width: 200px;
    text-align: center;
}

.homeTemplate .main {
    width: 100%;
    padding: 10px 0;
}
.homeTemplate .main .leftMenu {
    float: left;
    width: 256px;
    /* padding: 0; */
}
.homeTemplate .main .rightCon {
    float: left;
}


.homeTemplate .footer {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
</style>
