// @flow

import { connect } from 'react-redux';
import type { RouterLocation } from 'types/RouterLocation';
import Router from './Router.view';

const mapStateToProps: Function = ({ location }: { location: RouterLocation }): {
  location: RouterLocation
} => ({
  location,
});

export default connect(mapStateToProps, null)(Router);
