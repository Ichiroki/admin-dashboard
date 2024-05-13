import Alert from '@/Components/Alert';
import AppLayout from '@/Layouts/AppLayout';
import React from 'react';

export default function Dashboard() {
  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-slate-50 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      )}
    >
        <Alert message={'You are logged in !'} />
    </AppLayout>
  );
}
