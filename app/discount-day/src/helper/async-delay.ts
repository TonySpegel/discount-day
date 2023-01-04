/**
 * Copyright © 2022/2023 Tony Spegel
 */

export const asyncDelay = async (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
