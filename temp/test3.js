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

  const res = genWholeAddr(cityData, 'ddrr2');
  console.log('res', res);