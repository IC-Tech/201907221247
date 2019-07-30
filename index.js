/* Copyright © Imesh Chamara 2019 */

setTimeout(() => {
icApp = {
  get d(){return document},
  qs: v => icApp.d.querySelector(v),
  cE: v => icApp.d.createElement(v),
  qsa: v => icApp.d.querySelectorAll(v),
  _n: {
    a: (v, f) =>{var a=true,b=0;for(;b<v.length&&(a=f(v[b],b,v));b++);return a;}
  },
  e: class e {
    constructor(v){ this.v = typeof v == 'string' ? icApp.qs(v) : v; return v == null || v == undefined ? v : this }
    get cl() { return this.v.classList }
    get ch() { return this.v.children }
    cha(v) { this.v.appendChild(v); return this }
    chr(v) { var a = v == undefined ? (a=>{while(this.ch.length > 0)this.ch[0].remove()})() : this.ch[v].remove(); return this }
    cla(v) { this.cl.add(v); return this }
    clr(v) { var a = typeof v == 'object' ? (a=>v.forEach(v=>this.clr(v)))() : this.cl.remove(v); return this }
    clc(v) { return typeof v == 'object' ? icApp._n.a(v, v => this.clc(v)) : this.cl.contains(v) }
    get st() { return this.v.style }
    get d() { return this.v.dataset }
    set stp(v) { this.st.setProperty(v[0], v[1]) }
    set txt(v) { this.v.innerText = v }
  }
}

var _root_ = new icApp.e('#root').chr()

var e = icApp.cE('style')
e.innerHTML = `
html, body, #root {
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  margin: 0;
}
#root {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 8px;
  background-image: -o-linear-gradient(330deg, #1bacca, #1139cc);
  background-image: linear-gradient(120deg, #1bacca, #1139cc);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}
.ic-t-btn {
  display: inline-block;
  width: max-content;
  position: relative;
  padding: 10px 20px;
  background-color: #fff;
  border: 0;
  font-size: 15px;
  font-family: Roboto, Arial;
  text-align: center;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  color: #3f3f3f;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.ic-t-btn:focus {
  background-color: #f4f4f4;
}
.ic-t-btn:hover {
  color: #000;
  background-color: #e4e4e4;
}
.ic-t-btn:after {
  content: '';
  display: inline-block;
  position: absolute;
  width: var(--ic-t2);
  height: var(--ic-t2);
  left: var(--ic-t0);
  top: calc((var(--ic-t2) - 36px) / -2);
  background-color: #000;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.ic-t-btn.a:after {
  -webkit-animation: ani0 1 .2s linear forwards, ani1 1 .3s cubic-bezier(.94,.68,.68,.93) forwards;
          animation: ani0 1 .2s linear forwards, ani1 1 .3s cubic-bezier(.94,.68,.68,.93) forwards;
}
@-webkit-keyframes ani0 {
  0%{
    opacity: 0;
  }
  100%{
    opacity: .16;
  }
}
@keyframes ani0 {
  0%{
    opacity: 0;
  }
  100%{
    opacity: .16;
  }
}
@-webkit-keyframes ani1 {
  0%{
    -webkit-transform: scale(.5);
            transform: scale(.5);
  }
  100%{
    -webkit-transform: scale(var(--ic-t1));
            transform: scale(var(--ic-t1));
  }
}
@keyframes ani1 {
  0%{
    -webkit-transform: scale(.5);
            transform: scale(.5);
  }
  100%{
    -webkit-transform: scale(var(--ic-t1));
            transform: scale(var(--ic-t1));
  }
}
`
_root_.cha(e)

var a = ['Button 01', 'The Button 01', 'Button', '01']
for(var b = 0; b < 4; b++) {
  var e = new icApp.e(icApp.cE('button'))
  e.cla('ic-t-btn')
  e.txt = a[b]
  e.d.t = 0
  e.d.m = 0
  e.d.k = 0
  _root_.cha(e.v)
}

(() => {
const a = (e, a) => {
  if(e.v == null) return
  if(a == 0) e.d.t = 1
  else if(a == 1) e.d.m = 0
  else if(a == 3) e.d.k = 0
  var b = e.d.m == '0' && e.d.k == '0'
  if((a == 0 && b) || ((a == 1 || a == 3) && e.d.t == '1')) e.clr('a')
}
icApp.qsa('.ic-t-btn').forEach(e => {
  e.addEventListener('mousedown', e => {
    e = [new icApp.e(e.target), e.layerX]
    if(!e[0].clc('ic-t-btn')) return
    if(e[0].d.k != '1') {
      e[2] = e[0].v.clientWidth / 2
      e[3] = e[1] - e[2]
      e[4] = e[3] < 0 ? e[3] * -1 : e[3]
      e[4] = (e[4] / e[2]) + 1.15
      e[0].stp = ['--ic-t0', e[3] + 'px']
      e[0].stp = ['--ic-t1', e[4]]
      e[0].stp = ['--ic-t2', e[2] * 2 + 'px']
      e[0].cla('a')
      e[0].d.t = 0
      var b = parseInt(Math.random() * 10000)
      for(; icApp.qs('[data-r="' + b + '"]') != null; b++);
      e[0].d.r = b
    }
    e[0].d.m = 1
    setTimeout(e => {
      a(new icApp.e('[data-r="' + e + '"]'), 0)
    }, 500, e[0].d.r)
  })
  e.addEventListener('keydown', e => {
    if(e.key != ' ' && e.key != 'Enter') return
    e = [new icApp.e(e.target)]
    if(!e[0].clc('ic-t-btn') || e[0].d.k == '1') return
    e[0].d.k = 1
    if(e[0].d.m != '1') {
      e[2] = e[0].v.clientWidth / 2
      e[4] = 1.15
      e[0].stp = ['--ic-t0', '0px']
      e[0].stp = ['--ic-t1', e[4]]
      e[0].stp = ['--ic-t2', e[2] * 2 + 'px']
      e[0].cla('a')
      e[0].d.t = 0
      var b = parseInt(Math.random() * 10000)
      for(; icApp.qs('[data-r="' + b + '"]') != null; b++);
      e[0].d.r = b
    }
    setTimeout(e => {
      a(new icApp.e('[data-r="' + e + '"]'), 0)
    }, 500, e[0].d.r)
    return false
  })
  e.addEventListener('keyup', e => {
    if(e.key != ' ' && e.key != 'Enter') return
    a(new icApp.e('[data-k="1"].ic-t-btn'), 3)
  })
})
icApp.qs('html').addEventListener('mouseup', e => a(new icApp.e('[data-m="1"].ic-t-btn'), 1))
})()
a = null
}, 1000)
