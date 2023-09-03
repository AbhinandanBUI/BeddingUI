export const pagesMenuList =  [
  {
    icon: 'house-door',
    label: 'Dashboard',
    route: '/pages/dashboard',
    subItems: []
  },
  {
    icon: 'grid',
    label: 'Layouts',
    subItems: [
      { label: 'Without menu', route: '' },
      { label: 'Without navbar', route: 'layouts-without-navbar.html' },
      { label: 'Container', route: 'layouts-container.html' },
      { label: 'Fluid', route: 'layouts-fluid.html' },
      { label: 'Blank', route: 'layouts-blank.html' }
    ]
  },
  {
    icon: 'gear-fill',
    label: 'User Interface',
    subItems: [
      { label: 'Accordion', route: 'accordion' },
      { label: 'Alert', route: 'alert' },
      { label: 'Badges', route: 'badges' },
      { label: 'Buttons', route: 'button' },
      { label: 'Carousel', route: 'carousel' },
      { label: 'Collapse', route: 'collapse' },
      { label: 'Dropdown', route: 'dropdowns' },
      { label: 'Footer', route: 'footer' },
      { label: 'List group', route: 'listgroup' },
      { label: 'Model', route: 'model' },
      { label: 'Navbar', route: 'navbar' },
      { label: 'Offcanvas', route: 'offcanvas' },
      { label: 'Paggination', route: 'pagination' },
      { label: 'Progress', route: 'progress' },
      { label: 'Spinners', route: 'spinner' },
      { label: 'Tables', route: 'table' },
      { label: 'Tabs and pills', route: 'tabs' },
      { label: 'Toasts', route: 'toast' },
      { label: 'Tooltip and popover', route: 'tooltip' },
      { label: 'Typography', route: 'trypography' },
    ]
  },
  {
    icon: 'gear-fill',
    label: 'Card',
    subItems: [

      { label: 'Card', route: 'card' }
    ]
  },
  {
    icon: 'person-vcard-fill',
    label: 'Account',
    subItems: [
      { label: 'Account', route: 'account' },
      { label: 'Notification', route: 'notification' },
      { label: 'Connection', route: 'connection' },
    ]
  },
  {
    icon: 'person-fill-lock',
    label: 'Authentication',
    subItems: [
      { label: 'Login', route: 'login' },
      { label: 'Registration', route: 'registration' },
      { label: 'Forget password', route: 'forget-password' },
    ]
  },
  {
    icon: 'file-richtext-fill',
    label: 'Form',
    subItems: [
      { label: 'Basic', route: 'basic' },
      { label: 'Input', route: 'input' },
      { label: 'Vertical', route: 'vertical' },
      { label: 'Horizontal', route: 'horizontal' },
    ]
  }
];
