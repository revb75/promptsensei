// /js/app.js
import { loadProfile } from '/js/store.js';
import '/js/onboarding.js';
import '/js/builder.js';

const app = document.getElementById('app');
const sideNav = document.getElementById('sideNav');
const navBtn = document.getElementById('navBtn');
const closeNav = document.getElementById('closeNav');

navBtn?.addEventListener('click', ()=> sideNav.classList.add('open'));
closeNav?.addEventListener('click', ()=> sideNav.classList.remove('open'));
sideNav?.addEventListener('click', (e)=>{
  const a = e.target.closest('[data-nav]'); if(!a) return;
  sideNav.classList.remove('open');
});

window.router = function router(){
  const hash = location.hash || '#/';
  const route = hash.split('?')[0];
  if(route === '#/' ) return renderHome();
  if(route === '#/onboarding') return renderOnboarding();
  if(route === '#/starter') return renderStarter();
  if(route === '#/builder') return renderBuilder();
  if(route === '#/runs') return renderRuns();
  renderNotFound();
};

function renderHome(){
  const profile = loadProfile();
  app.innerHTML = `
    <section class="card">
      <h2>Welcome${profile?.name? ', ' + profile.name : ''}</h2>
      <p>Prompt Sensei helps you craft better prompts tailored to who you are.</p>
      <div class="grid two" style="margin-top:.8rem">
        <a class="card" href="#/onboarding"><b>Start Onboarding</b><br><small class="hint">Takes ~30 seconds</small></a>
        <a class="card" href="#/starter"><b>Starter Pack</b><br><small class="hint">Get role-based prompts</small></a>
      </div>
    </section>
  `;
}

function renderNotFound(){ app.innerHTML = '<div class="card">Not found.</div>'; }

window.renderStarter = function renderStarter(){
  const ev = new CustomEvent('ps:renderStarter');
  window.dispatchEvent(ev);
};
window.renderBuilder = function renderBuilder(){
  const ev = new CustomEvent('ps:renderBuilder');
  window.dispatchEvent(ev);
};
window.renderOnboarding = function renderOnboarding(){
  const ev = new CustomEvent('ps:renderOnboarding');
  window.dispatchEvent(ev);
};
window.renderRuns = function renderRuns(){
  const ev = new CustomEvent('ps:renderRuns');
  window.dispatchEvent(ev);
};

window.addEventListener('hashchange', router);
window.addEventListener('load', ()=>{
  router();
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('/service-worker.js'); }
});
