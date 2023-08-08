import { Profile } from '../types/types';

export const propertySetter = <T extends keyof Profile>(
  property: T,
  profile: Profile,
  newValue: Profile[T]
) => {
  const clone = structuredClone(profile);
  clone[property] = newValue;
  return clone;
};
