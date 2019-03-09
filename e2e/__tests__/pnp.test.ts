/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'path';
import {json as runWithJson} from '../runJest';
import {run} from '../Utils';

const DIR = path.resolve(__dirname, '..', 'pnp');

beforeEach(() => {
  run('yarn', DIR);
});

it('sucessfully runs the tests inside `pnp/`', () => {
  const {json} = runWithJson(DIR, ['--no-cache', '--coverage'], {
    nodeOptions: `--require ${DIR}/.pnp.js`,
  });
  expect(json.success).toBe(true);
  expect(json.numTotalTestSuites).toBe(1);
});