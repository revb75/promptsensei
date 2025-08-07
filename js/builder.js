// /js/builder.js
import { loadProfile, saveRun, listRuns } from '/js/store.js';
import { PROMPT_LIBRARY, buildPromptSet } from '/js/prompts.js';
import { callChat } from '/js/api.js';

const app = document.getElementById('app');

window.addEventListener('ps:renderStarter', () => {
  const profile = loadProfile();
  if(!profile?.roleId){
    app.innerHTML = '<div class="card">Please complete <a href="#/onboarding">onboarding</a> first.</div>';
    return;
  }
  const set = buildPromptSet(profile, 12);
  app.innerHTML = `
    <section class="card">
      <h2>Starter Pack <span class="badge">${PROMPT_LIBRARY.roles[profile.roleId].label}</span></h2>
      <p><small class="hint">Personalized by age, interests, and goals.</small></p>
      ${set.map((p,i)=>`
        <div class="card">
          <div class="prompt">${p}</div>
          <div style="display:flex; gap:.5rem; margin-top:.6rem">
            <button class="primary" data-run="${encodeURIComponent(p)}">Run</button>
            <button class="ghost" data-builder="${encodeURIComponent(p)}">Open in Builder</button>
          </div>
        </div>
      `).join('')}
    </section>
  `;
  app.querySelectorAll('[data-builder]').forEach(b=> b.addEventListener('click', (e)=>{
    const prompt = decodeURIComponent(e.currentTarget.dataset.builder);
    sessionStorage.setItem('ps:lastPrompt', prompt);
    location.hash = '#/builder';
  }));
  app.querySelectorAll('[data-run]').forEach(b=> b.addEventListener('click', onRunBtn));
});

async function onRunBtn(e){
  const prompt = decodeURIComponent(e.currentTarget.dataset.run);
  await runPrompt(prompt);
}

window.addEventListener('ps:renderBuilder', () => {
  const profile = loadProfile() || {};
  const last = sessionStorage.getItem('ps:lastPrompt') || 'Explain {{topic}} using an example from {{interest}}.';

  app.innerHTML = `
    <section class="card">
      <h2>Prompt Builder</h2>
      <div class="grid">
        <div>
          <label>Prompt Template</label>
          <textarea id="tpl">${last}</textarea>
          <small class="hint">Use {{placeholders}} you want to fill.</small>
        </div>
        <div class="grid two">
          <div><label>topic</label><input type="text" id="topic" placeholder="e.g., lesson planning"></div>
          <div><label>interest</label><input type="text" id="interest" placeholder="e.g., cooking"></div>
          <div><label>concept</label><input type="text" id="concept" placeholder="optional"></div>
          <div><label>terms</label><input type="text" id="terms" placeholder="comma-separated"></div>
        </div>
      </div>

      <div class="card">
        <label>Preview</label>
        <div id="preview" class="prompt"></div>
      </div>

      <div style="display:flex; gap:.6rem">
        <button id="run" class="primary">Run</button>
        <button id="saveRun" class="ghost">Save Prompt</button>
      </div>
    </section>
  `;

  const preview = () => {
    const tpl = document.getElementById('tpl').value;
    const vals = {
      topic: document.getElementById('topic').value || 'your topic',
      interest: document.getElementById('interest').value || 'your interests',
      concept: document.getElementById('concept').value || 'the core concept',
      terms: document.getElementById('terms').value || 'term1, term2'
    };
    let out = tpl;
    for (const [k,v] of Object.entries(vals)) {
      out = out.replaceAll('{{'+k+'}}', v);
    }
    document.getElementById('preview').textContent = out;
    return out;
  };

  app.addEventListener('input', (e)=>{
    if(['TEXTAREA','INPUT'].includes(e.target.tagName)) preview();
  });
  preview();

  document.getElementById('run').addEventListener('click', async ()=>{
    const finalPrompt = preview();
    await runPrompt(finalPrompt);
  });

  document.getElementById('saveRun').addEventListener('click', ()=>{
    const finalPrompt = preview();
    saveRun({ finalPrompt, response: '', ts: Date.now() });
    alert('Saved to Runs.');
  });
});

window.addEventListener('ps:renderRuns', () => {
  const runs = listRuns();
  if(!runs.length){ app.innerHTML = '<div class="card">No saved runs yet.</div>'; return; }
  app.innerHTML = `
    <section class="card">
      <h2>Saved Runs</h2>
      ${runs.map(r=>`
        <div class="card">
          <div class="prompt">${r.finalPrompt}</div>
          ${r.response ? `<div class="response" style="margin-top:.5rem">${r.response}</div>`:''}
          <small class="hint">${new Date(r.ts).toLocaleString()}</small>
        </div>
      `).join('')}
    </section>
  `;
});

async function runPrompt(finalPrompt){
  const holder = document.createElement('section');
  holder.className = 'card';
  holder.innerHTML = `<h3>Running…</h3><div class="prompt">${finalPrompt}</div><div class="response" id="resp">Contacting API…</div>`;
  app.prepend(holder);
  try{
    const resText = await callChat(finalPrompt);
    holder.querySelector('#resp').textContent = resText;
    saveRun({ finalPrompt, response: resText, ts: Date.now() });
  }catch(err){
    holder.querySelector('#resp').textContent = 'Error: ' + err.message;
  }
}
