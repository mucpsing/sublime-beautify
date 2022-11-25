<!--
 * @Author: CPS
 * @email: 373704015@qq.com
 * @Date:
 * @Last Modified by: CPS
 * @Last Modified time: 2021-04-28 00:49:47.901649
 * @Filename serieList.vue
 * @Description: 功能描述
-->

<template>
  <div>
<!-- house-section start -->
    <view class="house-section" id="edit-section">
      <!-- 产品系列弹出框 -->
      <view class="serie-list" v-show="toggleProductSerieList">
        <view
          class="serie-list-mask"
          @click="displayToggter('toggleProductSerieList')"
        ></view>
        <view class="serie-list-body serie-product" id="toggleProductSerieList">
          <view class="serie-list-header">
            产品系列({{ productSerieList.length }})
          </view>
          <button
            v-for="item, index in productSerieList"
            :key="index"
            class="serie-list-btns"
            @click="changeProductSerie(item, index)"
          >
            {{ item.serie_name }}
          </button>
        </view>
      </view>
    </view>


      <!-- end -->
      <span class="iconfont iconfont iconfont iconfont iconfont iconfont icon-tupian control-icon control-picture share-by-pic"></span>
      <span class="iconfont iconfont iconfont iconfont iconfont iconfont icon-tupian control-icon control-picture share-by-pic"></span>
      <span class="iconfont iconfont iconfont iconfont iconfont iconfont icon-tupian control-icon control-picture share-by-pic"></span>
  </div>
</template>