/**
 * Copyright © 2022/2023 Tony Spegel
 */

export const parseUrlParam = <T>(param: string): T | null => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get(param) as T | null;
};
