import { Stack } from 'expo-router';

export default function NavigatorLayout() {
  return (
    <Stack initialRouteName="acquisition" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="acquisition"
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
  );
}
