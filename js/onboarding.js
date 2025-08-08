// Dynamic Onboarding - Auto-load roles from manifest.json
export function renderOnboarding(container) {
  container.innerHTML = `
    <div class="onboarding">
      <h2>Select up to 3 Roles</h2>
      <div id="role-list" class="role-list"></div>
      <button id="continue-btn" disabled>Continue</button>
    </div>
  `;

  const roleListEl = container.querySelector('#role-list');
  const continueBtn = container.querySelector('#continue-btn');
  let selectedRoles = [];

  async function loadRoles() {
    try {
      const roleModules = await fetch('/js/scenarios/roles/manifest.json').then(r => r.json());
      roleModules.forEach(roleFile => {
        const roleName = roleFile.replace('.js', '').replace(/-/g, ' ');
        const roleBtn = document.createElement('button');
        roleBtn.textContent = roleName.charAt(0).toUpperCase() + roleName.slice(1);
        roleBtn.className = 'role-btn';

        roleBtn.addEventListener('click', () => {
          if (selectedRoles.includes(roleFile)) {
            selectedRoles = selectedRoles.filter(r => r !== roleFile);
            roleBtn.classList.remove('selected');
          } else {
            if (selectedRoles.length < 3) {
              selectedRoles.push(roleFile);
              roleBtn.classList.add('selected');
            }
          }
          continueBtn.disabled = selectedRoles.length === 0;
        });

        roleListEl.appendChild(roleBtn);
      });
    } catch (err) {
      console.error("Failed to load roles:", err);
    }
  }

  loadRoles();

  continueBtn.addEventListener('click', () => {
    localStorage.setItem('selectedRoles', JSON.stringify(selectedRoles));
    window.location.hash = '#practice';
  });
}
