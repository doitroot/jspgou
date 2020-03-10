

//前端推荐列表组件
const recommendListTpl = `
<div class="pg-brand">
  <div class="pg-brand-title">
    <img class="pg-brand__img" :src="imgUrl+'/img/title-tuijian.png'" />
  </div>
  <div class="pg-brand-items" :style="{'paddingBottom':bottom}" v-if="recommendList.length>0">
    <div class="pg-recommend-item" v-for="(item,index) in recommendList" :key="index">
      <div  @click="openDetail(item.id,item.storeId)">
        <img class="pg-recommend-img" :src="baseUrl+item.coverImage" />
        <div class="pg-recommend-title">{{item.name}}</div>
        <div class="pg-recommend-price">
          <span class="shop__status">￥ </span>
          <span class="t-color">{{$float(item.salePrice)}}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="van-list__finished-text" v-else>正在加载...</div>
</div>
`
Vue.component('recommend-list', {
  template: recommendListTpl,
  props: {
    size:{
      type:[Number],
      default:20
    },
    bottom:{
      type:[String],
      default:'50px'
    }
  },
  data() { // 数据
    return {
      imgUrl:cms.imgUrl,
      baseUrl:cms.url,
      recommendList:[]
    }
  },
 
  methods: {
    openDetail(id,storeId){//查看详情
      location.href=this.baseUrl+'/product-detail.htm?productId='+id+'&storeId='+storeId
    },
    getList(){//获取推荐列表
      let params = {
        resultSize:this.size
      }
      recommendList(params).then((res) => {//获取数据列表
        if(res.code == 200){
          this.recommendList=res.data
        } else {
          this.$toast(res.message)
        }
      }).catch(()=>{
        this.$toast('服务异常')
      })
    }
  },
  created() {
    this.getList()
    // 生命钩子
  }
})

const uploadImgTpl = `
<div class="upload-wrap">
  <div v-if="imgFiles.length >0"  class="upload-wrap">
    <div  class="up-upload" v-for="(item,index) in imgFiles" :key="index">
      <img class="up-img" :src="item" />
    </div>
  </div>
  <van-uploader v-show="imgFiles.length<num" class="up-upload up-dashed" 
  :after-read="selectFile" accept="image/gif, image/jpeg,image/jpg,image/png" multiple>+
  </van-uploader>
</div>
 `
 Vue.component('upload-img', {
   template: uploadImgTpl,
   props: {
     imgFiles:{
       type:Array,
       default:[]
     },
     num:{
       type:Number,
       default:5
     }
   },
   data() { // 数据
     return {
       clearShow: true,
       imgObject: {},
       uploadInfo: '',
       baseUrl: cms.url
     }
   },
   methods: {
     selectFile(files) { // 选择上传的文件
      let formData = new FormData()
        formData.append("uploadFile", files.file);
        this.startUpLoad(formData)
      },
      startUpLoad(data){
        memberUpload(data).then(res => {
          if (res.code === 200) {
            this.imgFiles.push(res.data)
            this.$emit('change',this.imgFiles)
          } else {
            this.$toast(res.message)
          }
        })
      },
     deleteImg() {
       this.$emit('change',null,this.data)
     }
   },
   created() {
     // 生命钩子
   },
   computed: {
     // 计算属性
   }
 })
