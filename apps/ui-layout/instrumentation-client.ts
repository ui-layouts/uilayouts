import { createAgent, registerTools } from '@ui-sdk/react/agent';

const agent = createAgent();

registerTools(agent, {
  allow: (step) => !step.confirm || window.confirm(step.confirm),
});
