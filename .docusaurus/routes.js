import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f15'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b93'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'aff'),
            routes: [
              {
                path: '/advanced/database',
                component: ComponentCreator('/advanced/database', '806'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/advanced/deployment',
                component: ComponentCreator('/advanced/deployment', '81c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/advanced/security',
                component: ComponentCreator('/advanced/security', '9b1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/advanced/troubleshooting',
                component: ComponentCreator('/advanced/troubleshooting', '0a1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/api/overview',
                component: ComponentCreator('/api/overview', '5a3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/api/statistics',
                component: ComponentCreator('/api/statistics', 'fe0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/api/sync',
                component: ComponentCreator('/api/sync', 'b94'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/api/tickets',
                component: ComponentCreator('/api/tickets', '958'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/bot/commands',
                component: ComponentCreator('/bot/commands', 'e08'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/bot/configuration',
                component: ComponentCreator('/bot/configuration', '095'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/bot/interactions',
                component: ComponentCreator('/bot/interactions', 'c88'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/bot/overview',
                component: ComponentCreator('/bot/overview', 'ec5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/dashboard/auth',
                component: ComponentCreator('/dashboard/auth', 'bb8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/dashboard/features',
                component: ComponentCreator('/dashboard/features', '158'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/dashboard/overview',
                component: ComponentCreator('/dashboard/overview', '99b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/dashboard/settings',
                component: ComponentCreator('/dashboard/settings', '862'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/guides/admins',
                component: ComponentCreator('/guides/admins', '2b9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/guides/auditors',
                component: ComponentCreator('/guides/auditors', '606'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/guides/developers',
                component: ComponentCreator('/guides/developers', '88d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/guides/moderators',
                component: ComponentCreator('/guides/moderators', '2ca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/introduction',
                component: ComponentCreator('/introduction', '6f2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/quick-start',
                component: ComponentCreator('/quick-start', 'd05'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/roles',
                component: ComponentCreator('/roles', '70f'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
