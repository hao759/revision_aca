import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Vision Insight',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' },
    badge: {
      color: 'info',
      text: 'AI Detect'
    }
  },
  {
    name: 'Detect Attendance',
    url: '/detect-attendance',
    iconComponent: { name: 'cil-people' }
  },
  // {
  //   name: 'BlueForce Detect multi',
  //   url: '/blueForce_detect_multi',
  //   iconComponent: { name: 'cil-people' }//blue-force multi
  // },
  {
    name: 'BlueForce Detect',
    url: '/blueForce_detect',
    iconComponent: { name: 'cil-magnifying-glass' }
  },
    {
    name: 'Detect',
    url: '/detect',
    iconComponent: { name: 'cil-magnifying-glass' }
  },
  {
    name: 'Ken Detect',
    url: '/ken_detect',
    iconComponent: { name: 'cil-drink-alcohol' }
  },
  {
    name: 'Trademt Detect',
    url: '/trademt_detect',
    iconComponent: { name: 'cil-drink-alcohol' }
  },
  {
    name: 'Attendance Result QC',
    url: '/attendance-result-qc',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Attendance Result PPT',
    url: '/attendance-result-ppt',
    iconComponent: { name: 'cil-chart' }
  },
  {
    name: 'Attendance Result Abbott',
    url: '/attendance-result-abbott',
    iconComponent: { name: 'cil-spreadsheet' }
  },
  {
    name: 'Employees Profile',
    url: '/employees-profile',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Employees Abbott',
    url: '/employees-abbott',
    iconComponent: { name: 'cil-people' }
  },
  // {
  //   name: 'Detect Brand',
  //   url: '/detect',
  //   iconComponent: { name: 'cil-people' }
  // }
  {
    name: 'Product By Shop',
    url: '/totalByShop',
    iconComponent: { name: 'cil-people' }
  }, {
    name: 'Umer Demo',
    url: '/umer-demo',
    iconComponent: { name: 'cil-spreadsheet' }
  },
   {
    name: 'Blue Force Demo',
    url: '/blueforce-demo',
    iconComponent: { name: 'cil-spreadsheet' }
  },
     {
    name: 'Trade Demo',
    url: '/trademt-demo',
    iconComponent: { name: 'cil-spreadsheet' }
  },
       {
    name: 'Demo mutil',
    url: '/demo-mutil',
    iconComponent: { name: 'cil-spreadsheet' }
  },
  {
    name: 'Product By Shop Umer',
    url: '/totalByShopUmer',
    iconComponent: { name: 'cil-people' }
  },
    {
    name: 'Product By Shop Blue Force',
    url: '/totalByShopBlueForce',
    iconComponent: { name: 'cil-people' }
  },


];
