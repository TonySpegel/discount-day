/**
 * Copyright © 2022/2023 Tony Spegel
 */

import { asyncDelay } from './async-delay.js';

export const get = async <T>(
  url: string,
  delay: boolean = true
): Promise<T> => {
  if (delay) await asyncDelay(500);

  const response = await fetch(url);
  return await response.json();
};
