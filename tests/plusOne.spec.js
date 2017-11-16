/* global expect*/

import { expect } from 'chai';

import plusOne from '../src';

describe('Basic tests', () => {
  it('Work', () => expect(plusOne(1)).to.equal(2));
});
