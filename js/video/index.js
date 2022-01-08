function getVideo() {
  const videoLink = document.querySelectorAll('video')[0].currentSrc;
  return videoLink;
}

function mockUp() {
  const wrap = document.querySelector('.swiper-wrapper');
  const transformItem = wrap.style.transform;;

  let newY = 0;

  const originYStr = transformItem.split(',')[1];
  originYNum = originYStr.replace('px', '') * 1;
  newY = (originYNum - 377) + 'px';

  let newTransformItem = `translate3d(0px, ${newY}, 0px)`;

  wrap.style.transform = newTransformItem;
}

function mockChange() {
  const prev = document.querySelector('.swiper-slide-prev');
  const active = document.querySelector('.swiper-slide-active');
  const next = document.querySelector('.swiper-slide-next');
  const nextSibling = next.nextElementSibling;

  prev && (prev.classList.remove('swiper-slide-prev'));
  active.classList.replace('swiper-slide-active', 'swiper-slide-prev');
  next.classList.replace('swiper-slide-next', 'swiper-slide-active');
  nextSibling.classList.add('swiper-slide-next');
}

function handleSwitch(switchOn = true) {
  const xgPlay = document.querySelector('.xgplayer-play');
  const state = xgPlay.dataset.state;
  if (switchOn && state === 'pause') {
    xgPlay.click();
  } else if (!switchOn && state === 'play') {
    xgPlay.click();
  }
}

function mockTouch() {
  var x = 100;
  var y = 200;
  var touch = new Touch({
    identifier: Date.now(),
    target: this.touchEle,
    clientX: x,
    clientY: y,
    pageY: y,
    pageX: x,
    radiusX: 2.5,
    radiusY: 2.5,
    rotationAngle: 10,
    force: 0.5
  });
  // 构建TouchEvent
  var touchEvent = new TouchEvent('touchstart', {
    cancelable: true,
    bubbles: true,
    touches: [touch],
    targetTouches: [touch],
    changedTouches: [touch]
  });

  btn.dispatchEvent(touchEvent);
}

function mockNext() {
  const nextBtn = document.querySelector('.xgplayer-playswitch-next');
  nextBtn.click();
}

function main() {
  const videos = [];
  window.timer = setInterval(() => {
    document.querySelector('.xgplayer-playswitch-next').click();
    const videoDom = document.querySelectorAll('video')[0];
    const videoSrc = videoDom.lastChild.src;
    if (videoSrc) {
      const params = videoSrc.split('&');
      const fileId = params.filter(param => param.includes('file_id'))[0].split('=')[1];
      const videoId = params.filter(param => param.includes('video_id'))[0].split('=')[1];
      console.table(params);
      console.log('fileId', fileId)
      videos.push({
        fileId: fileId,
        videoId: videoId
      });
    }
  }, 2000)
  setTimeout(() => {
    clearInterval(window.timer);
    console.table(videos);
    console.log('result', videos);
  }, 10000)
}
main();


function getVideo() {
  const listUrl = 'https://www.douyin.com/aweme/v1/web/aweme/related/?device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=7036671388559674636&count=20&filterGids=7036671388559674636&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=96.0.4664.110&browser_online=true&engine_name=Blink&engine_version=96.0.4664.110&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7050438347827889700&msToken=puF8AVWbvStyK22-gWF7FXhs45aECrnlyyCXdDXKsh-pTzO6nq9kNYOaqMWlwN3z7mJ4dRJEWCphVQiVwHQUTmwo-0nIovVaQpVx0NLo-GJiKiaKdzPll9s=&X-Bogus=DFSzsdVOz7bANVLpSonyOr7TlqSK&_signature=_02B4Z6wo000011xI5QQAAIDAyJ6-Ck-p4j9cTOGAALbVN8YK5nhhWj-CrDCEM1BLZ1J.SqR5rNmrem0XfU4HxErPfuWzr7it3Z9p0xvPl77V3z6HeSiMCKehNHrrCTTxH3z9ftSMeHs8ZmNFc1'
  fetch(listUrl)
    .then(res => {
      if (res.status * 1 === 200) {
        console.log('res', res);
        const data = res.json();
        if (data) {
          console.log('data', data);
        }
      }
    })
}

function fetchVideoDataStream() {
  const jsonStr = ''
  fetch('https://www.douyin.com/aweme/v1/web/tab/feed/?device_platform=webapp&aid=6383&channel=channel_pc_web&tag_id=&share_aweme_id=&count=10&refresh_index=2&video_type_select=0&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=96.0.4664.110&browser_online=true&engine_name=Blink&engine_version=96.0.4664.110&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7050438347827889700&msToken=xu0KzYSU8c-_-NkSFzoNxuv4O3tQ0CxuLBxewaFMZ-zdJpBzJJvkrJAB7WSOUcFwXSKjKp1_dRXKznOzf4nYbwgtem0-qmU9NBs_gU5gaBx-V3UC_TRnoygykCcsZ4HT&X-Bogus=DFSzsdVYeHtAN9irSo9Aer7Tlqea&_signature=_02B4Z6wo00001tbPXlwAAIDBQhkFUib7GKbWy1rAANR34EeHpC771b7dvW8mQ7VkXSNMTYxCQQVyCWGGFXpG9RE4JpWzUL5OVVouZjye44dA70nt6cP7TPifHLAgfjgrvRNkZ-DzS3EJJhCG34', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }
  })
  .then(res => {
    console.log('res', res)
  })
}
fetchVideoDataStream()

// device_platform=webapp&aid=6383&channel=channel_pc_web&tag_id=&share_aweme_id=&count=10&refresh_index=2&video_type_select=0&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=96.0.4664.110&browser_online=true&engine_name=Blink&engine_version=96.0.4664.110&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7050438347827889700&msToken=xu0KzYSU8c-_-NkSFzoNxuv4O3tQ0CxuLBxewaFMZ-zdJpBzJJvkrJAB7WSOUcFwXSKjKp1_dRXKznOzf4nYbwgtem0-qmU9NBs_gU5gaBx-V3UC_TRnoygykCcsZ4HT&X-Bogus=DFSzsdVYeHtAN9irSo9Aer7Tlqea&_signature=_02B4Z6wo00001tbPXlwAAIDBQhkFUib7GKbWy1rAANR34EeHpC771b7dvW8mQ7VkXSNMTYxCQQVyCWGGFXpG9RE4JpWzUL5OVVouZjye44dA70nt6cP7TPifHLAgfjgrvRNkZ-DzS3EJJhCG34
// device_platform=webapp&aid=6383&channel=channel_pc_web&tag_id=&share_aweme_id=&count=10&refresh_index=2&video_type_select=0&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=96.0.4664.110&browser_online=true&engine_name=Blink&engine_version=96.0.4664.110&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7050438347827889700&msToken=xu0KzYSU8c-_-NkSFzoNxuv4O3tQ0CxuLBxewaFMZ-zdJpBzJJvkrJAB7WSOUcFwXSKjKp1_dRXKznOzf4nYbwgtem0-qmU9NBs_gU5gaBx-V3UC_TRnoygykCcsZ4HT&X-Bogus=DFSzsdVYeHtAN9irSo9Aer7Tlqea&_signature=_02B4Z6wo00001tbPXlwAAIDBQhkFUib7GKbWy1rAANR34EeHpC771b7dvW8mQ7VkXSNMTYxCQQVyCWGGFXpG9RE4JpWzUL5OVVouZjye44dA70nt6cP7TPifHLAgfjgrvRNkZ-DzS3EJJhCG34