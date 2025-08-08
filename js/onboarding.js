// /js/onboarding.js
import { saveProfile, loadProfile } from '/js/store.js';
import { PROMPT_LIBRARY } from '/js/prompts.js';

const app = document.getElementById('app');

window.addEventListener('ps:renderOnboarding', () => {
  const profile = loadProfile() || {};
  const roles = Object.entries(PROMPT_LIBRARY.roles).map(([id,v])=>({id,label:v.label}));
  const ages = Object.keys(PROMPT_LIBRARY.ages);
  const interests = PROMPT_LIBRARY.interests;
  const goals = Object.keys(PROMPT_LIBRARY.goals);

  app.innerHTML = `
    <section class="card">
      <h2>Onboarding</h2>
      <div class="grid two">
        <div>
          <label>Role</label>
          <select id="role">
            ${roles.map(r=>`<option value="${r.id}">${r.label}</option>`).join('')}
          </select>
        </div>
        <div>
          <label>Age Band</label>
          <select id="age">
            ${ages.map(a=>`<option>${a}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="grid">
        <div>
          <label>Top Interests (pick up to 3)</label>
          <div class="chips" id="interests">
            ${interests.map(i=>`<button type="button" data-chip="${i}">${i}</button>`).join('')}
          </div>
        </div>
        <div>
          <label>Main Goal (pick up to 2)</label>
          <div class="chips" id="goals">
            ${goals.map(g=>`<button type="button" data-chip="${g}">${g}</button>`).join('')}
          </div>
        </div>
      </div>

      <div class="kv"><span>Name (optional)</span><input id="name" type="text" placeholder="e.g., Alex" value="${profile.name||''}"></div>

      <div style="display:flex; gap:.6rem; margin-top:.8rem">
        <button id="save" class="primary">Save</button>
        <a class="ghost" href="#/starter">Skip to Starter Pack</a>
      </div>
    </section>
  `;

  // Preselect previous
  if(profile.roleId) app.querySelector('#role').value = profile.roleId;
  if(profile.ageBand) app.querySelector('#age').value = profile.ageBand;
  const setActive = (containerId, values=[])=>{
    const box = app.querySelector(containerId);
    box.querySelectorAll('button').forEach(b=>{
      if(values.includes(b.dataset.chip)) b.classList.add('active');
    });
  };
  setActive('#interests', profile.interests || []);
  setActive('#goals', profile.goals || []);

  // Chip toggles
  const toggleChip = (e) => {
    const btn = e.target.closest('button[data-chip]'); if(!btn) return;
    btn.classList.toggle('active');
  };
  app.querySelector('#interests').addEventListener('click', toggleChip);
  app.querySelector('#goals').addEventListener('click', toggleChip);

  app.querySelector('#save').addEventListener('click', () => {
    const roleId = app.querySelector('#role').value;
    const ageBand = app.querySelector('#age').value;
    const name = app.querySelector('#name').value.trim();
    const interests = Array.from(app.querySelectorAll('#interests .active')).map(b=>b.dataset.chip).slice(0,3);
    const goals = Array.from(app.querySelectorAll('#goals .active')).map(b=>b.dataset.chip).slice(0,2);
    saveProfile({ roleId, ageBand, name, interests, goals });
    location.hash = '#/starter';
  });
});
