const KEY = "soi_favourites"; // ["dit:c346", "dai:c348", ...]

export const getFavourites = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};

export const toggleFavourite = (current, favKey) => {
  const next = current.includes(favKey)
    ? current.filter((x) => x !== favKey)
    : [...current, favKey];

  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
};
