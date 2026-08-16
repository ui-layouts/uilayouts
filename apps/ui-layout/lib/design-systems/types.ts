export type DesignSystemSpec = {
  name: string;
  sourceFiles: Array<{ path: string; role: string }>;
  dependencies: Array<{
    name: string;
    kind: 'external' | 'workspace' | 'local';
    role: string;
    install?: string;
  }>;
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
