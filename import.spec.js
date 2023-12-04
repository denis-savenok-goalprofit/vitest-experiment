import { expect, test, it } from 'vitest';

test('import', async () => {
  const code = '() => import(\'./asset.js\')';
  const func = eval(code);
  const { default: defaultFunc } = func();
  const a = await defaultFunc();
  await vi.dynamicImportSettled();
  expect(a).toBeTruthy();
});
