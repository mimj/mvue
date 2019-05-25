import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../Home/HomePage'
import RobotBuilder from '../build/RobotBuilder'
import PartInfo from '../parts/PartInfo'
import BrowseParts from '../parts/BrowseParts'
import RobotHeads from '../parts/RobotHeads'
import RobotArms from '../parts/RobotArms'
import RobotTorsos from '../parts/RobotTorsos'
import RobotBases from '../parts/RobotBases'
import StandardSidebar from '../sidebars/SidebarStandard'
import BuildSidebar from '../sidebars/SidebarBuild'
import ShoppingCart from '../cart/ShoppingCart'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                default: HomePage,
                sidebar: StandardSidebar
            },
        }, {
            path: '/build',
            name: 'Build',
            components: {
                default: RobotBuilder,
                sidebar: BuildSidebar
            },
        }, {
            path: '/parts/browse',
            name: 'BrowseParts',
            component: BrowseParts,
            children: [
                {
                    name: 'BrowseHeads',
                    path: 'heads',
                    component: RobotHeads,
                }, {
                    name: 'BrowseArms',
                    path: 'arms',
                    component: RobotArms,
                }, {
                    name: 'BrowseTorsos',
                    path: 'torsos',
                    component: RobotTorsos,
                }, {
                    name: 'BrowseBases',
                    path: 'bases',
                    component: RobotBases,
                }
            ]
        }, {
            path: '/parts/:partType/:id',
            name: 'Parts',
            component: PartInfo,
            props: true,
            beforeEnter(to, before, next) {
                const isValid = Number.isInteger(Number(to.params.id))
                next(isValid)
            }
        }, {
            path: '/cart',
            name: 'Cart',
            component: ShoppingCart
        }
    ],
})