import{s as c,h as l,g as h,y as t,t as u,e as _}from"./index.f393f5c9.js";var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,d=(s,r,n,p)=>{for(var e=p>1?void 0:p?g(r,n):r,a=s.length-1,o;a>=0;a--)(o=s[a])&&(e=(p?o(r,n,e):o(e))||e);return p&&e&&f(r,n,e),e};let i=class extends c{constructor(){super();this.response="",this._apiTask=new l(this,()=>h("https://api.discountday.duckdns.org/test"),()=>[this.response]),console.log("https://api.discountday.duckdns.org/test")}render(){return t`
      <app-header></app-header>
      <main>
        ${this._apiTask.render({pending:()=>t`<sl-spinner></sl-spinner>`,error:()=>t`error`,complete:s=>t`${s}`})}
        <app-day-selection></app-day-selection>
      </main>
    `}};d([u()],i.prototype,"response",2);i=d([_("app-stats")],i);export{i as AppStats};
//# sourceMappingURL=app-stats.e55bee6c.js.map
