let currentJobId = null;
function money(j){ return '¥ ' + j.pay + ' ' + j.payUnit; }
// ===== 同页切换：只换下面四个 view 的显示，不新开网页、不新建 html =====
function showView(name){
  document.getElementById('view-list').style.display = name==='list' ? '' : 'none';
  document.getElementById('view-detail').style.display = name==='detail' ? '' : 'none';
  document.getElementById('view-apply').style.display = name==='apply' ? '' : 'none';
  document.getElementById('view-safe').style.display = name==='safe' ? '' : 'none';
  window.scrollTo(0,0);
}
function showList(){ showView('list'); render(); }
function showSafe(){ showView('safe'); }
// 导航栏“我要报名”：还没选具体职位时，先打开通用报名页，选好职位再报
function openApplyGeneric(){
  currentJobId = null;
  document.getElementById('apply-back').onclick = ()=>showList();
  document.getElementById('apply-content').innerHTML = `
    <div class="card" style="cursor:default">
    <h2 style="margin-top:0">我要报名</h2><p class="muted">先在职位列表选一个职位，再点详情页右下角“报名”，报名时说清职位名和可工作时间。</p>
    <p><button class="btn" type="button" onclick="showList()">去职位列表选一个 →</button></p>
    <div class="apply-box">
      <div>
        <h3 style="margin-top:0">报名联系方式（示例）</h3>
        <p><b>联系电话：</b><br><span class="apply-phone">138-0000-8888</span></p>
        <p><b>微信号：</b>hanji-2027（示例，换成真实微信号）</p>
        <p class="muted">⚠ 这个电话、微信号和二维码都是随便做的占位，扫码是扫不出来的，正式用之前一定要换成真实的招聘联系方式和真实微信名片二维码（把图片换成 assets/img/wechat-qr.svg 的真实图）。</p>
      </div>
      <div style="text-align:center"><img class="apply-qr" src="assets/img/wechat-qr.svg" alt="微信名片二维码示例"><p class="muted" style="text-align:center">微信扫码加好友（示例）</p></div>
    </div>
    </div>`;
  showView('apply');
}
function card(j){
  return `<article class="card" onclick="openJob(${j.id})">
    <span class="tag">${j.type}</span><span class="tag blue">${j.city}</span><span class="tag green">${j.dorm} · ${j.meal}</span>
    <h3>${j.title}</h3><p class="muted">${j.days} · ${j.desc.slice(0,28)}…</p>
    <div class="salary">${money(j)}</div>
    <p><button class="btn" type="button" onclick="event.stopPropagation();openJob(${j.id})">查看详情</button></p>
  </article>`;
}
function render(){
  const q = (document.getElementById('q')?.value || '').trim();
  const type = document.getElementById('type')?.value || '全部';
  const city = document.getElementById('city')?.value || '全部';
  const sort = document.getElementById('sort')?.value || '默认';
  let list = JOBS.filter(j => (type==='全部'||j.type===type) && (city==='全部'||j.city===city) && (!q || (j.title+j.desc+j.city+j.type).includes(q)));
  if(sort==='薪资从高到低') list.sort((a,b)=>b.pay-a.pay);
  if(sort==='薪资从低到高') list.sort((a,b)=>a.pay-b.pay);
  document.getElementById('count').textContent = '共 ' + list.length + ' 个职位（示例数据）';
  document.getElementById('list').innerHTML = list.length ? list.map(card).join('') : '<div class="card"><h3>没有匹配的职位</h3><p class="muted">换个关键词或筛选条件试试，或者在 js/jobs.js 里加新职位。</p></div>';
}
function openJob(id){
  const j = JOBS.find(x=>x.id===id); if(!j) return;
  currentJobId = id;
  document.getElementById('detail-content').innerHTML = `
    <div class="card" style="cursor:default">
    <span class="tag">${j.type}</span><span class="tag blue">${j.city}</span>
    <h2 style="font-size:32px">${j.title}</h2><div class="salary">${money(j)}</div>
    <p><b>工期：</b>${j.days}　<b>住宿：</b>${j.dorm}　<b>吃饭：</b>${j.meal}</p>
    <p><b>工作内容：</b>${j.desc}</p><p><b>要求：</b>${j.need}</p>
    <div class="detail-actions">
      <button class="btn right" onclick="openApply(${j.id})">报名 →</button>
    </div>
    </div>
    <div class="note" style="margin-top:16px">⚠ 示例数据：报名前请核对企业、薪资、工期、食宿和结算方式，警惕先交押金、体检费、服装费的招聘。联系方式不在详情正文里，点右下角报名后才显示。</div>`;
  showView('detail');
}
function openApply(id){
  const j = JOBS.find(x=>x.id===id); if(!j) return;
  currentJobId = id;
  document.getElementById('apply-back').onclick = ()=>openJob(id);
  document.getElementById('apply-content').innerHTML = `
    <div class="card" style="cursor:default">
    <h2 style="margin-top:0">报名：${j.title}</h2><p class="muted">${j.city} · ${money(j)} · ${j.days}</p>
    <div class="apply-box">
      <div>
        <h3 style="margin-top:0">报名联系方式（示例）</h3>
        <p><b>联系电话：</b><br><span class="apply-phone">138-0000-8888</span></p>
        <p><b>微信号：</b>hanji-2027（示例，换成真实微信号）<br>
        <b>报名时请说：</b>职位名“${j.title}” + 可工作时间</p>
        <p class="muted">⚠ 这个电话、微信号和二维码都是随便做的占位，扫码是扫不出来的，正式用之前一定要换成真实的招聘联系方式和真实微信名片二维码（把图片换成 assets/img/wechat-qr.svg 的真实图）。</p>
      </div>
      <div style="text-align:center"><img class="apply-qr" src="assets/img/wechat-qr.svg" alt="微信名片二维码示例"><p class="muted" style="text-align:center">微信扫码加好友（示例）</p></div>
    </div>
    </div>`;
  showView('apply');
}
document.addEventListener('DOMContentLoaded', ()=>{
  render();
  ['q','type','city','sort'].forEach(id=>document.getElementById(id)?.addEventListener('input',render));
});
