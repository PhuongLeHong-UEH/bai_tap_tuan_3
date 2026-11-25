'use strict';
(async () => {
  const { $, esc, api, today } = App;
  const s = await api('/stats?today=' + today());
  $('#k-total').textContent = s.total; $('#k-rate').textContent = s.completionRate + '%';
  $('#k-over').textContent = s.overdue; $('#k-streak').textContent = s.streak + ' ngày';

  // Biểu đồ tròn: trạng thái
  const parts = [['done', 'Hoàn thành', '#12b76a'], ['doing', 'Đang làm', '#3b82f6'], ['todo', 'Chưa làm', '#cbd2e0']];
  const R = 70, C = 2 * Math.PI * R; let off = 0, arcs = '';
  for (const [k, , col] of parts) {
    const len = s.total ? s.byStatus[k] / s.total * C : 0;
    arcs += `<circle r="${R}" cx="90" cy="90" fill="none" stroke="${col}" stroke-width="26" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-off}" transform="rotate(-90 90 90)"/>`; off += len;
  }
  $('#donut').innerHTML = `<svg viewBox="0 0 180 180" width="180" height="180" role="img" aria-label="Biểu đồ trạng thái công việc">${arcs}<text x="90" y="88" text-anchor="middle" font-size="30" font-weight="800" fill="#1b2437">${s.completionRate}%</text><text x="90" y="110" text-anchor="middle" font-size="12" fill="#68758d">hoàn thành</text></svg>
    <div class="legend">${parts.map(([k, n, c]) => `<span><i style="background:${c}"></i>${n}: <b>${s.byStatus[k]}</b></span>`).join('')}</div>`;

  // Cột 7 ngày
  const max = Math.max(1, ...s.last7.flatMap(d => [d.done, d.due]));
  const dn = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  $('#week').innerHTML = s.last7.map(d => { const dt = new Date(d.date + 'T00:00:00');
    return `<div class="col" title="${d.date}: hoàn thành ${d.done}, đến hạn ${d.due}"><div class="pair"><b style="height:${d.due / max * 100}%;background:#cbd2e0"></b><b style="height:${d.done / max * 100}%;background:#5b5bd6"></b></div><span>${d.date === today() ? 'Nay' : dn[dt.getDay()]}</span></div>`; }).join('');

  // Thanh ngang
  $('#cats').innerHTML = s.byCategory.map(c => `<div class="hbar"><div class="top"><span>${esc(c.name)}</span><span>${c.done}/${c.total}</span></div><div class="tr"><b style="width:${c.total ? c.done / c.total * 100 : 0}%;background:${esc(c.color)}"></b></div></div>`).join('') || '<p class="d">Chưa có dữ liệu</p>';
  const pc = { high: ['Cao', '#ef4444'], medium: ['Trung bình', '#f59e0b'], low: ['Thấp', '#12b76a'] }, pm = Math.max(1, ...Object.values(s.byPriority));
  $('#pris').innerHTML = Object.entries(pc).map(([k, [n, c]]) => `<div class="hbar"><div class="top"><span>${n}</span><span>${s.byPriority[k]}</span></div><div class="tr"><b style="width:${s.byPriority[k] / pm * 100}%;background:${c}"></b></div></div>`).join('');
})();
