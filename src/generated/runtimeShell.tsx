import type { ReactNode } from 'react';
import { ExpoRuntimeProviders } from '@ankhorage/expo-runtime/providers';
import { ResponsiveProvider } from '@ankhorage/surface';
import { ZoraProvider } from '@ankhorage/zora';

export function GeneratedRuntimeShell({ children }: { readonly children: ReactNode }) {
  return (
    <ResponsiveProvider>
      <ZoraProvider>
        <ExpoRuntimeProviders providers={[]}>{children}</ExpoRuntimeProviders>
      </ZoraProvider>
    </ResponsiveProvider>
  );
}
