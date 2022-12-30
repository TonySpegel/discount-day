/**
 * Copyright © 2022/2023 Tony Spegel
 */

export const currentDay = () =>
  new Date(Date.now())
    .toLocaleDateString('en-US', { weekday: 'long' })
    .toLowerCase();
