(function() {
    // 使用 Mock
    var Mock = require('mockjs');
    Mock.mock('/user/login', 'get', options => {
        return {
            code: 0,
            message: '操作成功',
            data: {
                token: 'user_token_qwer1234'
            }
        };
    });

    Mock.mock('/user/user-info-by-token', 'get', options => {
        return {
            code: 0,
            message: '操作成功',
            data: {
                userInfo: {},
                userPopedoms: [
                    {
                        'moduleGroupId': 1001,
                        'moduleGroupName': '仪表盘',
                        'requestMapping': 'dash-board'
                    },
                    {
                        'moduleGroupId': 1100,
                        'moduleGroupName': '工作台',
                        'requestMapping': 'work-bench',
                        'moduleList': [
                            {
                                'moduleId': 1101,
                                'moduleName': '待办事项',
                                'requestMapping': 'todo-list',
                                'moduleGroupId': 1100
                            },
                            {
                                'moduleId': 1102,
                                'moduleName': '我的足迹',
                                'requestMapping': 'my-footprint',
                                'moduleGroupId': 1100
                            }
                        ]
                    },
                    {
                        'moduleGroupId': 1200,
                        'moduleGroupName': '系统管理',
                        'requestMapping': 'sys-manage',
                        'moduleList': [
                            {
                                'moduleId': 1201,
                                'moduleName': '系统日志',
                                'requestMapping': 'sys-log',
                                'moduleGroupId': 1200
                            },
                            // {
                            //     "moduleId": 1202,
                            //     "moduleName": "系统安全",
                            //     "requestMapping": "sys-security",
                            //     "moduleGroupId": 1200,
                            // },
                            {
                                'moduleId': 1203,
                                'moduleName': '系统维护',
                                'requestMapping': 'sys-maintain',
                                'moduleGroupId': 1200
                            }
                        ]
                    },
                    {
                        'moduleGroupId': 1301,
                        'moduleGroupName': '用户管理',
                        'requestMapping': 'user-manage'
                    }
                ]
            }
        };
    });
})();
