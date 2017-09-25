// @flow

import React from 'react';
import { Button } from 'components';

const DanielsPage = (): React$Element<*> => (
  <div>
    <h2>Daniels</h2>

    <div>
      <Button text="My UI button" isPrimary={true} onClick={() => undefined} />
    </div>
  </div>
);

export default DanielsPage;
