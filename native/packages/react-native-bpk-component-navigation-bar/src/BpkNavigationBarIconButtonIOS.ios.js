/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import BpkIcon, { icons } from 'react-native-bpk-component-icon';
import { colorGray700 } from 'bpk-tokens/tokens/base.react.native';

export type Props = {
  title: string,
  icon: $Keys<typeof icons>,
  onPress: ?() => mixed,

  // Internal only
  leading: boolean,
  tintColor: ?string,
};

const styles = StyleSheet.create({
  button: {
    zIndex: 2,
  },
  icon: {
    lineHeight: 28,
    fontSize: 28,
  },
  leading: {
    marginStart: 3,
  },
  trailing: {
    marginEnd: 3,
  },
});

const BpkNavigationBarIconButtonIOS = (props: Props) => {
  const { title, icon, leading, onPress, tintColor } = props;
  const tintColorFinal = tintColor || colorGray700;
  const iconStyle = [styles.icon, { color: tintColorFinal }];
  const buttonStyle = [styles.button];

  if (leading) {
    buttonStyle.push(styles.leading);
  } else {
    buttonStyle.push(styles.trailing);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityComponentType="button"
      accessibilityTraits={['button']}
      accessibilityLabel={title}
      accessible
      style={buttonStyle}
    >
      <BpkIcon icon={icons[icon]} style={iconStyle} />
    </TouchableOpacity>
  );
};

BpkNavigationBarIconButtonIOS.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  onPress: PropTypes.func,

  // Internal only
  leading: PropTypes.bool,
  tintColor: PropTypes.string,
};

BpkNavigationBarIconButtonIOS.defaultProps = {
  onPress: null,

  // Internal only
  leading: false,
  tintColor: null,
};

export default BpkNavigationBarIconButtonIOS;