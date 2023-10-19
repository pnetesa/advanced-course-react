type Mods = Record<string, boolean | string | undefined>;

export function classNames(mainClass: string, additional: Array<string | undefined> = [], mods: Mods = {}): string {
  return [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
