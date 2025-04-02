import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="expenses" options={{ title: 'Expenses' }} />
      <Tabs.Screen name="add-edit" options={{ title: 'Add/Edit Expense' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
