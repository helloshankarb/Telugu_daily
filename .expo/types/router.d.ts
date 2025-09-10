/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/previous` | `/(tabs)/profile` | `/(tabs)/progress` | `/_sitemap` | `/previous` | `/profile` | `/progress`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
