import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}

function getCurrentUser(req: Request, res: Response) {
  res.send({
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    actions: [
      { module: 'module1', action: 'action1' },
      { module: 'module1', action: 'action2' },
      { module: 'module1', action: 'action3' },
      { module: 'module2', action: 'action1' },
      { module: 'module2', action: 'action2' },
    ],
    access: [
      { group: 'module1', actions: ['action1', 'action2', 'action3'] }
    ],
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  });
}

export default {
  'GET  /api/login/captcha': getFakeCaptcha,

  'GET /api/currentUser': getCurrentUser
}