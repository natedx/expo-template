import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/types';
import merge from 'deepmerge';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const CustomDarkTheme: Theme = {
  ...CombinedDarkTheme,

  colors: {
    ...CombinedDarkTheme.colors,
    primary: '#31f2ef',
    accent: '#ffbf00',
    background: '#191919',

    text: 'white',
  },
};

const CustomDefaultTheme = {
  ...CombinedDefaultTheme,
  colors: {
    ...CombinedDefaultTheme.colors,

  }
}

export {CustomDarkTheme, CustomDefaultTheme};
