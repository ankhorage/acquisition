import { Stack } from 'expo-router';
import { GeneratedRuntimeShell as NavigatorRootLayoutWrapper } from '@/generated/runtimeShell';

export default function NavigatorLayout() {
  return (
    <NavigatorRootLayoutWrapper>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Companies',
        }}
      />
      <Stack.Screen
        name="company-detail-wetzikon-technik"
        options={{
          title: 'Wetzikon Technik AG',
        }}
      />
      <Stack.Screen
        name="company-detail-alpenblick-digital"
        options={{
          title: 'Alpenblick Digital GmbH',
        }}
      />
      <Stack.Screen
        name="company-detail-seeblick-architektur"
        options={{
          title: 'Seeblick Architektur AG',
        }}
      />
    </Stack>
    </NavigatorRootLayoutWrapper>
  );
}
