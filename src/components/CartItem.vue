<template>
  <div class="flex items-center cart-item">
    <img :src="imgUrl" alt="">
    <div class="cart-item-info">
      <div class="cart-item-title">
        <h4>Italy Pizza</h4>
        <p class="nunito-font">Extra cheese and toping</p>
      </div>
      <div class="cart-item-control">

      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import imgUrl from '../assets/img/Rectangle_19.png';

  const props = defineProps(['itemData'])
  const backBtnTitle = ref('Shopping Continue')
  const title = ref('Shopping Cart')
  const desc = ref('You have 3 item in your cart');



</script>

<style lang="scss" scoped>
  .cart-item {
    flex-shrink: 0;
    padding: 10px 23px 10px 10px;
    border-radius: 15px;
    background-color: #FFF;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

    img {
      display: block;
      margin-right: 18px;
      border-radius: 8px;
    }
    .cart-item-info {
      .cart-item-title {
        color: #1E1E1E;
        font-style: normal;
        font-weight: 500;
        h4 {
          padding: 0;
          margin: 0;
          margin-bottom: 3px;
          font-size: 18px;
          line-height: normal;
        }
        p {
          padding: 0;
          margin: 0;
          font-size: 14px;
          line-height: normal;
        }
      }
    }
  }
</style>
