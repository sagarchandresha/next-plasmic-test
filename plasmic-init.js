import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from "./components/HelloWorld";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "aysKG949CtH73vfD5nzdxM", // ID of a project you are using
      token:
        "GhYTLc9HBNhTWl1ogWtzxf6tzgNKJ3arrl7tSoaGIAHOkpFC21zHuG5ZS5LOlSXz33rybdcfiv2vyy81AYQ", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
PLASMIC.registerComponent(HelloWorld, {
  name: "HelloWorld",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
