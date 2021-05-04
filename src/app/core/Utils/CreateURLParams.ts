export function criarURLParams(objeto: object): string {
  let url = '?';
  Object.entries(objeto).forEach(([key, value]) => {
    if (typeof value == 'boolean' || value) url += `${key}=${value}&`;
  });
  return url.slice(0, -1);
}
