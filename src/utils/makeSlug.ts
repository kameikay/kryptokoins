export function makeSlug(name: string) {
  const slug = name?.toLowerCase().replaceAll("'", "").normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "").replaceAll(" ", "-");

  return slug;
}