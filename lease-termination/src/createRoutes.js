import MainView from './components/MainView.vue';
import StartView from './components/StartView.vue';
import MiddleView from './components/MiddleView.vue';
import EndView from './components/EndView.vue';

export default (config = {}) => {
  // Destructure config and set defaults
  const {
    path = 'lease-termination',
    routeNamePrefix = 'lt_',
    vuexModuleName = 'leaseTermination',
    propsResolver = ({ params }) => ({ tenancyId: params.tenancyId }),
  } = config;

  const innerPropsResolver = (params) => {
    const props = propsResolver(params);
    props.routeNamePrefix = routeNamePrefix;
    props.vuexModuleName = vuexModuleName;
    return props;
  };

  return [
    {
      path,
      component: MainView,
      props: innerPropsResolver,
      children: [
        {
          path: '',
          name: routeNamePrefix + 'start',
          component: StartView,
        },
        {
          path: 'middle',
          name: routeNamePrefix + 'middle',
          component: MiddleView,
        },
        {
          path: 'end',
          name: routeNamePrefix + 'end',
          component: EndView,
        },
      ]
    }
  ];
};