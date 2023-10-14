export function removeMultipleDashes(slugStr: string) {
  return slugStr.replace("---", "-").replace("--", "-");
}
