import { createMachine } from "xstate";

export const myMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EARgDsAThISAzAA4zAFjMA2Axb0AmEwYA0IAJ66ArCeOXvHRcdb18dGxMAX0j3NCw8QlJseiZWTl4BLgAVSRkkEAUlFTUNbQQdMz9wvV8TGzN7ept3L3KJEgadCW9HRwNQywlu6JiQCgg4DTicAmINQuVVdXyygFpmz0RVvRsSPokzR0s9PSsdR289aNiMGcSyKloGZgh5xUWSlcRLRxbEWxINksAQMBkcEicJ2s1xA0wSxBIyWekDeRSWpUQJksfgaFm8Nj04RM+h0lj+CAaJFJILBEMcULMI0iQA */
  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        MOUSEOVER: {
          target: "hovered",
        },
      },
    },
    hovered: {
      on: {
        MOUSEOUT: {
          target: "notHovered",
        },
      },
    },
  },
});
