// /js/api.js
// IMPORTANT: Do NOT ship your OpenAI key in the browser.
// This calls a backend proxy you host at /api/chat that forwards to OpenAI.

export async function callChat(prompt){
  // Try backend, otherwise fallback demo behavior
  try{
    const r = await fetch('/api/chat', {
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({ prompt })
    });
    if(!r.ok) throw new Error('Proxy returned ' + r.status);
    const data = await r.json();
    if(data?.text) return data.text;
    // If your proxy streams, adapt this code to consume the stream.
    return JSON.stringify(data);
  }catch(err){
    // Demo fallback so app still works locally
    return `🤖 (Demo) If this were live, I’d answer:

${prompt}

— Since no /api/chat backend is configured, this is a local placeholder.`;
  }
}
