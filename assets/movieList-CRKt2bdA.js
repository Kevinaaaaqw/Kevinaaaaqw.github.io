import{u as B,t as P,z as F}from"./index-BO0akYrp.js";import{d as I,g as d,k as w,c as y,b as l,w as t,u as e,o as C,A as Y,z as m,f as o,t as p,ac as E,a as n,x as v,B as T,C as M,bY as L,bZ as V,b_ as R,b$ as x,c1 as Z,j as k}from"./index-BVQoGNwy.js";const $={class:"container mb-50px"},q=["src"],G={class:"p-1 box-border w-full flex gap-2 flex-wrap justify-center items-center"},H={class:"w-full flex flex-justify-center mt-2"},J=n("h3",{class:"text-4xl"}," 詳細資料 ",-1),K={class:"w-full max-sm-mt-10"},O={class:"w-full flex justify-center"},Q=["src"],W=n("h3",{class:"text-2xl font-bold"}," 刪除收藏 ",-1),X=n("div",{class:"text-xl"}," 確定要刪除收藏? ",-1),ae=I({__name:"movieList",setup(ee){const{getMovieList:h,removeMovie:N}=B(),b=d(h()),j=w(()=>b.value.slice(u.value*(i.value-1),u.value*i.value)),i=d(1),u=d(10),_=w(()=>b.value.length),z=w(()=>Math.ceil((_.value??0)/u.value)),f=d(!1),D=g=>{r.value={...g}},r=d({Title:"",Year:"",imdbID:"",Type:"",Poster:""}),c=d(!1),S=g=>{const a=N(g),s={duration:5e3,position:"bottom-right"};switch(a.status){case"failure":a.reason==="NoDataProvided"?k({title:"錯誤",message:"沒有添加檔案",type:"error",...s}):a.reason==="MovieNotFound"&&k({title:"錯誤",message:"該項目沒有在清單中",type:"error",...s});break;case"success":a.message==="MovieRemovedSuccessfully"&&(k({title:"成功",message:"刪除項目成功",type:"success",...s}),b.value=h(),c.value=!1);break}},U=()=>({backgroundColor:"#F5F7FA",color:"#909399"}),A=()=>({color:"#303133",textAlign:"center"});return(g,a)=>(C(),y("div",$,[l(e(Z),{locale:e(F)},{default:t(()=>[l(e(Y),{"header-cell-style":U,"cell-style":A,"empty-text":"查無資料",border:"",class:"mb-4 mt-3",data:j.value},{default:t(()=>[l(e(m),{align:"center",prop:"Year",label:"發行年份"}),l(e(m),{align:"center",prop:"Title",label:"電影名稱"}),l(e(m),{align:"center",prop:"Type",width:"100px",label:"類型"},{default:t(s=>[o(p(e(P)(s.row.Type)),1)]),_:1}),l(e(m),{align:"center","min-width":"100px",label:"圖片"},{default:t(s=>[s.row.Poster!="N/A"?(C(),y("img",{key:0,class:"w-full object-contain max-h-200px",src:s.row.Poster,alt:"電影圖片"},null,8,q)):E("",!0)]),_:1}),l(e(m),{align:"center","min-width":"120px",fixed:"right",prop:"",label:"操作"},{default:t(s=>[n("div",G,[n("div",null,[l(e(v),{type:"danger",onClick:()=>{D(s.row),c.value=!0}},{default:t(()=>[o("刪除蒐藏")]),_:2},1032,["onClick"])]),n("div",null,[l(e(v),{type:"success",onClick:()=>{D(s.row),f.value=!0}},{default:t(()=>[o("查看")]),_:2},1032,["onClick"])])])]),_:1})]),_:1},8,["data"]),n("div",H,[l(e(T),{class:"max-md-hidden",background:"","current-page":i.value,"onUpdate:currentPage":a[0]||(a[0]=s=>i.value=s),"page-size":u.value,"onUpdate:pageSize":a[1]||(a[1]=s=>u.value=s),"page-sizes":[5,10,20,30,40,50],total:_.value,"pager-count":7,"page-count":z.value,layout:"sizes, prev, pager, next, jumper, total"},null,8,["current-page","page-size","total","page-count"]),l(e(T),{size:"small",class:"md-hidden","current-page":i.value,"onUpdate:currentPage":a[2]||(a[2]=s=>i.value=s),"page-size":u.value,"onUpdate:pageSize":a[3]||(a[3]=s=>u.value=s),"page-sizes":[5,10,20,30,40,50],total:_.value,"pager-count":5,"page-count":z.value,layout:"sizes, prev, pager, next, jumper"},null,8,["current-page","page-size","total","page-count"])]),l(e(M),{fullscreen:"",modelValue:f.value,"onUpdate:modelValue":a[5]||(a[5]=s=>f.value=s)},{header:t(()=>[J]),footer:t(()=>[l(e(v),{type:"",onClick:a[4]||(a[4]=()=>{f.value=!1})},{default:t(()=>[o(" 離開 ")]),_:1})]),default:t(()=>[l(e(L),{class:"w-full flex-wrap-reverse"},{default:t(()=>[l(e(V),{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[n("div",K,[l(e(R),{column:1},{default:t(()=>[l(e(x),{label:"電影名稱：","label-class-name":"md-text-2xl","class-name":"md-text-2xl"},{default:t(()=>[o(p(r.value.Title),1)]),_:1}),l(e(x),{label:"發行年分：","label-class-name":"md-text-2xl","class-name":"md-text-2xl"},{default:t(()=>[o(p(r.value.Year),1)]),_:1}),l(e(x),{label:"類型：","label-class-name":"md-text-2xl","class-name":"md-text-2xl"},{default:t(()=>[o(p(e(P)(r.value.Type)),1)]),_:1}),l(e(x),{label:"imdbID：","label-class-name":"md-text-2xl","class-name":"md-text-2xl"},{default:t(()=>[o(p(r.value.imdbID),1)]),_:1})]),_:1})])]),_:1}),l(e(V),{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[n("div",O,[r.value.Poster!="N/A"?(C(),y("img",{key:0,class:"w-full object-contain max-w500px",src:r.value.Poster,alt:"電影圖片"},null,8,Q)):E("",!0)])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(e(M),{modelValue:c.value,"onUpdate:modelValue":a[8]||(a[8]=s=>c.value=s),"align-center":"","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{header:t(()=>[W]),footer:t(()=>[l(e(v),{type:"",onClick:a[6]||(a[6]=()=>{c.value=!1})},{default:t(()=>[o(" 取消 ")]),_:1}),l(e(v),{type:"danger",onClick:a[7]||(a[7]=()=>{S(r.value)})},{default:t(()=>[o(" 確定 ")]),_:1})]),default:t(()=>[X]),_:1},8,["modelValue"])]),_:1},8,["locale"])]))}});export{ae as default};