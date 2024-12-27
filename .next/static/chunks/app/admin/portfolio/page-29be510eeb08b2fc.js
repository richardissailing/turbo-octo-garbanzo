(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{3809:(e,t,r)=>{Promise.resolve().then(r.bind(r,9438))},9438:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var a=r(5155),n=r(2115),s=r(1086),l=r(9749),i=r(3312),o=r(3900),c=r(6754);function d(){let[e,t]=(0,n.useState)([]),[r,d]=(0,n.useState)(!0),[u,f]=(0,n.useState)(!1),p=(0,s.k)();async function m(){try{let{data:e,error:r}=await p.from("projects").select("*").order("created_at",{ascending:!1}).returns();if(r)throw r;t(e||[])}catch(e){console.error("Error loading projects:",e)}finally{d(!1)}}async function g(e){f(!0);try{let t={id:e.id,title:e.title,description:e.description,tags:e.tags,link:e.link||null,image:e.image||null,created_at:e.created_at},{error:r}=await p.from("projects").upsert(t).select().returns();if(r)throw r;await m()}catch(e){console.error("Error updating project:",e)}finally{f(!1)}}async function h(e){if(confirm("Are you sure you want to delete this project?"))try{let{error:t}=await p.from("projects").delete().match({id:e});if(t)throw t;await m()}catch(e){console.error("Error deleting project:",e)}}async function v(r,a){var n;let s=null===(n=r.target.files)||void 0===n?void 0:n[0];if(s)try{let r=s.name.split(".").pop(),n="".concat(Math.random(),".").concat(r),l="project-images/".concat(n),{error:i}=await p.storage.from("portfolio").upload(l,s);if(i)throw i;let{data:{publicUrl:o}}=p.storage.from("portfolio").getPublicUrl(l),c=[...e];c[a].image=o,t(c)}catch(e){console.error("Error uploading image:",e)}}return(0,n.useEffect)(()=>{m()},[]),r?(0,a.jsx)("div",{children:"Loading..."}):(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold",children:"Manage Portfolio"}),(0,a.jsx)(i.$,{onClick:function(){t([...e,{id:Date.now(),title:"",description:"",tags:[],link:"",image:"",created_at:new Date().toISOString()}])},children:"Add New Project"})]}),(0,a.jsx)("div",{className:"space-y-8",children:e.map((r,n)=>(0,a.jsxs)(l.Zp,{className:"bg-card",children:[(0,a.jsx)(l.aR,{children:(0,a.jsx)(l.ZB,{children:"Project Details"})}),(0,a.jsxs)(l.Wu,{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-sm font-medium",children:"Title"}),(0,a.jsx)(o.p,{value:r.title,onChange:r=>{let a=[...e];a[n].title=r.target.value,t(a)},placeholder:"Project Title"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-sm font-medium",children:"Description"}),(0,a.jsx)(c.T,{value:r.description,onChange:r=>{let a=[...e];a[n].description=r.target.value,t(a)},placeholder:"Project Description"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-sm font-medium",children:"Tags (comma separated)"}),(0,a.jsx)(o.p,{value:r.tags.join(", "),onChange:r=>{let a=[...e];a[n].tags=r.target.value.split(",").map(e=>e.trim()),t(a)},placeholder:"React, TypeScript, Tailwind"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-sm font-medium",children:"Project Link"}),(0,a.jsx)(o.p,{value:r.link||"",onChange:r=>{let a=[...e];a[n].link=r.target.value,t(a)},placeholder:"https://github.com/yourusername/project"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-sm font-medium",children:"Project Image"}),(0,a.jsx)(o.p,{type:"file",accept:"image/*",onChange:e=>v(e,n)}),r.image&&(0,a.jsx)("img",{src:r.image,alt:r.title,className:"w-40 h-40 object-cover rounded-md"})]}),(0,a.jsxs)("div",{className:"flex justify-end gap-2 pt-4",children:[(0,a.jsx)(i.$,{variant:"destructive",onClick:()=>h(r.id),children:"Delete"}),(0,a.jsx)(i.$,{onClick:()=>g(r),disabled:u,children:"Save Changes"})]})]})]},r.id))})]})}},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>c});var a=r(5155),n=r(2115),s=r(2317),l=r(1027),i=r(1567);let o=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:l,asChild:c=!1,...d}=e,u=c?s.DX:"button";return(0,a.jsx)(u,{className:(0,i.cn)(o({variant:n,size:l,className:r})),ref:t,...d})});c.displayName="Button"},9749:(e,t,r)=>{"use strict";r.d(t,{BT:()=>c,Wu:()=>d,ZB:()=>o,Zp:()=>l,aR:()=>i});var a=r(5155),n=r(2115),s=r(1567);let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});l.displayName="Card";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...n})});i.displayName="CardHeader";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});o.displayName="CardTitle";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...n})});c.displayName="CardDescription";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...n})});d.displayName="CardContent",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...n})}).displayName="CardFooter"},3900:(e,t,r)=>{"use strict";r.d(t,{p:()=>l});var a=r(5155),n=r(2115),s=r(1567);let l=n.forwardRef((e,t)=>{let{className:r,type:n,...l}=e;return(0,a.jsx)("input",{type:n,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...l})});l.displayName="Input"},6754:(e,t,r)=>{"use strict";r.d(t,{T:()=>l});var a=r(5155),n=r(2115),s=r(1567);let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("textarea",{className:(0,s.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...n})});l.displayName="Textarea"},1086:(e,t,r)=>{"use strict";r.d(t,{k:()=>s});var a=r(5974);let n=null,s=()=>n||(n=(0,a.UU)("https://jjilijsqunjqmyrzlkhs.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqaWxpanNxdW5qcW15cnpsa2hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0OTEzNjYsImV4cCI6MjA1MDA2NzM2Nn0.7Wbc_Ok819Kzb68hHXVS9BrZ7UIeKIzzdcpRp_pIXp8",{auth:{persistSession:!0,autoRefreshToken:!0,storageKey:"sb-auth-token",storage:{getItem:e=>window.localStorage.getItem(e),setItem:(e,t)=>{window.localStorage.setItem(e,t)},removeItem:e=>{window.localStorage.removeItem(e)}}}}))},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var a=r(3463),n=r(9795);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,a.$)(t))}},8068:(e,t,r)=>{"use strict";r.d(t,{s:()=>l,t:()=>s});var a=r(2115);function n(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function s(...e){return t=>{let r=!1,a=e.map(e=>{let a=n(e,t);return r||"function"!=typeof a||(r=!0),a});if(r)return()=>{for(let t=0;t<a.length;t++){let r=a[t];"function"==typeof r?r():n(e[t],null)}}}}function l(...e){return a.useCallback(s(...e),e)}},2317:(e,t,r)=>{"use strict";r.d(t,{DX:()=>l});var a=r(2115),n=r(8068),s=r(5155),l=a.forwardRef((e,t)=>{let{children:r,...n}=e,l=a.Children.toArray(r),o=l.find(c);if(o){let e=o.props.children,r=l.map(t=>t!==o?t:a.Children.count(e)>1?a.Children.only(null):a.isValidElement(e)?e.props.children:null);return(0,s.jsx)(i,{...n,ref:t,children:a.isValidElement(e)?a.cloneElement(e,void 0,r):null})}return(0,s.jsx)(i,{...n,ref:t,children:r})});l.displayName="Slot";var i=a.forwardRef((e,t)=>{let{children:r,...s}=e;if(a.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return a.cloneElement(r,{...function(e,t){let r={...t};for(let a in t){let n=e[a],s=t[a];/^on[A-Z]/.test(a)?n&&s?r[a]=(...e)=>{s(...e),n(...e)}:n&&(r[a]=n):"style"===a?r[a]={...n,...s}:"className"===a&&(r[a]=[n,s].filter(Boolean).join(" "))}return{...e,...r}}(s,r.props),ref:t?(0,n.t)(t,e):e})}return a.Children.count(r)>1?a.Children.only(null):null});i.displayName="SlotClone";var o=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function c(e){return a.isValidElement(e)&&e.type===o}},1027:(e,t,r)=>{"use strict";r.d(t,{F:()=>l});var a=r(3463);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,s=a.$,l=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:l,defaultVariants:i}=t,o=Object.keys(l).map(e=>{let t=null==r?void 0:r[e],a=null==i?void 0:i[e];if(null===t)return null;let s=n(t)||n(a);return l[e][s]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{});return s(e,o,null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:r,className:a,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...c}[t]):({...i,...c})[t]===r})?[...e,r,a]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},e=>{var t=t=>e(e.s=t);e.O(0,[736,181,441,517,358],()=>t(3809)),_N_E=e.O()}]);