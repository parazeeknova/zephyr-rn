import '../global.css';

import { Stack } from 'expo-router';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

export default function Layout() {
  return (
    <GluestackUIProvider>
      <Stack />
    </GluestackUIProvider>
  );
}
