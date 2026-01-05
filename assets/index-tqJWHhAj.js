import{r,j as e,F as A}from"./index-wVL-EJ1g.js";import{P as B,s as L}from"./style.module-D7bZyTPS.js";import{L as V,l as w,M as F,C as O,a as $,D as W,e as J,d as G,b as K,c as T}from"./index-DhZzHwH3.js";const Y="_layout_1om69_35",z="_canvasCard_1om69_42",Q="_canvasHeader_1om69_50",U="_editBtn_1om69_62",f={layout:Y,canvasCard:z,canvasHeader:Q,editBtn:U},X=({items:d,onEdit:v,onCreate:u,onDelete:C,onRename:j})=>{const[b,i]=r.useState(!1),[l,p]=r.useState(!1),[m,g]=r.useState(null),[h,o]=r.useState("");return e.jsxs("div",{children:[e.jsx(B,{title:"大纲设计"}),e.jsx("div",{className:L.content,children:e.jsx("div",{className:f.layout,children:e.jsx("div",{className:f.leftPane,children:e.jsxs("div",{className:f.canvasCard,children:[e.jsxs("div",{className:f.canvasHeader,children:[e.jsxs("div",{className:"titleLeft",children:["已创建的大纲 (",d.length,")"]}),e.jsx("div",{children:e.jsx("button",{className:f.editBtn,onClick:()=>i(!0),children:"新建大纲"})})]}),e.jsx("div",{style:{padding:12},children:e.jsx(V,{items:d,keyExtractor:a=>a.id,animateIn:!0,editable:{getValue:a=>a.title},renderItem:a=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:f.title,children:a.title}),e.jsxs("div",{className:f.meta,children:[a.subtitle&&e.jsx("span",{className:f.subtitle,children:a.subtitle}),a.createdAt&&e.jsx("span",{className:f.time,children:new Date(a.createdAt).toLocaleString()})]})]}),actions:[{label:"继续编辑",onClick:a=>v(a.id),className:w.btnEdit},{label:"重命名",isRename:!0,onClick:(a,y)=>y&&j(a.id,y),className:w.btnRename},{label:"删除",onClick:a=>{g(a.id),o(a.title||"未命名课程")},className:w.btnDanger}],emptyText:"暂无课程大纲。"})})]})})})}),e.jsx(F,{visible:b,title:"新建课程大纲",onClose:()=>i(!1),children:e.jsxs("div",{children:[e.jsx("p",{style:{color:"#666"},children:"简要表单保证必填槽位，然后进入双栏协作。"}),e.jsx("div",{style:{marginTop:12},children:e.jsx(A,{fields:[{name:"name",label:"课程名称",placeholder:"例如： 现代操作系统"},{name:"subject",label:"学科",placeholder:"例如： 计算机科学与技术"},{name:"level",label:"学生层级",type:"select",options:[{label:"请选择",value:""},{label:"大一大二基础课",value:"freshman"},{label:"高年级",value:"senior"},{label:"研究生",value:"postgrad"},{label:"其他",value:"other"}]},{name:"prereq",label:"先修背景",placeholder:"例如： C 语言基础、数据结构"},{name:"goals",label:"教学目标",type:"textarea",placeholder:"例如： 掌握虚拟化与容器技术"},{name:"weeks",label:"周数 / 学时",type:"number",defaultValue:16},{name:"ratio",label:"理论 / 实践比例",placeholder:"例如： 70/30"},{name:"notes",label:"备注",type:"textarea",placeholder:"可填写课程特殊说明"},{name:"materials",label:"课程资料",type:"file"}],submitText:"生成初稿",submitLoading:l,submitLoadingText:"生成中",submitDisabled:l,onSubmit:a=>{l||(p(!0),setTimeout(()=>{u(a),i(!1),p(!1)},600))}})})]})}),e.jsx(O,{open:!!m,title:"删除课程大纲",description:`确认删除「${h}」吗？此操作不可恢复。`,confirmText:"确认删除",danger:!0,onCancel:()=>{g(null),o("")},onConfirm:()=>{m&&C(m),g(null),o("")}})]})},Z="_headerRow_o26sq_1",ee="_headerCard_o26sq_10",se="_titleInputLarge_o26sq_56",te="_rightAction_o26sq_83",ae="_scoreBox_o26sq_97",le="_scoreLabel_o26sq_106",ne="_scoreValue_o26sq_111",ie="_backBtn_o26sq_117",oe="_layout_o26sq_141",ce="_canvasCard_o26sq_148",re="_canvasHeader_o26sq_160",de="_canvasBody_o26sq_228",ue="_aiCard_o26sq_238",me="_rightPane_o26sq_287",n={headerRow:Z,headerCard:ee,titleInputLarge:se,rightAction:te,scoreBox:ae,scoreLabel:le,scoreValue:ne,backBtn:ie,layout:oe,canvasCard:ce,canvasHeader:re,canvasBody:de,aiCard:ue,rightPane:me},he="_overlay_1d7wg_1",_e="_sheet_1d7wg_13",xe="_header_1d7wg_27",ve="_title_1d7wg_35",je="_actions_1d7wg_40",be="_btn_1d7wg_45",ge="_primary_1d7wg_61",fe="_editorWrap_1d7wg_76",pe="_editor_1d7wg_76",Ce="_preview_1d7wg_100",x={overlay:he,sheet:_e,header:xe,title:ve,actions:je,btn:be,primary:ge,editorWrap:fe,editor:pe,preview:Ce},Ne=({value:d="",onClose:v})=>{const[u,C]=r.useState(d);return e.jsx("div",{className:x.overlay,role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:x.sheet,children:[e.jsxs("div",{className:x.header,children:[e.jsx("div",{className:x.title,children:"画布编辑"}),e.jsxs("div",{className:x.actions,children:[e.jsx("button",{className:x.btn,onClick:()=>v(null),children:"取消"}),e.jsx("button",{className:x.primary,onClick:()=>v(u),children:"保存并退出"})]})]}),e.jsxs("div",{className:x.editorWrap,children:[e.jsx("div",{className:x.preview,children:e.jsx($,{value:u,showControls:!1})}),e.jsx("textarea",{className:x.editor,value:u,onChange:j=>C(j.target.value)})]})]})})},ye=({md:d,setMd:v,onBack:u,openFull:C,setOpenFull:j,title:b,id:i,onRename:l})=>{const[p,m]=r.useState(b||"");r.useEffect(()=>{m(b||"")},[b]);const g=o=>{m(o),i&&l&&l(i,o)},h=p||b||"未命名课程";return e.jsxs("div",{children:[e.jsx(B,{title:"大纲设计"}),e.jsxs("div",{className:L.content,children:[e.jsx("div",{className:n.headerCard,children:e.jsxs("div",{className:n.headerRow,children:[e.jsx("input",{className:n.titleInputLarge,type:"text",value:p,onChange:o=>g(o.target.value),placeholder:"未命名课程"}),e.jsxs("div",{className:n.rightAction,children:[e.jsxs("div",{className:n.scoreBox,children:[e.jsx("div",{className:n.scoreLabel,children:"总分"}),e.jsx("div",{className:n.scoreValue,children:"90"})]}),e.jsx("button",{className:n.backBtn,onClick:u,children:"返回大纲目录"}),e.jsx(W,{button:"导出",items:[{label:"导出 PDF",onClick:()=>J(h,d)},{label:"导出 Docx",onClick:()=>G(h,d)},{label:"导出 Markdown",onClick:()=>K(h,d)}]})]})]})}),e.jsxs("div",{className:n.layout,children:[e.jsx("div",{className:n.leftPane,children:e.jsxs("div",{className:n.canvasCard,children:[e.jsx("div",{className:n.canvasHeader}),e.jsx("div",{className:n.canvasBody,children:e.jsx($,{value:d,onChange:v,onFullScreen:()=>j(!0)})})]})}),e.jsx("div",{className:n.rightPane,children:e.jsx("div",{className:n.aiCard,children:e.jsx(T,{dialogId:i||"default-outline",botName:"大纲助手",initMessage:"欢迎使用大纲助手，你可以询问如何改进课程大纲。"})})})]}),C&&e.jsx(Ne,{value:d,onClose:o=>{o!==null&&v(o),j(!1)}})]})]})},q="syllabus_outlines",qe=()=>{const d=`# 课程大纲

## 课程目标

简要描述课程目标。

## 按周计划

- 第1周：课程导论与学习地图
- 第2周：核心概念与术语框架
- 第3周：关键方法与工具链
`,[v,u]=r.useState(d),[C,j]=r.useState(!1),[b,i]=r.useState("list"),[l,p]=r.useState([]),[m,g]=r.useState(null);r.useEffect(()=>{try{const s=localStorage.getItem(q);s&&p(JSON.parse(s))}catch(s){console.error("load outlines",s)}},[]);const h=s=>{p(s);try{localStorage.setItem(q,JSON.stringify(s))}catch(t){console.error("save outlines",t)}},o=s=>{const t=Date.now().toString(),c=s.name||"未命名课程",_=s.subject||"",N=s.level||"",I=s.prereq||"",P=s.goals||"",E=s.weeks||"",R=s.ratio||"",H=s.notes||"",S=s.materials&&s.materials.name||"",D=`# ${c}

**学科**：${_}

**学生层级**：${N}

**先修背景**：${I}

## 教学目标

${P}

## 周数 / 学时

- ${E}

## 理论 / 实践 比例

- ${R}

## 备注

${H}

## 课程资料

${S?`- 附件：${S}`:"- 无附件"}`,M=[{id:t,title:c,subtitle:_||"",md:D,createdAt:Date.now()},...l];h(M),u(D),g(t),i("edit")},a=s=>{const t=l.filter(c=>c.id!==s);h(t),T.clearDialog(s),b==="edit"&&i("list"),m===s&&g(null)},y=s=>{const t=l.find(c=>c.id===s);t&&(u(t.md),g(s),i("edit"))},k=(s,t)=>{if(!t)return;const c=l.find(_=>_.id===s);if(c&&t&&t!==c.title){const _=l.map(N=>N.id===s?{...N,title:t}:N);h(_)}};if(b==="edit"){const s=l.find(t=>t.id===m);return e.jsx(ye,{md:v,setMd:t=>{if(u(t),m){const c=l.map(_=>_.id===m?{..._,md:t}:_);h(c)}},onBack:()=>{j(!1),i("list")},openFull:C,setOpenFull:j,title:s?.title,id:s?.id,onRename:(t,c)=>k(t,c)})}return e.jsx(X,{items:l,onEdit:s=>{s?y(s):i("edit")},onCreate:o,onDelete:s=>s&&a(s),onRename:(s,t)=>s&&k(s,t)})};export{qe as default};
