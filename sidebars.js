// sidebars.js
const sidebars = {
  docs: [
    { type: 'category', label: 'البدء', items: ['introduction','quick-start','roles'] },
    { type: 'category', label: 'بوت الديسكورد', items: [
      'bot/overview','bot/commands','bot/interactions','bot/configuration'
    ]},
    { type: 'category', label: 'لوحة الويب', items: [
      'dashboard/overview','dashboard/auth','dashboard/features','dashboard/settings'
    ]},
    { type: 'category', label: 'مرجع API', items: [
      'api/overview','api/tickets','api/statistics','api/sync'
    ]},
    { type: 'category', label: 'الأدلة الداخلية', items: [
      'guides/admins','guides/moderators','guides/auditors','guides/developers'
    ]},
    { type: 'category', label: 'متقدم', items: [
      'advanced/database','advanced/deployment','advanced/troubleshooting','advanced/security'
    ]}
  ]
};

export default sidebars;