type Mods = Record<string, boolean | string>;

export function classNames(mainClass: string, additional: string[] = [], mods: Mods = {}): string {
  return [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

// Usage (exclude 'red')
// classNames('removed-btn', { hovered: true, selectable: true, red: false }, ['with-paddings', 'pdg'])
// -> 'removed-btn hovered selectable with-paddings pdg
