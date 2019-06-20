const apiMethods = {
  methods:{
    apiGet(url,data){
      return new Promise((resolve,reject) => {
        axios.get(url,data).then((res)=>{
          resolve(res.data)
        },(res)=>{
          reject(res)
          bus.$message({
            message:"网络错误",
            type:"waring"
          })
        })
      })
    },
    apiPost(url,data){
      return new Promise((resolve,reject)=>{
        axios.post(url,data).then((res)=>{
          resolve(res.data)
        }).catch((res)=>{
          resolve(res)
          bus.$message({
            message: "网络错误",
            type:"waring"
          })
        })
      })
    }
  }
}
