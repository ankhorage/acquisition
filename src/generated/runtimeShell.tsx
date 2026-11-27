import type { ReactNode } from 'react';
import { ExpoRuntimeProviders } from '@ankhorage/expo-runtime/providers';

export function GeneratedRuntimeShell({ children }: { readonly children: ReactNode }) {
  return <ExpoRuntimeProviders providers={[]}>{children}</ExpoRuntimeProviders>;
}
