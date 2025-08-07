// /js/store.js
const KEY_PROFILE = 'ps:profile';
const KEY_RUNS = 'ps:runs';

export function saveProfile(p){
  localStorage.setItem(KEY_PROFILE, JSON.stringify(p));
}
export function loadProfile(){
  try{ return JSON.parse(localStorage.getItem(KEY_PROFILE)) || null; }catch{ return null; }
}

export function saveRun(run){
  const arr = listRuns();
  arr.unshift(run);
  // cap to 100
  localStorage.setItem(KEY_RUNS, JSON.stringify(arr.slice(0,100)));
}
export function listRuns(){
  try{ return JSON.parse(localStorage.getItem(KEY_RUNS)) || []; }catch{ return []; }
}
