function genWholeAddr(addrList, id) {
    let name = '';
    function helper(addrList, curName, targetId) {
        for (let i = 0; i < addrList.length; i++) {
            const addr = addrList[i];
            if (addr.id === targetId) {
                name += curName + addr.name;
                return;
            } else if (addr.children && Array.isArray(addr.children)) {
                helper(addr.children, curName + addr.name, targetId);
            }
        }
    }
    helper(addrList, '', id);
    return name;
}

const cityData = [{
    id: 'axzx',
    name: '广东省',
    children: [
        {
            id: 'sdsd',
            name: '深圳市',
            children: [
                {
                    id: '45dss',
                    name: '南山区'
                },
                {
                    id: 'sdsd11',
                    name: '福田区',
                    children: [{
                        id: 'ddrr2',
                        name: 'A街道'
                    }]
                }
            ]
        },
        {
            id: '2323d',
            name: '东莞市',
            children: [
                {
                    id: 'xxs2',
                    name: 'A区'
                },
                {
                    id: 'kklio2',
                    name: 'B区',
                }
            ]
        }
    ]
}];

// 由于地址的结构存在重复性，所以是一道很好的练习【递归】的题目

// 递归设计是假设输入项是一个数组，数组的每一项都可能有子节点数组
// 我们只需要判断当前遍历到的节点是否为目标节点，并且在向下遍历的过程中
// 不断记录该链路累加的【地址名称】
// 当寻找到目标节点时进行递归的终止即可

function genWholeAddr(addrList, id) {
    let name = '';
    function helper(addrList, curName, targetId) {
        for (let i = 0; i < addrList.length; i++) {
            const addr = addrList[i];
            if (addr.id === targetId) {
                name += curName + addr.name;
                return;
            } else if (addr.children && Array.isArray(addr.children)) {
                helper(addr.children, curName + addr.name, targetId);
            }
        }
    }
    helper(addrList, '', id);
    return name;
}


const testcase = [
    {
        input: [cityData, 'axzx'],
        expect: '广东省'
    },
    {
        input: [cityData, 'sdsd'],
        expect: '广东省深圳市'
    },
    {
        input: [cityData, '45dss'],
        expect: '广东省深圳市南山区'
    },
    {
        input: [cityData, 'sdsd11'],
        expect: '广东省深圳市福田区'
    },
    {
        input: [cityData, 'ddrr2'],
        expect: '广东省深圳市福田区A街道'
    },
    {
        input: [cityData, '2323d'],
        expect: '广东省东莞市'
    },
    {
        input: [cityData, 'xxs2'],
        expect: '广东省东莞市A区'
    },
    {
        input: [cityData, 'kklio2'],
        expect: '广东省东莞市B区'
    },
]
function main() {
    const res = [];
    testcase.forEach(test => {
        const [cityData, id] = test.input
        const output = genWholeAddr(cityData, id);
        res.push({
            input: test.input,
            expect: test.expect,
            output
        })
    });
    console.table(res);
}
main();
