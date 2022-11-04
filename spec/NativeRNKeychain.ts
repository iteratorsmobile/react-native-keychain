// @ts-expect-error: missing type definition for module
import type { TurboModule } from 'react-native';
// @ts-expect-error: missing type definition for module
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setGenericPassword(
    username: string,
    password: string,
    options?: Object
  ): Promise<false | Object>;
  getGenericPassword(options?: Object): Promise<false | Object>;
  resetGenericPassword(options?: Object): Promise<boolean>;
  getAllGenericPasswordServices(): Promise<string[]>;
  hasInternetCredentials(server: string): Promise<false | Object>;
  setInternetCredentials(
    server: string,
    username: string,
    password: string,
    options?: Object
  ): Promise<false | Object>;
  getInternetCredentials(
    server: string,
    options?: Object
  ): Promise<false | Object>;
  resetInternetCredentials(server: string, options?: Object): Promise<void>;
  getSupportedBiometryType(options?: Object): Promise<null | string>;
}

export default TurboModuleRegistry.get<Spec>('RNKeychain');




