import React from 'react';
import Welcome from '@/Components/Welcome';
import AppLayout from '@/Layouts/AppLayout';

export default function Dashboard() {
  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl px-6 text-slate-50 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      )}
    >
        <Welcome />
    </AppLayout>
  );
}
