<template>
    <!-- <div class="leftMenu">
        <div style="width: 256px">
            <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
            </a-button>
            <a-menu
                :defaultSelectedKeys="['1']"
                :defaultOpenKeys="['2']"
                mode="inline"
                theme="dark"
                :inlineCollapsed="collapsed"
                >
                <template v-for="item in list">
                    <a-menu-item v-if="!item.children" :key="item.key">
                    <a-icon type="pie-chart" />
                    <span>{{ item.title }}</span>
                    </a-menu-item>
                    <sub-menu v-else :menu-info="item" :key="item.key" />
                </template>
            </a-menu>
        </div>
    </div> -->

    <div class="leftMenu">
        <Menu active-name="1-2" :open-names="['1']">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-analytics" />
                    Navigation One
                </template>
                <MenuGroup title="Item 1">
                    <MenuItem name="1-1"><router-link to="/table">Table</router-link></MenuItem>
                    <MenuItem name="1-2"><router-link to="/antView">ant-view</router-link></MenuItem>
                </MenuGroup>
                <MenuGroup title="Item 2">
                    <MenuItem name="1-3">Option 3</MenuItem>
                    <MenuItem name="1-4">Option 4</MenuItem>
                </MenuGroup>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-filing" />
                    Navigation Two
                </template>
                <MenuItem name="2-1">Option 5</MenuItem>
                <MenuItem name="2-2">Option 6</MenuItem>
                <Submenu name="3">
                    <template slot="title">Submenu</template>
                    <MenuItem name="3-1">Option 7</MenuItem>
                    <MenuItem name="3-2">Option 8</MenuItem>
                </Submenu>
            </Submenu>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="ios-cog" />
                    Navigation Three
                </template>
                <MenuItem name="4-1">Option 9</MenuItem>
                <MenuItem name="4-2">Option 10</MenuItem>
                <MenuItem name="4-3">Option 11</MenuItem>
                <MenuItem name="4-4">Option 12</MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
            collapsed: false,
            list: [
                {
                key: '1',
                title: '项目信息管理',
                path: '/infomationManage',
                icon:'iconfont icon-information'
                },
                {
                key: '2',
                title: '安全信息管理',
                path: '/safeInfoManage',
                icon:'iconfont icon-anquan',
                children: [
                    {
                    key: '2.1',
                    title: '安全风险管理',
                    path: '/safeRisk',
                    icon:'',
                    children: [
                        { 
                        key: '2.1.1',
                        title: '风险分类管理',
                        path: '/riskClassifyManage',
                        icon:'',
                        },
                        {
                            key: '2.1.2',
                            title: '分类辨识',
                            path: '/classifyIdentity',
                            icon:'',
                        }
                    ],
                    },
                ],
                },
                {
                key: '3',
                title: '质量信息管理',
                path: '/qualityInfoManage',
                icon:'iconfont icon-zhiliang',
                children:[
                    {
                        key: '3.1',
                        title: '质量控制点管理',
                        path: '/controlPointManage',
                        icon:'',
                    }
                ]
                }
            ],
        };
    },
    methods: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed;
        },
    },
}
</script>
<style>
.ant-menu-root {
    height: 800px;
}
</style>
