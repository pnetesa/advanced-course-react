type Mods = Record<string, boolean | string>;

export function classNames(mainClass: string, mods: Mods, additional: string[]): string {
  return [
    mainClass,
    ...additional,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

// Usage (exclude 'red')
// classNames('removed-btn', { hovered: true, selectable: true, red: false }, ['with-paddings', 'pdg'])
// -> 'removed-btn hovered selectable with-paddings pdg
