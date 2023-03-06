<template>
  <div v-if="show">
    <div class="modal-overlay" @click="$emit('close')"></div>
    <div class="modal">
      <div class="modal-header">
        <h3>Logout</h3>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to log out?</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" @click="$emit('logout')">
          Yes, log me out
        </button>
        <button class="btn btn-secondary" @click="$emit('close')">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LogoutModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 70px; /* aligns the modal with the header */
  left: 0;
  width: 100%;
  height: calc(
    100% - 70px
  ); /* subtracts the header height from the modal height */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    display: grid;
    place-items: center;
    max-width: 22rem;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    
    .modal-header h3 {
      margin: 0;
      line-height: 24px;
    }
    
    .modal-body p {
      margin: 8px 0;
      font-size: 18px;
    }
    
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
    }
    
    .modal-footer button {
      margin-left: 10px;
    }
    
    .btn-primary {
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
    
    .btn-secondary {
      background-color: #fff;
      color: #4caf50;
      border: 1px solid #4caf50;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}


</style>
