

import { test, expect } from '@sand4rt/experimental-ct-web';
import { MyComponent } from './my-component'

test.describe('MyComponent', () => {
  test('by default, it should start with 0', async ({ mount }) => {
    const component = await mount(MyComponent);
    await expect(component.locator('button')).toContainText('0');
  })

  test('should start with number 5', async ({ mount }) => {
    const component = await mount(MyComponent, {
      props: {
        count: 5
      }
    });
    await expect(component.locator('button')).toContainText('5');
  })

  test('should increment the counter by one', async ({ mount }) => {
    const component = await mount(MyComponent);
    component.locator('button').click();

    await expect(component.locator('button')).toContainText('1');
  })
})
