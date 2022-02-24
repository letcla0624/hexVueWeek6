"use strict";(self["webpackChunkhexVueWeek6"]=self["webpackChunkhexVueWeek6"]||[]).push([[480],{422:function(e,t,a){function i(e){return{all:e=e||new Map,on:function(t,a){var i=e.get(t);i?i.push(a):e.set(t,[a])},off:function(t,a){var i=e.get(t);i&&(a?i.splice(i.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var i=e.get(t);i&&i.slice().map((function(e){e(a)})),(i=e.get("*"))&&i.slice().map((function(e){e(t,a)}))}}}a.d(t,{Z:function(){return n}});const s=i();var n=s},7476:function(e,t,a){a.d(t,{Z:function(){return p}});var i=a(3396),s=a(7139);const n={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},r={class:"breadcrumb mb-5"},o=["onClick"];function c(e,t,a,c,l,d){return(0,i.wg)(),(0,i.iD)("nav",n,[(0,i._)("ol",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.breadcrumbList,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t+`_${e}`,class:"breadcrumb-item",onClick:e=>d.routeTo(t)},(0,s.zw)(e.name),9,o)))),128))])])}var l={data(){return{breadcrumbList:[]}},watch:{$route(){this.nowBreadcrumb()}},methods:{nowBreadcrumb(){this.breadcrumbList=this.$route.meta.breadcrumb},routeTo(e){this.breadcrumbList[e].link&&this.$router.push(this.breadcrumbList[e].link)}},mounted(){this.nowBreadcrumb()}},d=a(89);const u=(0,d.Z)(l,[["render",c]]);var p=u},9480:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var i=a(3396),s=a(7139);const n={class:"container mb-5"},r=(0,i._)("h1",{class:"text-center py-3"},"產品頁",-1),o={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3"},c={class:"card"},l=["src"],d={class:"card-body"},u={class:"card-title text-truncate"},p={class:"card-text text-truncate"},g={class:"text-end"},h={class:"text-danger fw-bold ms-2"},m=(0,i.Uk)("$NTD "),b={class:"fs-3"},_={class:"card-footer"},v={class:"btn-group w-100"},w=(0,i.Uk)("商品資訊"),f=["onClick","disabled"],k={key:0,class:"spinner-border spinner-border-sm",role:"status"},C=(0,i._)("span",{class:"visually-hidden"},"Loading...",-1),x=[C],y=(0,i.Uk)(" 加入購物車 ");function P(e,t,a,C,P,$){const D=(0,i.up)("BreadComponent"),L=(0,i.up)("router-link"),Z=(0,i.up)("PageComponent");return(0,i.wg)(),(0,i.iD)("div",n,[r,(0,i.Wm)(D),(0,i._)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(P.products,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"col",key:e.id},[(0,i._)("div",c,[(0,i.Wm)(L,{to:`/prod/${e.id}`},{default:(0,i.w5)((()=>[(0,i._)("img",{src:e.imageUrl,class:"card-img-top",alt:"",style:{height:"200px","object-fit":"cover"}},null,8,l)])),_:2},1032,["to"]),(0,i._)("div",d,[(0,i._)("h5",u,(0,s.zw)(e.title),1),(0,i._)("p",p,(0,s.zw)(e.description),1),(0,i._)("p",g,[(0,i._)("del",null,"$NTD "+(0,s.zw)(e.origin_price),1),(0,i._)("span",h,[m,(0,i._)("b",b,(0,s.zw)(e.price),1)])])]),(0,i._)("div",_,[(0,i._)("div",v,[(0,i.Wm)(L,{to:`/prod/${e.id}`,class:"btn btn-outline-dark w-50"},{default:(0,i.w5)((()=>[w])),_:2},1032,["to"]),(0,i._)("button",{type:"button",class:"btn btn-warning w-50",onClick:t=>$.addCart(e.id),disabled:P.isLoading===e.id},[P.isLoading===e.id?((0,i.wg)(),(0,i.iD)("div",k,x)):(0,i.kq)("",!0),y],8,f)])])])])))),128))]),(0,i.Wm)(Z,{pages:P.pagination,onEmitPage:$.getProducts},null,8,["pages","onEmitPage"])])}var $=a(9242);const D={class:"my-5","aria-label":"Page navigation"},L={class:"pagination justify-content-center"},Z=(0,i._)("span",{"aria-hidden":"true"},[(0,i._)("i",{class:"bi bi-chevron-left"})],-1),z=[Z],W=["onClick"],B=(0,i._)("span",{"aria-hidden":"true"},[(0,i._)("i",{class:"bi bi-chevron-right"})],-1),M=[B];function T(e,t,a,n,r,o){return(0,i.wg)(),(0,i.iD)("nav",D,[(0,i._)("ul",L,[(0,i._)("li",{class:(0,s.C_)(["page-item",{disabled:1===a.pages.current_page}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,$.iM)((e=>o.emitPage(a.pages.current_page-1)),["prevent"]))},z)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.pages.total_pages,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{class:(0,s.C_)(["page-item",{active:e===a.pages.current_page}]),key:t},[(0,i._)("a",{class:"page-link",href:"#",onClick:(0,$.iM)((t=>o.emitPage(e)),["prevent"])},(0,s.zw)(e),9,W)],2)))),128)),(0,i._)("li",{class:(0,s.C_)(["page-item",{disabled:a.pages.current_page===a.pages.total_pages}])},[(0,i._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,$.iM)((e=>o.emitPage(a.pages.current_page+1)),["prevent"]))},M)],2)])])}var U={props:["pages"],methods:{emitPage(e){this.$emit("emit-page",e)}}},H=a(89);const K=(0,H.Z)(U,[["render",T]]);var N=K,Y=a(422),j=a(7476),q={data(){return{products:[],pagination:{},isLoading:""}},components:{PageComponent:N,BreadComponent:j.Z},methods:{getProducts(e=1){let t=this.$loading.show();this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/letcla/products?page=${e}`).then((e=>{t.hide(),this.products=e.data.products,this.pagination=e.data.pagination})).catch((e=>{t.hide(),console.dir(e)}))},addCart(e,t=1){this.isLoading=e;const a={product_id:e,qty:t};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/letcla/cart",{data:a}).then((e=>{alert(e.data.message),this.isLoading="",Y.Z.emit("get-cart")})).catch((e=>{console.dir(e)}))}},mounted(){this.getProducts()}};const E=(0,H.Z)(q,[["render",P]]);var V=E}}]);
//# sourceMappingURL=480.cd565e17.js.map