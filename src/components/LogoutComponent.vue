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
        <button class="btn btn-primary" @click="$emit('logout')">Yes, log me out</button>
        <button class="btn btn-secondary" @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoutModal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
/* add your logout modal styles here */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  z-index: 1000;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-header h3 {
  margin: 0;
}

.modal-body p {
  margin: 0;
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
</style>
