import { Elysia, t, status } from "elysia";

export const welcomeRoute = new Elysia().get(
  "/",
  ({ query, set }) => {

    // This is a little easter egg for anyone who decided to check out my repository and found this.
    if ("coffee" in query) {
      set.status = 418;

      return status(418, {
        error: "418 I'm a teapot 🫖",
        message: "You requested coffee, but this server runs strictly on tea.",
        tip: "Try brewing an espresso locally instead.",
      }) as any;
    }

    return {
      greeting: "Hey there! 👋",
      message: "Welcome to the backend API powering julianmaggio.com.",
      docs: "https://www.julianmaggio.com/api/docs",
      github: "https://github.com/julianmaggio/personal-website",
    };
  },
  {
    response: t.Object({
      greeting: t.String(),
      message: t.String(),
      docs: t.String(),
      github: t.String(),
    }),
    detail: {
      summary: "API Landing Page",
      description: "The main entryway for API visitors.",
      tags: ["General"],
    },
  },
);
