import { classNames } from './class-names';

describe('classNames', () => {
  it('should apply only first argument', () => {
    expect(classNames('removed-btn'))
      .toBe('removed-btn');
  });

  it('should apply additional class', () => {
    expect(classNames('removed-btn', ['classOne', 'classTwo']))
      .toBe('removed-btn classOne classTwo');
  });

  it('should apply additional class and all mods', () => {
    const result = classNames('removed-btn', ['with-paddings', 'pdg'], {
      hovered: true,
      selectable: true,
      red: true,
    });
    expect(result).toBe('removed-btn with-paddings pdg hovered selectable red');
  });

  it('should exclude falsy mods', () => {
    const result = classNames('removed-btn', ['with-paddings', 'pdg'], {
      hovered: false,
      selectable: true,
      red: false,
    });
    expect(result).toBe('removed-btn with-paddings pdg selectable');
  });

  it('should exclude undefined mods', () => {
    const result = classNames('removed-btn', ['with-paddings', 'pdg'], {
      hovered: undefined,
      selectable: true,
      red: undefined,
    });
    expect(result).toBe('removed-btn with-paddings pdg selectable');
  });
});
