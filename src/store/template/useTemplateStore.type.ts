export type TemplateStoreState = {
  first: string;
  second: string;
  third: string;
};

export type TemplateStoreActions = {
  setFirst: (state: TemplateStoreState['first']) => void;
  setSecond: (state: TemplateStoreState['second']) => void;
  setThird: (state: TemplateStoreState['third']) => void;
};

export type TemplateStore = TemplateStoreState & TemplateStoreActions;
