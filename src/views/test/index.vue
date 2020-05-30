<template>
  <baidu-map class="map" >    <bm-view class="map">
    </bm-view>
    <bm-driving
      start="天通苑北"
      end="宋家庄地铁站"
      :auto-viewport="true"
      policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
      :panel="false"
      location="北京"
      :waypoints="['西二旗','潭西胜境']">
    </bm-driving><bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation></baidu-map>
</template>
<style>
.map {
  width: 100%;
  height: 100%;
}
</style>