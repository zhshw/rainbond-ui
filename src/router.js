import React from 'react';
import {routerRedux, Switch} from 'dva/router';
import {LocaleProvider, Spin} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import {getRouterData} from './common/router';
import Authorized from './utils/Authorized';
import IsPubCloud from './components/IsPubCloud';
import styles from './index.less';
import InitRainbondInfo from './components/InitRainbondInfo';
import globalUtil from './utils/global';

const {ConnectedRouter} = routerRedux;
const {AuthorizedRoute} = Authorized;
dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin}/>;
});

function RouterConfig({history, app}) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;
  return (
    
    <InitRainbondInfo>
      <LocaleProvider locale={zhCN}>
        <ConnectedRouter history={history}>

          <Switch>
            <AuthorizedRoute
              path="/user"
              render={props => <UserLayout {...props}/>}
              authority="guest"
              logined={false}
              redirectPath="/"/>
            <AuthorizedRoute
              path="/"
              render={props => <BasicLayout {...props}/>}
              authority={['admin', 'user']}
              logined={true}
              redirectPath="/user/login"/>
          </Switch>

        </ConnectedRouter>
      </LocaleProvider>
    </InitRainbondInfo>
  );
}

export default RouterConfig;
