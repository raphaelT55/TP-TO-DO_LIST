export async function fetchJSON(url, options = {}){
    const headers = {Accept: 'application/json', ...options.headers}
    console.log(headers);
    const r = await fetch(url, {...options, headers})
    if (r.ok){
        return r.json()
    }
    throw new Error('Erreur Serveur', {cause: r})
}