<template>
    <div>
        <h3>ant-view-table</h3>
        <a-table :columns="columns" :data-source="data">
            <!-- <a slot="name" slot-scope="text">{{ text }}</a> -->
            <span slot="action" slot-scope="record">
                <p @click="handleEdit(record.key)" style="cursor: pointer; color: #008dff;">编辑</p>
                <p @click="handleEdit2(record.key)"  style="cursor: pointer; color: red;">删除</p>
            </span>
        </a-table>
    </div>
</template>
<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
    width: 300,
    align: 'left'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default {
    data() {
        return {
            data,
            columns,
        };
    },
    methods: {
        handleEdit(val) {
            console.log(val)
            this.$success({
                title: 'This is a notification message',
                content: val,
            });
        }
    }
}
</script>
