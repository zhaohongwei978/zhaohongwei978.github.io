# 如何自己实现v-model


## 实现一个v-model双向数据绑定 

父组件如果给子组件传了v-model,子组件默认可以通过value来接收到父组件的属性值，如果不使用value可以通过自定义的model来实现。
```$xslt
//父组件
<template>
  <div id="app">
    <input type="text" v-model="val">
    <CustomModel v-model="val" @onChange=onChange />
  </div>
</template>

<script>
import CustomModel from './components/CustomModel.vue'

export default {
  name: 'App',
 components: {
    CustomModel
  },
  data(){
   return{
      val:'10'  
   }
  },
  methods:{
    onChange(val){
      console.log('父组件的值',val)
      this.val = val
    }
  },
}
</script>
```
```$xslt
//子组件
<template>
  <div>
    <input type="text" :value="aa" @input="change" />
  </div>
</template>
<script>
export default {
    //使用自定义的model
    model:{
        prop:'aa',
        event:'change'
    },
    //如果不使用自定义的model，可以使用 props:{ value:String }
  props: {
    aa: String,
  },
  methods: {
    change(event) {
      this.$emit('onChange',event.target.value)
    },
  },
};
</script>
```
