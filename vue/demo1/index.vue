<template>
  <div class="container">
    <div class="zs21-list-9">
      <ul>
        <li class="li-1">
          <div class="list-con">
            <div class="list-pic">
              <a
                href=""
                target="_blank"
                class="almg"
                ><img :src="newsList[0].path" width="285" height="445" alt="" 
              /></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // newsList: []    // bad
      newsList: [{}]  // good
    }
  },
  created() {
    axios.get('xxx').then(res => {
      this.newsList = res;
    })
  }
}
</script>

