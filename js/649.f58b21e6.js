"use strict";(self["webpackChunkdanmemo_toolbox"]=self["webpackChunkdanmemo_toolbox"]||[]).push([[649],{24774:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(66252),i=n(2262),s=n(92033),a=n(9978);const o=Object.assign(Object.assign({},a.Z.props),{trigger:String,xScrollable:Boolean,onScroll:Function}),l=(0,r.aZ)({name:"Scrollbar",props:o,setup(){const e=(0,i.iH)(null),t={scrollTo:(...t)=>{var n;null===(n=e.value)||void 0===n||n.scrollTo(t[0],t[1])},scrollBy:(...t)=>{var n;null===(n=e.value)||void 0===n||n.scrollBy(t[0],t[1])}};return Object.assign(Object.assign({},t),{scrollbarInstRef:e})},render(){return(0,r.h)(s.Z,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),d=l},67649:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});n(68309);var r=n(66252),i=n(49963),s={id:"main_listadv"},a={id:"filterlogo_listadv"},o=(0,r._)("p",{id:"filtertext_listadv"},"Select an adventurer",-1),l={id:"filter_listadv"},d={id:"main_inlist_listadv"},u={key:0},c=(0,r._)("p",null," Loading... ",-1),f=[c],h=["onClick","title"],v=["src"],_=["src"];function m(e,t,n,c,m,g){var p=(0,r.up)("n-grid-item"),w=(0,r.up)("n-grid"),b=(0,r.up)("n-scrollbar");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",a,[o,(0,r._)("button",{id:"filterbutton_listadv",onClick:t[0]||(t[0]=function(e){return g.goFilter()})},"Open Filter")]),(0,r._)("div",l,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.filterInput=e}),type:"text",placeholder:"Put an adventurer name or title...",onChange:t[2]||(t[2]=function(){return g.searchFilter&&g.searchFilter.apply(g,arguments)})},null,544),[[i.nr,m.filterInput]]),(0,r._)("button",{id:"loadfilterButton_listadv",onClick:t[3]||(t[3]=function(e){return g.searchFilter()})},"Load")]),(0,r.Wm)(b,{id:"main_outlist_listadv",trigger:"none"},{default:(0,r.w5)((function(){return[(0,r._)("div",d,[0==m.dataAdv.length?((0,r.wg)(),(0,r.iD)("div",u,f)):(0,r.kq)("",!0),(0,r.Wm)(w,{"x-gap":0,"y-gap":0,cols:m.n_columns},{default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.filteredData,(function(e){return(0,r.wg)(),(0,r.j4)(p,{key:e.id_order,id:"cell_listadv"},{default:(0,r.w5)((function(){return[(0,r._)("div",{id:"imagecell_listadv",onClick:function(t){return g.gotoCharPage(e.id_adventurers)},title:"["+e.title+"] "+e.name},[(0,r._)("img",{alt:"Frame",src:g.decideBase(e.stars,e.have_hero_asc,e.hero_festa)},null,8,v),(0,r._)("img",{alt:"Frame_front",src:g.decideBaseFrame(e.stars,e.have_hero_asc,e.hero_festa)},null,8,_)],8,h)]})),_:2},1024)})),128))]})),_:1},8,["cols"])])]})),_:1})])}n(38862),n(57658),n(57327),n(41539),n(82772);var g=n(24774),p=n(94433),w=n(77596),b=n(17848),k=n(19321);n(9669);const C={components:{NScrollbar:g.Z,NGrid:p.Z,NGridItem:w.ZP,NButton:b.ZP,NTooltip:k.Z},data:function(){return{dataAdv:[],filteredData:[],filterInput:"",n_columns:9,screenWidth:window.innerWidth}},beforeMount:function(){var e=window.sessionStorage.getItem("adv_list");if(null==e){var t=n(62620);this.dataAdv=t,this.filteredData=t,window.sessionStorage.setItem("adv_list",JSON.stringify(t))}else this.dataAdv=JSON.parse(e),this.filteredData=JSON.parse(e);this.onResize()},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.screenWidth=window.innerWidth,this.screenWidth>1e3?this.n_columns=9:this.screenWidth>785?this.n_columns=7:this.screenWidth>600?this.n_columns=5:this.n_columns=3},getImg:function(e){return n(19141)("./"+e+".png")},gotoCharPage:function(e){this.$router.push({name:"adventurer",params:{id:e}})},searchFilter:function(){var e=this.dataAdv,t=this.filterInput.toLowerCase(),n=e.filter((function(e){return e.name.toLowerCase().indexOf(t)>-1||e.title.toLowerCase().indexOf(t)>-1}));this.filteredData=n},goFilter:function(){this.$router.push({name:"filter_adv"})},decideBase:function(e,t,r){switch(e){case 1:return n(80534);case 2:return n(10683);case 3:return n(44375);case 4:return n(r?5194:t?47289:15615);default:return n(80534)}},decideBaseFrame:function(e,t,r){switch(e){case 1:return n(36663);case 2:return n(46854);case 3:return n(40143);case 4:return n(r?5194:t?33972:704);default:return n(36663)}}}};var F=n(83744);const O=(0,F.Z)(C,[["render",m]]),S=O}}]);
//# sourceMappingURL=649.f58b21e6.js.map