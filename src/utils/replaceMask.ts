export function replaceMask(string: string, masks: Record<string, string>) {
  let result = string;
  for (const key in masks) {
    if (masks.hasOwnProperty(key)) {
      result = result.replace(new RegExp(key, "g"), masks[key]);
    }
  }
  return result;
}