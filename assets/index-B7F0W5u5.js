import{r as o,j as e,F as V}from"./index-DqMs9835.js";import{P as L,s as $}from"./style.module-C3sq6iEW.js";import{L as F,l as w,M as O,C as W,a as T,D as q,e as J,d as G,b as K,c as I}from"./index-DGQ8sSXk.js";const Y="_layout_1om69_35",z="_canvasCard_1om69_42",Q="_canvasHeader_1om69_50",U="_editBtn_1om69_62",g={layout:Y,canvasCard:z,canvasHeader:Q,editBtn:U},X=({items:d,onEdit:v,onCreate:m,onDelete:C,onRename:f})=>{const[j,r]=o.useState(!1),[l,p]=o.useState(!1),[u,b]=o.useState(null),[h,c]=o.useState("");return e.jsxs("div",{children:[e.jsx(L,{title:"大纲设计"}),e.jsx("div",{className:$.content,children:e.jsx("div",{className:g.layout,children:e.jsx("div",{className:g.leftPane,children:e.jsxs("div",{className:g.canvasCard,children:[e.jsxs("div",{className:g.canvasHeader,children:[e.jsxs("div",{className:"titleLeft",children:["已创建的大纲 (",d.length,")"]}),e.jsx("div",{children:e.jsx("button",{className:g.editBtn,onClick:()=>r(!0),children:"新建大纲"})})]}),e.jsx("div",{style:{padding:12},children:e.jsx(F,{items:d,keyExtractor:a=>a.id,editable:{getValue:a=>a.title},renderItem:a=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:g.title,children:a.title}),e.jsxs("div",{className:g.meta,children:[a.subtitle&&e.jsx("span",{className:g.subtitle,children:a.subtitle}),a.createdAt&&e.jsx("span",{className:g.time,children:new Date(a.createdAt).toLocaleString()})]})]}),actions:[{label:"继续编辑",onClick:a=>v(a.id),className:w.btnEdit},{label:"重命名",isRename:!0,onClick:(a,y)=>y&&f(a.id,y),className:w.btnRename},{label:"删除",onClick:a=>{b(a.id),c(a.title||"未命名课程")},className:w.btnDanger}],emptyText:"暂无课程大纲。"})})]})})})}),e.jsx(O,{visible:j,title:"新建课程大纲",onClose:()=>r(!1),children:e.jsxs("div",{children:[e.jsx("p",{style:{color:"#666"},children:"简要表单保证必填槽位，然后进入双栏协作。"}),e.jsx("div",{style:{marginTop:12},children:e.jsx(V,{fields:[{name:"name",label:"课程名称",placeholder:"例如： 现代操作系统"},{name:"subject",label:"学科",placeholder:"例如： 计算机科学与技术"},{name:"level",label:"学生层级",type:"select",options:[{label:"请选择",value:""},{label:"大一大二基础课",value:"freshman"},{label:"高年级",value:"senior"},{label:"研究生",value:"postgrad"},{label:"其他",value:"other"}]},{name:"prereq",label:"先修背景",placeholder:"例如： C 语言基础、数据结构"},{name:"goals",label:"教学目标",type:"textarea",placeholder:"例如： 掌握虚拟化与容器技术"},{name:"weeks",label:"周数 / 学时",type:"number",defaultValue:16},{name:"ratio",label:"理论 / 实践比例",placeholder:"例如： 70/30"},{name:"notes",label:"备注",type:"textarea",placeholder:"可填写课程特殊说明"},{name:"materials",label:"课程资料",type:"file"}],submitText:"生成初稿",submitLoading:l,submitLoadingText:"生成中",submitDisabled:l,onSubmit:a=>{l||(p(!0),setTimeout(()=>{m(a),r(!1),p(!1)},600))}})})]})}),e.jsx(W,{open:!!u,title:"删除课程大纲",description:`确认删除「${h}」吗？此操作不可恢复。`,confirmText:"确认删除",danger:!0,onCancel:()=>{b(null),c("")},onConfirm:()=>{u&&C(u),b(null),c("")}})]})},Z="_headerRow_rcfmr_1",ee="_headerCard_rcfmr_8",se="_titleInputLarge_rcfmr_54",te="_rightAction_rcfmr_81",ae="_scoreBox_rcfmr_87",le="_scoreLabel_rcfmr_95",ne="_scoreValue_rcfmr_100",re="_backBtn_rcfmr_106",ce="_layout_rcfmr_123",ie="_canvasCard_rcfmr_130",oe="_canvasHeader_rcfmr_142",de="_canvasBody_rcfmr_210",me="_aiCard_rcfmr_220",ue="_rightPane_rcfmr_269",n={headerRow:Z,headerCard:ee,titleInputLarge:se,rightAction:te,scoreBox:ae,scoreLabel:le,scoreValue:ne,backBtn:re,layout:ce,canvasCard:ie,canvasHeader:oe,canvasBody:de,aiCard:me,rightPane:ue},he="_overlay_1d7wg_1",_e="_sheet_1d7wg_13",xe="_header_1d7wg_27",ve="_title_1d7wg_35",fe="_actions_1d7wg_40",je="_btn_1d7wg_45",be="_primary_1d7wg_61",ge="_editorWrap_1d7wg_76",pe="_editor_1d7wg_76",Ce="_preview_1d7wg_100",x={overlay:he,sheet:_e,header:xe,title:ve,actions:fe,btn:je,primary:be,editorWrap:ge,editor:pe,preview:Ce},Ne=({value:d="",onClose:v})=>{const[m,C]=o.useState(d);return e.jsx("div",{className:x.overlay,role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:x.sheet,children:[e.jsxs("div",{className:x.header,children:[e.jsx("div",{className:x.title,children:"画布编辑"}),e.jsxs("div",{className:x.actions,children:[e.jsx("button",{className:x.btn,onClick:()=>v(null),children:"取消"}),e.jsx("button",{className:x.primary,onClick:()=>v(m),children:"保存并退出"})]})]}),e.jsxs("div",{className:x.editorWrap,children:[e.jsx("div",{className:x.preview,children:e.jsx(T,{value:m,showControls:!1})}),e.jsx("textarea",{className:x.editor,value:m,onChange:f=>C(f.target.value)})]})]})})},ye=({md:d,setMd:v,onBack:m,openFull:C,setOpenFull:f,title:j,id:r,onRename:l})=>{const[p,u]=o.useState(j||"");o.useEffect(()=>{u(j||"")},[j]);const b=c=>{u(c),r&&l&&l(r,c)},h=p||j||"未命名课程";return e.jsxs("div",{children:[e.jsx(L,{title:"大纲设计"}),e.jsxs("div",{className:$.content,children:[e.jsx("div",{className:n.headerCard,children:e.jsxs("div",{className:n.headerRow,children:[e.jsx("input",{className:n.titleInputLarge,type:"text",value:p,onChange:c=>b(c.target.value),placeholder:"未命名课程"}),e.jsxs("div",{className:n.rightAction,children:[e.jsxs("div",{className:n.scoreBox,children:[e.jsx("div",{className:n.scoreLabel,children:"总分"}),e.jsx("div",{className:n.scoreValue,children:"90"})]}),e.jsx("button",{className:n.backBtn,onClick:m,children:"返回大纲目录"}),e.jsx(q,{button:"导出",items:[{label:"导出 PDF",onClick:()=>J(h,d)},{label:"导出 Docx",onClick:()=>G(h,d)},{label:"导出 Markdown",onClick:()=>K(h,d)}]})]})]})}),e.jsxs("div",{className:n.layout,children:[e.jsx("div",{className:n.leftPane,children:e.jsxs("div",{className:n.canvasCard,children:[e.jsx("div",{className:n.canvasHeader}),e.jsx("div",{className:n.canvasBody,children:e.jsx(T,{value:d,onChange:v,onFullScreen:()=>f(!0)})})]})}),e.jsx("div",{className:n.rightPane,children:e.jsx("div",{className:n.aiCard,children:e.jsx(I,{dialogId:r||"default-outline",botName:"大纲助手",initMessage:"欢迎使用大纲助手，你可以询问如何改进课程大纲。"})})})]}),C&&e.jsx(Ne,{value:d,onClose:c=>{c!==null&&v(c),f(!1)}})]})]})},B="syllabus_outlines",Be=()=>{const d=`# 课程大纲

## 课程目标

简要描述课程目标。

## 按周计划

- 第1周：课程导论与学习地图
- 第2周：核心概念与术语框架
- 第3周：关键方法与工具链
`,[v,m]=o.useState(d),[C,f]=o.useState(!1),[j,r]=o.useState("list"),[l,p]=o.useState([]),[u,b]=o.useState(null);o.useEffect(()=>{try{const s=localStorage.getItem(B);s&&p(JSON.parse(s))}catch(s){console.error("load outlines",s)}},[]);const h=s=>{p(s);try{localStorage.setItem(B,JSON.stringify(s))}catch(t){console.error("save outlines",t)}},c=s=>{const t=Date.now().toString(),i=s.name||"未命名课程",_=s.subject||"",N=s.level||"",P=s.prereq||"",E=s.goals||"",R=s.weeks||"",H=s.ratio||"",M=s.notes||"",S=s.materials&&s.materials.name||"",D=`# ${i}

**学科**：${_}

**学生层级**：${N}

**先修背景**：${P}

## 教学目标

${E}

## 周数 / 学时

- ${R}

## 理论 / 实践 比例

- ${H}

## 备注

${M}

## 课程资料

${S?`- 附件：${S}`:"- 无附件"}`,A=[{id:t,title:i,subtitle:_||"",md:D,createdAt:Date.now()},...l];h(A),m(D),b(t),r("edit")},a=s=>{const t=l.filter(i=>i.id!==s);h(t),I.clearDialog(s),j==="edit"&&r("list"),u===s&&b(null)},y=s=>{const t=l.find(i=>i.id===s);t&&(m(t.md),b(s),r("edit"))},k=(s,t)=>{if(!t)return;const i=l.find(_=>_.id===s);if(i&&t&&t!==i.title){const _=l.map(N=>N.id===s?{...N,title:t}:N);h(_)}};if(j==="edit"){const s=l.find(t=>t.id===u);return e.jsx(ye,{md:v,setMd:t=>{if(m(t),u){const i=l.map(_=>_.id===u?{..._,md:t}:_);h(i)}},onBack:()=>{f(!1),r("list")},openFull:C,setOpenFull:f,title:s?.title,id:s?.id,onRename:(t,i)=>k(t,i)})}return e.jsx(X,{items:l,onEdit:s=>{s?y(s):r("edit")},onCreate:c,onDelete:s=>s&&a(s),onRename:(s,t)=>s&&k(s,t)})};export{Be as default};
