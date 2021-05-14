declare module '*.scss' {
    import type {StyleProp} from 'react-native';
  
    const styles: Record<string, StyleProp<any>>;
  
    export default styles;
  }
  