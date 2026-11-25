'use strict';
(async () => {
  const { $, api, today, taskRow, loadCats, openTask, bindActions, debounce, catOptions, esc } = App;
  let tasks = [], status = '';
  const days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  const now = new Date();
  $('#dateLabel').textContent = `${days[now.getDay()]}, ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  const h = now.getHours();
  $('#greet').textContent = h < 11 ? 'Chào buổi sáng ☀️' : h < 14 ? 'Chào buổi trưa 🌤️' : h < 18 ? 'Chào buổi chiều 🌇' : 'Chào buổi tối 🌙';
  await loadCats(); catOptions($('#cat'));

  async function load() {
    const p = new URLSearchParams({ scope: 'today', today: today(), q: $('#q').value, priority: $('#pri').value, category: $('#cat').value });
    if (status) p.set('status', status);
    tasks = await api('/tasks?' + p);
    render(); progress();
  }
  async function progress() {
    const s = await api('/stats?today=' + today());
    const total = s.dueToday, done = s.doneToday;
    const dueDone = (await api(`/tasks?scope=today&today=${today()}&status=done`)).filter(t => t.due_date === today()).length;
    const pct = total ? Math.round(dueDone * 100 / total) : 0;
    $('#pct').textContent = pct + '%'; $('#barfill').style.width = pct + '%';
    $('#sum').textContent = total ? `Đã xong ${dueDone}/${total} việc hạn hôm nay` + (s.overdue ? ` · còn ${s.overdue} việc quá hạn` : '') : 'Hôm nay chưa có việc nào, thêm một việc nhé!';
  }
  function render() {
    const late = tasks.filter(App.isLate), cur = tasks.filter(t => !App.isLate(t));
    let html = '';
    if (late.length) html += `<div class="group-t bad">⚠️ Quá hạn (${late.length})</div><div class="list">${late.map(taskRow).join('')}</div>`;
    if (cur.length) html += `<div class="group-t">Hôm nay (${cur.length})</div><div class="list">${cur.map(taskRow).join('')}</div>`;
    $('#out').innerHTML = html || `<div class="card empty"><b>🎈</b>Không có công việc nào phù hợp.</div>`;
  }
  $('#quick').addEventListener('submit', async e => {
    e.preventDefault(); const v = $('#qt').value.trim(); if (!v) return;
    await api('/tasks', { method: 'POST', body: { title: v, due_date: today() } });
    $('#qt').value = ''; App.toast('Đã thêm công việc'); load();
  });
  $('#addBtn').onclick = () => openTask(null, load);
  $('#q').addEventListener('input', debounce(load));
  $('#pri').onchange = $('#cat').onchange = load;
  $('#chips').addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    status = b.dataset.s; document.querySelectorAll('#chips .chip').forEach(c => c.classList.toggle('on', c === b)); load();
  });
  bindActions($('#out'), () => tasks, load);
  load();
})();
