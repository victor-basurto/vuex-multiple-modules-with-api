interface INavigationData  {
	subMenu?: Array<INavigationMenu>;
}
export interface INavigationMenu extends INavigationData {
	url: string;
	label: string;
}

export const mainNavMenu: INavigationMenu[] = [{
	url: '/',
	label: 'Home'
}, {
	url: '/about',
	label: 'About',
	// subMenu: [{
	// 	url: '/contact',
	// 	label: 'Contact'
	// }]
}]


