//Home
export const HOME_SECONDARY_TABS = [{label: 'Overview', link: '/home'}, {label: 'Check-in', link: '/home/check-in'}, {label: 'Profile', link: '/home/profile'}]  

//Food
export const FOOD_SECONDARY_TAB = [{label: 'Diary', link: '/food'}, {label: 'Search', link: '/food/search'}, {label: 'Personal', link: '/food/personal'}]  

//Report
export const REPORT_SECONDARY_TABS = [{label: 'Charts', link: '/report'}, {label: 'Achievement', link: '/report/achievement'},{label: 'Export', link: '/report/export'}]  

//Components

export type Tab = {
  label: string;
  link: string;
}

export type NavHeaderProps = {
  primary: string;
  secondary: string;
  secondaryTabs: Tab[];
}

export type PrimaryBarProps = {
  primary: string;
}

export type SecondaryBarProps = {
  secondary: string;
  secondaryTabs: Tab[];
}