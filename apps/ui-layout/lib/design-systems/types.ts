export type DesignSystemSpec = {
  name: string;
  personality: string;
  typography: string;
  palette: string;
  composition: string;
  background: string;
  effects: Array<{ name: string; recipe: string; usage: string }>;
  buttons: string;
  interactions: string;
  imagery: string;
  extensionRules: string[];
  avoid: string[];
};

export function defineDesignSystem(spec: DesignSystemSpec) {
  return spec;
}
