<template>
  <div class="row shop-container">
    <div class="col-7 cart-list">
      <div class="cart-nav">
        <q-btn class="no-padding back-btn text-capitalize" flat>
          <q-icon class="q-pr-sm" name="fa-solid fa-chevron-left" size="15px"/>
          {{backBtnTitle}}
        </q-btn>
      </div>
      <div class="cart-title">
        <h2>{{title}}</h2>
        <p class="nunito-font">{{desc}}</p>
      </div>

     <div class="cart-item-wrapper">
       <cart-item/>
     </div>
    </div>
    <div class="col-5 card-detail">{{backBtnTitle}}</div>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import CartItem from "components/CartItem.vue";
  const backBtnTitle = ref('Shopping Continue')
  const title = ref('Shopping Cart')
  const desc = ref('You have 3 item in your cart')

</script>

<style lang="scss" scoped>
  .shop-container {
    max-width: 1150px;
    width: 100%;
    padding: 50px 45px;
    background-color: white;

    .cart-nav {
      border-bottom: 1.5px solid #D0CFCF;
      margin-bottom: 23px;
    }

    .back-btn {
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 5px;
    }
    .cart-list {
      padding-right: 55px;
    }

    .cart-title {
      margin-bottom: 29px;
      h2 {
        padding: 0;
        margin: 0;
        color: #1E1E1E;
        font-size: 18px;
        font-weight: 500;
        line-height: normal;
      }
      p {
        color: #1E1E1E;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
</style>
