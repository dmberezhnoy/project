type ModsType = Record<string, boolean | string>

export const classNames = (cls: string, mods: ModsType = {}, additional: string[] = []): string => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods).filter(([className, value]) => !!value).map(([className]) => className),
]
  .join(' ');
