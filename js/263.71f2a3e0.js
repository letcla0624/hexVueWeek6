"use strict";(self["webpackChunkhexVueWeek6"]=self["webpackChunkhexVueWeek6"]||[]).push([[263],{422:function(t,e,r){function s(t){return{all:t=t||new Map,on:function(e,r){var s=t.get(e);s?s.push(r):t.set(e,[r])},off:function(e,r){var s=t.get(e);s&&(r?s.splice(s.indexOf(r)>>>0,1):t.set(e,[]))},emit:function(e,r){var s=t.get(e);s&&s.slice().map((function(t){t(r)})),(s=t.get("*"))&&s.slice().map((function(t){t(e,r)}))}}}r.d(e,{Z:function(){return a}});const i=s();var a=i},7476:function(t,e,r){r.d(e,{Z:function(){return p}});var s=r(3396),i=r(7139);const a={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},n={class:"breadcrumb mb-5"},o=["onClick"];function d(t,e,r,d,c,l){return(0,s.wg)(),(0,s.iD)("nav",a,[(0,s._)("ol",n,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.breadcrumbList,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e+`_${t}`,class:"breadcrumb-item",onClick:t=>l.routeTo(e)},(0,i.zw)(t.name),9,o)))),128))])])}var c={data(){return{breadcrumbList:[]}},watch:{$route(){this.nowBreadcrumb()}},methods:{nowBreadcrumb(){this.breadcrumbList=this.$route.meta.breadcrumb},routeTo(t){this.breadcrumbList[t].link&&this.$router.push(this.breadcrumbList[t].link)}},mounted(){this.nowBreadcrumb()}},l=r(89);const u=(0,l.Z)(c,[["render",d]]);var p=u},9263:function(t,e,r){r.r(e),r.d(e,{default:function(){return N}});var s=r(3396),i=r(7139),a=r(9242);const n={class:"container"},o=(0,s._)("h1",{class:"text-center py-3"},"產品內頁",-1),d={class:"row row-cols-1 row-cols-md-2 g-3"},c={class:"col"},l=["src","alt"],u={class:"otherPics d-flex"},p=["src","alt"],m={class:"col"},h={class:"d-flex align-items-center mb-3"},b={class:"h3 mb-0 me-2"},g={class:"badge bg-warning text-dark"},w={class:"h5 text-secondary lh-base"},f={class:"text-end"},v={class:"text-danger fw-bold ms-2"},y=(0,s.Uk)("$NTD "),_={class:"fs-3"},k={class:"d-grid gap-2 d-md-flex"},x={class:"input-group"},C=["disabled"],$={key:0,class:"spinner-border spinner-border-sm",role:"status"},q=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),L=[q],U=(0,s.Uk)(" 加入購物車 ");function D(t,e,r,q,D,z){const Z=(0,s.up)("BreadComponent");return(0,s.wg)(),(0,s.iD)("div",n,[o,(0,s.Wm)(Z),(0,s._)("div",d,[(0,s._)("div",c,[(0,s._)("img",{src:D.prod.imageUrl,alt:D.prod.category,class:"w-100",style:{height:"500px","object-fit":"cover"}},null,8,l),(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(D.prod.imagesUrl,((t,r)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[""!==t?((0,s.wg)(),(0,s.iD)("img",{key:0,src:t,alt:`${D.prod.category}${Number.parseInt(r)+1}`,class:(0,i.C_)(["rounded cursor-pointer me-2 mt-2",[{border:t===D.prod.imageUrl},{"border-danger":t===D.prod.imageUrl},{"border-2":t===D.prod.imageUrl}]]),onClick:e[0]||(e[0]=t=>z.changeImg(t))},null,10,p)):(0,s.kq)("",!0)])))),128))])]),(0,s._)("div",m,[(0,s._)("div",h,[(0,s._)("h1",b,(0,i.zw)(D.prod.title),1),(0,s._)("span",g,(0,i.zw)(D.prod.category),1)]),(0,s._)("h2",w,(0,i.zw)(D.prod.description),1),(0,s._)("p",f,[(0,s._)("del",null,"$NTD "+(0,i.zw)(D.prod.origin_price),1),(0,s._)("span",v,[y,(0,s._)("b",_,(0,i.zw)(D.prod.price),1)])]),(0,s._)("div",k,[(0,s._)("div",x,[(0,s._)("button",{type:"button",class:"btn btn-dark",onClick:e[1]||(e[1]=(...t)=>z.minus&&z.minus(...t))},"-"),(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":e[2]||(e[2]=t=>D.qty=t),readonly:""},null,512),[[a.nr,D.qty]]),(0,s._)("button",{type:"button",class:"btn btn-dark",onClick:e[3]||(e[3]=(...t)=>z.add&&z.add(...t))},"+")]),(0,s._)("button",{type:"button",class:"btn btn-warning w-100",onClick:e[4]||(e[4]=t=>z.addCart(D.prod.id,D.qty)),disabled:D.isLoading===D.prod.id},[D.isLoading===D.prod.id?((0,s.wg)(),(0,s.iD)("div",$,L)):(0,s.kq)("",!0),U],8,C)])])])])}var z=r(422),Z=r(7476),B={data(){return{prod:[],qty:1,isLoading:""}},components:{BreadComponent:Z.Z},methods:{getProd(){let t=this.$loading.show();const e=this.$route.params.id;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/letcla/product/${e}`).then((e=>{t.hide(),this.prod=e.data.product,this.prod.imagesUrl.unshift(this.prod.imageUrl)})).catch((e=>{t.hide(),console.dir(e)}))},addCart(t,e=1){this.isLoading=t;const r={product_id:t,qty:e};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/letcla/cart",{data:r}).then((t=>{alert(t.data.message),this.isLoading="",z.Z.emit("get-cart")})).catch((t=>{console.dir(t)}))},add(){this.qty++},minus(){this.qty--,this.qty<=1&&(this.qty=1)},changeImg(t){this.prod.imageUrl=t.target.currentSrc}},mounted(){this.getProd()}},T=r(89);const I=(0,T.Z)(B,[["render",D]]);var N=I}}]);
//# sourceMappingURL=263.71f2a3e0.js.map