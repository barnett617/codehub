const len = userUsedDetail.length;
const len2 = userUsedDetail2.length;
const group1 = userUsedDetail2.slice(0, 16)
const group2 = userUsedDetail2.slice(16, 32)
const group3 = userUsedDetail2.slice(32, 48)
const groups = [group1, group2, group3];
groups.forEach((group, index) => {
  group.forEach(item => {
    const div = document.createElement('div');
    const avatar = document.createElement('img');
    avatar.setAttribute('src', item.headImage);
    const text = document.createElement('div');
    text.innerText = `${item.nickName}领到租车券一张`;
    div.appendChild(avatar);
    div.appendChild(text);
    const groupDom = document.getElementById(`group${index + 1}`)
    groupDom.appendChild(div)
  })
})
console.log('userUsedDetail', len, len2)