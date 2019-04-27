import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/news.test.js', () => {
  let ctx: Context;
  before(async () => {
    ctx = app.mockContext();
  });

  it('description', async () => {
    const list = await ctx.service.news.list();
    assert(list.length === 30);
  });
});
