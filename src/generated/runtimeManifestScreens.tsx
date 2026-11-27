import type { AppManifest } from '@ankhorage/contracts';
import { RuntimeScreen } from '@ankhorage/runtime';
import { createZoraComponentRegistry } from '@ankhorage/zora';
import runtimeManifest from "../ankh.manifest";

const manifest = runtimeManifest as AppManifest;
const registry = createZoraComponentRegistry();

function createManifestScreen(screenId: string) {
  const screen = manifest.screens[screenId];
  if (screen === undefined) {
    throw new Error(`Generated Runtime screen binding is missing manifest screen '${screenId}'.`);
  }
  return function ManifestScreen() {
    return <RuntimeScreen manifest={manifest} registry={registry} screen={screen} />;
  };
}

export const ManifestScreen0 = createManifestScreen("acquisition");
export const ManifestScreen1 = createManifestScreen("company-detail-alpenblick-digital");
export const ManifestScreen2 = createManifestScreen("company-detail-seeblick-architektur");
export const ManifestScreen3 = createManifestScreen("company-detail-wetzikon-technik");
