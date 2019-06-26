<template>
  <div class="article">
    <iframe id='iFrame' class="iframe" :src="url" width="100%"   frameborder="0" height="7000" scrolling="no"  seamless></iframe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      url: '',
      widt:0
    }
  },
  created() {
    console.log(new Date())
    this.getURL('https://mp.weixin.qq.com/s?__biz=MzIzNzI0Njk2Mw==&mid=2247487498&idx=1&sn=80ee60b96aa1395dabe7ba6690ed7984&chksm=e8cad096dfbd5980df8fcec3ddcd307e8a572635e3aea30ef7480e078a7b1397410346b92cae&xtrack=1&scene=0&subscene=10000&clicktime=1561520541&ascene=7&devicetype=android-27&version=27000435&nettype=WIFI&abtest_cookie=BgABAAgACgALABIAEwAVAAcAnoYeACOXHgDFmR4A3JkeAPGZHgAJmh4AFJoeAAAA&lang=zh_CN&pass_ticket=Cxp%2Bt8C%2FeEdrnnqK3ADJE7hGaz5mPmlzWvhX3ohX4kPNNIRydXUNAWOuGnlJ81zX&wx_header=1')
    
  },
  mounted(){
    setInterval(function(){
      // console.log(document.getElementById('iFrame').document.getElementById('html').style)
      console.log(window.frames["iFrame"].document)
    },5000)
  },
  methods: {
    getURL(url) {
            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            let link = http + '//cors-anywhere.herokuapp.com/' + url;
            let that =this
            let xhr = new XMLHttpRequest();
            xhr.open('GET', link, true);
            xhr.send();
            xhr.onreadystatechange = function() {
              if (xhr.readyState == 4) {
                  if (xhr.status == 200) {
                    console.log(new Date())
                      let html = xhr.responseText; 
                      console.log(html.length)
                      html = html.replace(/data-src/g, "src"); 
                      let html_src = 'data:text/html;charset=utf-8,' + html; //解析码解决乱码
                      that.url = html_src
                      that.iframeLoad()
                  } else {
                      that.getURL('https://mp.weixin.qq.com/s?__biz=MzIzNzI0Njk2Mw==&mid=2247487498&idx=1&sn=80ee60b96aa1395dabe7ba6690ed7984&chksm=e8cad096dfbd5980df8fcec3ddcd307e8a572635e3aea30ef7480e078a7b1397410346b92cae&xtrack=1&scene=0&subscene=10000&clicktime=1561520541&ascene=7&devicetype=android-27&version=27000435&nettype=WIFI&abtest_cookie=BgABAAgACgALABIAEwAVAAcAnoYeACOXHgDFmR4A3JkeAPGZHgAJmh4AFJoeAAAA&lang=zh_CN&pass_ticket=Cxp%2Bt8C%2FeEdrnnqK3ADJE7hGaz5mPmlzWvhX3ohX4kPNNIRydXUNAWOuGnlJ81zX&wx_header=1')
                  }
              }
            } 
    },
    iframeLoad(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body{
  overflow: auto;
}
.article{
  width: 100%;
  height: 100%;

}
.iframe{
  width: 100%;
  max-height: 100000rem;
  overflow: auto;
}
</style>
